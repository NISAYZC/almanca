import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors group"
            >
              <div className="relative">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 transition-transform group-hover:scale-110"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Open book shape */}
                  <path
                    d="M15 20 L40 10 L65 20 L65 60 L40 70 L15 60 Z"
                    fill="#3B82F6"
                    className="group-hover:fill-blue-700 transition-colors"
                  />
                  {/* Book pages */}
                  <path
                    d="M20 25 L40 17 L60 25 L60 55 L40 63 L20 55 Z"
                    fill="#FFFFFF"
                  />
                  {/* Text lines */}
                  <line
                    x1="25"
                    y1="32"
                    x2="55"
                    y2="32"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="25"
                    y1="38"
                    x2="50"
                    y2="38"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="25"
                    y1="44"
                    x2="55"
                    y2="44"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* German flag stripe accent */}
                  <rect
                    x="20"
                    y="50"
                    width="40"
                    height="3"
                    fill="#000000"
                    rx="1.5"
                  />
                  <rect
                    x="20"
                    y="55"
                    width="40"
                    height="3"
                    fill="#DC2626"
                    rx="1.5"
                  />
                  <rect
                    x="20"
                    y="60"
                    width="40"
                    height="3"
                    fill="#FCD34D"
                    rx="1.5"
                  />
                  {/* Sparkle/star accent */}
                  <circle
                    cx="50"
                    cy="15"
                    r="3"
                    fill="#FCD34D"
                    className="animate-pulse"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="leading-tight">Selami'nin</span>
                <span className="leading-tight text-blue-600 group-hover:text-blue-700">
                  Almanca Sitesi
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("units")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Üniteler
            </button>
            <button
              onClick={() => scrollToSection("games")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Oyunlar
            </button>
            <button
              onClick={() => scrollToSection("tips")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              İpuçları
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection("units")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
            >
              Üniteler
            </button>
            <button
              onClick={() => scrollToSection("games")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
            >
              Oyunlar
            </button>
            <button
              onClick={() => scrollToSection("tips")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
            >
              İpuçları
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

