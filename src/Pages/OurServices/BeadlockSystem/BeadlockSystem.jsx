import React from 'react';
import './BeadlockSystem.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const BeadlockSystem = () => {
  return (
    <>
    <Navbar/>
    <div className="beadlock-container">
      <div className="beadlock-header">
        <i className="fas fa-shield-alt beadlock-icon"></i>
        <h1>Beadlock System</h1>
      </div>
      <section className="beadlock-section">
        <div className="beadlock-intro">
          <h2>Introduction to Beadlock Systems</h2>
          <p>
            A beadlock system is a crucial component in military and off-road vehicles, designed to ensure that the tire
            remains securely attached to the wheel, even under extreme conditions. It plays a vital role in maintaining
            mobility, enhancing safety, and ensuring operational efficiency across challenging terrains.
          </p>
        </div>
        <div className="beadlock-how-it-works">
          <h2>
            <i className="fas fa-cogs"></i> How Beadlock Works
          </h2>
          <p>
            Beadlocks are devices that clamp the tire’s bead—the edge of the tire that sits on the wheel—securely to the
            wheel. This prevents the tire from slipping off, even when operating with reduced tire pressure or in extreme
            conditions.
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default BeadlockSystem;
