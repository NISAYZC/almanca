const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">
            Her yaşa Almanca oyun alanı — koş, zıpla, kelime topla!
          </p>
          <p className="text-sm text-gray-400">
            Hazırlayan: Nisa
          </p>
          
          <div className="pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("units")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Üniteler
              </button>
              <button
                onClick={() => scrollToSection("games")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Oyunlar
              </button>
              <button
                onClick={() => scrollToSection("tips")}
                className="text-gray-400 hover:text-white transition-colors"
              >
                İpuçları
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

