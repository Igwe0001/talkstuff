import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import Benefits from "../components/Benefits";

const Home = ({ onIntersectionChange }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Hero id="Home" onIntersectionChange={onIntersectionChange} />
      <Features id="Features" onIntersectionChange={onIntersectionChange} />
      <Benefits id="Benefits" onIntersectionChange={onIntersectionChange} />
      <Download />
    </div>
  );
};

export default Home;
