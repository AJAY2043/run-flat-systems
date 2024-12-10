import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaBook, FaDownload, FaTools, FaClipboard } from "react-icons/fa";
import "./Resources.css";

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className="resources">
        {/* Hero Section */}
        <div className="resources-hero">
          <h1 className="hero-title animate-slide-in">Resources</h1>
          <p className="hero-description animate-fade-in">
            Explore our library of documents, tools, and helpful materials to
            support your needs.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          <div className="resource-card animate-zoom">
            <FaBook className="resource-icon" />
            <h3>Documentation</h3>
            <p>Find detailed technical documents and guides.</p>
          </div>
          <div className="resource-card animate-zoom">
            <FaDownload className="resource-icon" />
            <h3>Downloads</h3>
            <p>Download software, brochures, and more.</p>
          </div>
          <div className="resource-card animate-zoom">
            <FaTools className="resource-icon" />
            <h3>Tools</h3>
            <p>Access tools to optimize your experience.</p>
          </div>
          <div className="resource-card animate-zoom">
            <FaClipboard className="resource-icon" />
            <h3>FAQs</h3>
            <p>Get answers to frequently asked questions.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
