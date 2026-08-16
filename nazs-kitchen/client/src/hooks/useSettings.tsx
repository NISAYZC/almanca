import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { AppSettings, Language } from "@/types";
import { t as translate, type TranslationKeys } from "@/lib/i18n";
import {
  getSettings,
  saveSettings,
  applyTheme,
  applyLanguage,
} from "@/services/storageService";

interface SettingsContextValue {
  settings: AppSettings;
  setTheme: (theme: "light" | "dark") => void;
  setLanguage: (language: Language) => void;
  t: (key: keyof TranslationKeys) => string;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(() => getSettings());

  useEffect(() => {
    applyTheme(settings.theme);
    applyLanguage(settings.language);
  }, [settings.theme, settings.language]);

  const setTheme = useCallback((theme: "light" | "dark") => {
    setSettings((prev) => {
      const updated = { ...prev, theme };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const setLanguage = useCallback((language: Language) => {
    setSettings((prev) => {
      const updated = { ...prev, language };
      saveSettings(updated);
      return updated;
    });
  }, []);

  const tFn = useCallback(
    (key: keyof TranslationKeys) => translate(key, settings.language),
    [settings.language]
  );

  return (
    <SettingsContext.Provider
      value={{ settings, setTheme, setLanguage, t: tFn }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return context;
}
