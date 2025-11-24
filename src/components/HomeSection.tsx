import { useState, useEffect } from "react";

const HomeSection = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem("unideutsch_has_seen_banner");
    if (!hasSeenBanner) {
      setShowBanner(true);
    }
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
    localStorage.setItem("unideutsch_has_seen_banner", "true");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Info Banner */}
        {showBanner && (
          <div className="mb-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg relative">
            <button
              onClick={handleCloseBanner}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Kapat"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-sm text-gray-700 pr-6">
              Bu sayfa Almancaya sıfırdan başlayan üniversiteliler için tasarlanmıştır. İçerik zamanla genişletilebilir.
            </p>
          </div>
        )}

        {/* Main Content */}
        <div className="text-center space-y-8">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-2">
              Selami'nin Almanca Sitesi
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Sıfırdan Almanca, Üniversiteliler için
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Bu site A1 seviyesinden başlayarak temel Almanca öğrenmenize yardımcı olur. 
            Oyunlarla pratik yaparak öğrenmeyi eğlenceli hale getirin.
          </p>

          {/* Info Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Seviye: A1 Başlangıç
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              Hedef kitle: Üniversite öğrencileri
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => scrollToSection("units")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Ünitelerle Başla
            </button>
            <button
              onClick={() => scrollToSection("games")}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Oyun Oyna
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

