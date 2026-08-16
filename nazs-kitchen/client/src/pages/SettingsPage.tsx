import { Moon, Sun, Globe, Trash2, Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/useSettings";
import { useToast } from "@/hooks/use-toast";
import type { Language } from "@/types";
import { clearHistory, clearFavorites } from "@/services/storageService";

export default function SettingsPage() {
  const { settings, setTheme, setLanguage, t } = useSettings();
  const { toast } = useToast();

  const handleClearHistory = () => {
    clearHistory();
    toast({ title: t("cleared"), variant: "success" });
  };

  const handleClearFavorites = () => {
    clearFavorites();
    toast({ title: t("cleared"), variant: "success" });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-brand/10">
          <SettingsIcon className="h-6 w-6 text-orange-brand" />
        </div>
        <h1 className="text-3xl font-extrabold">{t("settingsTitle")}</h1>
      </div>

      <Card className="border-orange-brand/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            {settings.theme === "dark" ? (
              <Moon className="h-5 w-5 text-orange-brand" />
            ) : (
              <Sun className="h-5 w-5 text-orange-brand" />
            )}
            {t("theme")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="theme-switch" className="text-base">
              {settings.theme === "dark" ? t("darkMode") : t("lightMode")}
            </Label>
            <Switch
              id="theme-switch"
              checked={settings.theme === "dark"}
              onCheckedChange={(checked) =>
                setTheme(checked ? "dark" : "light")
              }
              aria-label={t("theme")}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-brand/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Globe className="h-5 w-5 text-orange-brand" />
            {t("language")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Button
              variant={settings.language === "tr" ? "default" : "outline"}
              onClick={() => setLanguage("tr" as Language)}
              className="flex-1"
            >
              🇹🇷 Türkçe
            </Button>
            <Button
              variant={settings.language === "en" ? "default" : "outline"}
              onClick={() => setLanguage("en" as Language)}
              className="flex-1"
            >
              🇬🇧 English
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-brand/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-destructive">
            <Trash2 className="h-5 w-5" />
            Veri Yönetimi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{t("clearHistory")}</p>
              <p className="text-sm text-muted-foreground">
                Tüm tarif geçmişini siler
              </p>
            </div>
            <Button variant="destructive" size="sm" onClick={handleClearHistory}>
              {t("clearHistory")}
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{t("clearFavorites")}</p>
              <p className="text-sm text-muted-foreground">
                Tüm favori tarifleri siler
              </p>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleClearFavorites}
            >
              {t("clearFavorites")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
