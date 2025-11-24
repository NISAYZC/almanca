import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import UnitsSection from "./components/UnitsSection";
import GamesSection from "./components/GamesSection";
import TipsSection from "./components/TipsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <HomeSection />
        <UnitsSection />
        <GamesSection />
        <TipsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
