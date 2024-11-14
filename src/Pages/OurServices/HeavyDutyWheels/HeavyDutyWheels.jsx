// src/Pages/HeavyDutyWheels/HeavyDutyWheels.jsx

import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import heavyDutyData from '../../../Data/heavyDutyWheels.json';
import Footer from '../../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './HeavyDutyWheels.css';

const HeavyDutyWheels = () => {
  return (
    <div>
      <Navbar />

      {/* Intro Section */}
      <section className="heavy-duty-intro">
        <h2>Introduction to Heavy Duty Wheels</h2>
        <p>
          Heavy duty wheels are built to withstand significant weight, ensuring stability and safety of armored vehicles. They are engineered with reinforced structures to handle high load capacities without compromising performance.
          Heavy Duty Wheels are available for all the popular armored vehicles on the market, and can be customized as per the customer’s requirements.
        </p>
        <button className="quote-btn">Request A Quote</button>
      </section>

      {/* Product Listing Section */}
      <h2 className="section-title">Heavy Duty Wheels</h2>
      <div className="product-container">
        {heavyDutyData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Type:</strong> {product.type}</p>
            <p><strong>Vehicle Fit:</strong> {product.vehicle_fit}</p>
            <Link to={`/heavydutywheels/${product.id}`} className="view-more-btn">
              <i className="fas fa-arrow-right"></i> View More
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HeavyDutyWheels;
