// src/Pages/MilitaryWheels/MilitaryWheels.jsx

import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import militaryWheelsData from '../../../Data/militaryWheels.json';
import Footer from '../../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './MilitaryWheels.css';

const MilitaryWheels = () => {
  return (
    <div>
      <Navbar />

      {/* Intro Section */}
      <section className="military-wheels-intro">
        <h2>Introduction to Military Wheels</h2>
        <p>
          Military vehicles operate in some of the harshest and most demanding environments on the planet. To ensure their reliability and performance, every component must be designed to withstand extreme conditions. Military Wheels enhance stability, mobility, and durability for high-load military vehicles.
        </p>
        <button className="quote-btn">Request A Quote</button>
      </section>

      {/* Product Listing Section */}
      <h2 className="section-title">Military Wheels</h2>
      <div className="product-container">
        {militaryWheelsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Type:</strong> {product.type}</p>
            <p><strong>Vehicle Fit:</strong> {product.vehicle_fit}</p>
            <Link to={`/militarywheels/${product.id}`} className="view-more-btn">
              <button>
                <i className="fas fa-arrow-right"></i> View More
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MilitaryWheels;
