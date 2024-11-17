import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import './HeavyDutyWheels.css';

const HeavyDutyWheels = () => {
  return (
    <div>
      <Navbar />
      
      {/* Intro Section */}
      <section className="heavy-duty-intro">
        <h2 className="intro-title">
          <i className="fas fa-tools"></i> Introduction to Heavy Duty Wheels
        </h2>
        <p className="intro-description">
          Heavy duty wheels are engineered to perform under extreme conditions, offering unparalleled strength, durability, and performance. Whether in industrial, off-road, or military applications, these wheels are crucial for ensuring operational efficiency and safety.
        </p>
      </section>
      
      {/* Features Section */}
      <section className="heavy-duty-features">
        <h3 className="features-title">
          <i className="fas fa-cogs"></i> Key Features
        </h3>
        <ul className="features-list">
          <li className="feature-item">
            <i className="fas fa-check-circle"></i> High Load Capacity
          </li>
          <li className="feature-item">
            <i className="fas fa-check-circle"></i> Enhanced Durability
          </li>
          <li className="feature-item">
            <i className="fas fa-check-circle"></i> Designed for Rugged Terrain
          </li>
          <li className="feature-item">
            <i className="fas fa-check-circle"></i> Corrosion Resistance
          </li>
        </ul>
      </section>
      
      {/* Animation Section */}
      <section className="heavy-duty-animation">
        <h3 className="animation-title">
          <i className="fas fa-drafting-compass"></i> Cutting-Edge Design
        </h3>
        <div className="animation-box">
          <p>
            Watch how our heavy duty wheels outperform in the toughest environments.
          </p>
          <div className="wheel-animation"></div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HeavyDutyWheels;
