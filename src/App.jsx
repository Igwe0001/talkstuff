import Benefits from "./components/Benefits";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Benefits/>
      <Download />
      <Footer/>
    </div>
  );
}

export default App;
