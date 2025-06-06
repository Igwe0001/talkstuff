import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/UI/ScrollToTop";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dispute from "./pages/Dispute";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faqs from "./pages/Faqs";
import Community from "./pages/Community";
import ConnectForm from "./components/ConnectForm";
import LuvHubForm from "./components/LuvHubForm";
import MaketPlaceForm from "./components/MaketPlaceForm";
import DownloadForm from "./components/DownloadForm";
import About from "./pages/About";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/" || path === "/About") {
      setActiveLink("About");
    } else if (path === "/Home") {
      setActiveLink("Home");
    }
  }, [location]);

  const handleIntersectionChange = (id, inView) => {
    if (inView) {
      setActiveLink(id);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* <ScrollToTop>
      </ScrollToTop> */}
      <Header activeLink={activeLink} />
      <Routes>
        <Route
          path="/"
          element={<About />}
          // element={<Home onIntersectionChange={handleIntersectionChange} />}
        />
        <Route
          path="/Home"
          element={<Home onIntersectionChange={handleIntersectionChange} />}
        />
        <Route path="/Disputes" element={<Dispute />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Connect" element={<ConnectForm />} />
        <Route path="/Luvhub" element={<LuvHubForm />} />
        <Route path="/Market" element={<MaketPlaceForm />} />
        <Route path="/Download" element={<DownloadForm />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
