import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import './MilitaryWheels.css';

const MilitaryWheels = () => {
  return (
    <div>
      <Navbar />

      {/* Intro Section */}
      <section className="military-wheels-intro">
        <h2 className="section-title">Introduction to Military Wheels</h2>
        <p className="section-description">
          Military vehicles operate in some of the most demanding and hostile environments on Earth. The wheels that support these vehicles must be engineered to withstand extreme conditions, from rugged terrains to harsh weather. Military wheels are critical for ensuring mobility, operational readiness, and vehicle safety in combat and tactical situations.
        </p>
      </section>

      {/* Advantages Section */}
      <section className="military-wheels-advantages">
        <h3 className="section-title">Advantages of Military Wheels</h3>
        <ul className="advantages-list">
          <li><i className="fas fa-shield-alt"></i> Enhanced Durability</li>
          <li><i className="fas fa-cogs"></i> Superior Load Bearing</li>
          <li><i className="fas fa-tachometer-alt"></i> Optimal Performance in Extreme Conditions</li>
          <li><i className="fas fa-road"></i> Maximum Traction on Rough Terrains</li>
        </ul>
      </section>

      {/* Key Features Section */}
      <section className="military-wheels-features">
        <h3 className="section-title">Key Features of Military Wheels</h3>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-fire"></i>
            <h4>Heat Resistance</h4>
            <p>Designed to perform under high temperatures, ensuring reliability during intense operations.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-cloud"></i>
            <h4>Weather Proof</h4>
            <p>Built to endure extreme weather conditions like rain, snow, and heat, keeping vehicles mobile in any climate.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-mountain"></i>
            <h4>Terrain Versatility</h4>
            <p>Optimized for smooth and rough terrain alike, offering exceptional traction on rocky, sandy, and muddy surfaces.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilitaryWheels;
