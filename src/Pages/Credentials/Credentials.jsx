import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaAward, FaShieldAlt, FaStar, FaThumbsUp } from "react-icons/fa";
import "./Credentials.css";

const Credentials = () => {
  return (
    <div>
      <Navbar />
      <div className="credentials">
        {/* Hero Section */}
        <div className="credentials-hero">
          <h1 className="hero-title animate-slide-in">Our Credentials</h1>
          <p className="hero-subtitle animate-fade-in">
            We pride ourselves on delivering the best quality and innovation.
          </p>
        </div>

        {/* Credentials List */}
        <div className="credentials-list">
          <div className="credential-item animate-scale">
            <FaAward className="icon" />
            <h2>Award-Winning Innovation</h2>
            <p>
              Recognized globally for our cutting-edge designs and unmatched
              performance.
            </p>
          </div>
          <div className="credential-item animate-scale">
            <FaShieldAlt className="icon" />
            <h2>Trusted Security</h2>
            <p>
              Ensuring the highest standards of safety and reliability.
            </p>
          </div>
          <div className="credential-item animate-scale">
            <FaStar className="icon" />
            <h2>Top Quality</h2>
            <p>
              Premium materials and excellent craftsmanship in every product.
            </p>
          </div>
          <div className="credential-item animate-scale">
            <FaThumbsUp className="icon" />
            <h2>Customer Satisfaction</h2>
            <p>
              Our success is driven by our commitment to client satisfaction.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Credentials;
