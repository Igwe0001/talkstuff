import React, { useState } from "react";


import Benefits from "./components/Benefits";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [activeLink, setActiveLink] = useState("");

  const handleIntersectionChange = (id, inView) => {
    if (inView) {
      setActiveLink(id);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header activeLink={activeLink} />
      <Hero id="Home" onIntersectionChange={handleIntersectionChange} />
      <Features id="Features" onIntersectionChange={handleIntersectionChange} />
      <Benefits id="Benefits" onIntersectionChange={handleIntersectionChange} />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
