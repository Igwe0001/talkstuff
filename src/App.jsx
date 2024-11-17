import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/UI/ScrollToTop";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dispute from "./pages/Dispute";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faqs from "./pages/Faqs";

function App() {
  const [activeLink, setActiveLink] = useState("");

  const handleIntersectionChange = (id, inView) => {
    if (inView) {
      setActiveLink(id);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ScrollToTop>
        <Header activeLink={activeLink} />
        <Routes>
          <Route
            path="/"
            element={<Home onIntersectionChange={handleIntersectionChange} />}
          />
          <Route path="/Disputes" element={<Dispute />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Faqs" element={<Faqs />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
