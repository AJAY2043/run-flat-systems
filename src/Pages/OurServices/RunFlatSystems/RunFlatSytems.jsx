// src/Pages/RunFlatSystems/RunFlatSystems.jsx

import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import runFlatData from '../../../Data/runflatSystems.json';
import './RunFlatSystems.css';
import { Link } from 'react-router-dom';

const RunFlatSystems = () => {
  return (
    <div>
      <Navbar />

      {/* Old Website Introduction Section */}
      <section className="intro-section">
        <h2><i className="fas fa-shield-alt"></i> RUNFLAT Systems</h2>
        <p>
          Runflat systems ensure that drivers can keep moving safely even after a tire blast or pressure loss due to firing. This feature minimizes downtime, allowing vehicles to reach their destination or a safe location uninterrupted.
        </p>
        <h3>Benefits of Choosing RunFlat Tire Systems</h3>
        <ul className="benefits-list">
          <li><i className="fas fa-check-circle"></i> <strong>Peace of Mind:</strong> Our Runflat Systems are tried & tested for outstanding performance on the highway and cross-country.</li>
          <li><i className="fas fa-check-circle"></i> <strong>Material Superiority:</strong> Crafted from innovative ballistic composite, ensuring durability without degradation over time.</li>
          <li><i className="fas fa-check-circle"></i> <strong>Easy on Your Wallet:</strong> Competitive pricing allows you to save more and drive further.</li>
          <li><i className="fas fa-check-circle"></i> <strong>Easy Installation:</strong> Designed with easy-to-install 2 or 3 segment systems, requiring no prior training or complex tools.</li>
        </ul>
        <button className="quote-btn">Request A Quote</button>
      </section>

      {/* New Website Product Section */}
      <section className="products-section">
        <h2>Our RunFlat Tire Options</h2>
        <div className="product-container">
          {runFlatData.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Type:</strong> {product.type}</p>
              <Link to={`/runflatsystems/${product.id}`}>
                <button className="view-more-btn">View More</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RunFlatSystems;
