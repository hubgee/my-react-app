import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoBox from "./components/InfoBox";
import ProviderSection from "./components/ProviderSection";
import TrustSection from "./components/TrustSection"; 
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <InfoBox />
      <ProviderSection />
      <TrustSection />

    </div>
  );
}

export default App;