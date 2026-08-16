import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "@/hooks/useSettings";
import { Navbar, MobileNav, Footer } from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/HomePage";
import RecipePage from "@/pages/RecipePage";
import FavoritesPage from "@/pages/FavoritesPage";
import HistoryPage from "@/pages/HistoryPage";
import SettingsPage from "@/pages/SettingsPage";

export default function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream via-background to-background dark:from-cream-dark dark:via-background dark:to-background">
          <Navbar />
          <main className="flex-1 container py-8 pb-24 md:pb-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipe/:id" element={<RecipePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
          <Footer />
          <MobileNav />
          <Toaster />
        </div>
      </BrowserRouter>
    </SettingsProvider>
  );
}
