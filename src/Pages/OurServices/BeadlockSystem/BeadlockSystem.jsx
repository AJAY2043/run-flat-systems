// src/Pages/BeadlockSystem/BeadlockSystem.jsx

import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import beadlockData from '../../../Data/beadlockSystem.json';
import Footer from '../../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './BeadlockSystem.css';

const BeadlockSystem = () => {
  const [products] = useState(beadlockData);

  return (
    <div>
      <Navbar />
      <section className="beadlock-intro">
        <h2 className="intro-title">Introduction to Beadlock Systems</h2>
        <p className="intro-text">
          A beadlock system is essential in military vehicles, ensuring that the tire remains securely attached to the wheel, even in extreme conditions. This technology maintains mobility, enhances safety, and offers operational efficiency in challenging terrains.
        </p>
        <button className="quote-btn">Request A Quote</button>
      </section>
      
      <h2 className="section-title">Beadlock Systems</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Type:</strong> {product.type}</p>
            <p><strong>Vehicle Fit:</strong> {product.vehicle_fit}</p>
            <Link to={`/beadlocksystem/${product.id}`} className="view-more-btn">
              <i className="fas fa-arrow-right"></i> View More
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BeadlockSystem;
