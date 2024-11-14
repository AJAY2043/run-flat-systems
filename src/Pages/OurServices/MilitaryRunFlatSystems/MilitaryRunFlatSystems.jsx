// src/Pages/MilitaryRunFlatSystems/MilitaryRunFlatSystems.jsx

import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import productData from '../../../Data/militaryRunflatSystem.json';
import Footer from '../../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './MilitaryRunFlatSystems.css';

const MilitaryRunFlatSystems = () => {
  const [products] = useState(productData); // Load data directly

  return (
    <div>
      <Navbar />
      <section className="military-runflat-section">
        <h2 className="section-title">Military RunFlat Systems</h2>
        <p className="section-description">
          Our Military RunFlat Systems are designed for operational continuity, enhanced safety, and durability in the most demanding environments.
        </p>
        <div className="product-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Type:</strong> {product.type}</p>
                <p><strong>Vehicle Fit:</strong> {product.vehicle_fit}</p>
                <Link to={`/militaryrunflatsystem/${product.id}`} className="view-more-btn">
                  <i className="fas fa-arrow-right"></i> View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MilitaryRunFlatSystems;
