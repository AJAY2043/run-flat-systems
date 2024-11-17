import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import './MilitaryRunFlatSystems.css';

const MilitaryRunFlatSystems = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="military-runflat-hero">
        <div className="hero-content">
          <h1 className="hero-title">Military RunFlat Systems</h1>
          <p className="hero-subtitle">
            Ensuring mobility and safety in the harshest conditions.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="runflat-intro">
        <h2 className="section-title">What are Military RunFlat Systems?</h2>
        <p className="section-description">
          Military RunFlat Systems are essential for vehicles operating in combat and extreme terrains. These systems enable vehicles to continue moving even after a tire puncture, enhancing mobility, safety, and mission success.
        </p>
      </section>

      {/* Features Section */}
      <section className="runflat-features">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-shield-alt feature-icon"></i>
            <h3 className="feature-title">Enhanced Durability</h3>
            <p>Built to withstand rugged terrains and extreme conditions.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-car-crash feature-icon"></i>
            <h3 className="feature-title">Puncture Resistance</h3>
            <p>Maintains mobility even after tire damage.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-road feature-icon"></i>
            <h3 className="feature-title">Operational Efficiency</h3>
            <p>Ensures uninterrupted vehicle operation during missions.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="runflat-applications">
        <h2 className="section-title">Applications</h2>
        <ul className="applications-list">
          <li>
            <i className="fas fa-check-circle application-icon"></i>
            Military combat vehicles
          </li>
          <li>
            <i className="fas fa-check-circle application-icon"></i>
            Armored personnel carriers
          </li>
          <li>
            <i className="fas fa-check-circle application-icon"></i>
            Tactical transport vehicles
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default MilitaryRunFlatSystems;
