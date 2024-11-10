import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import "./index.css";

// Import components for each page
import Menu from "./menu";
import Home from "./Home";
import Footer from "./footer";
import SSL from "./pages/ssl";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Cookies from "./pages/cookies";
import LiveStream from "./pages/LiveStream";
import ShowLineUp from "./pages/ShowLineUp";
import DemoDrop from "./pages/DemoDrop";
import ContactUs from "./pages/ContactUS";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Menu /> {/* The Menu is always visible, regardless of the route */}
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/livestream" element={<LiveStream />} />
        <Route path="/show-line-up" element={<ShowLineUp />} />
        <Route path="/demo-drop" element={<DemoDrop />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/SSL" element={<SSL />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Cookies />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
