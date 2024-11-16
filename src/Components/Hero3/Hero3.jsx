import React from 'react';
import './Hero3.css';
import hero_eleven from '../Assets/11.jpg';
import hero_tweleve from '../Assets/12.jpg'; // Updated to correct file names.
import hero_thirteen from '../Assets/13.jpg';
import hero_fourteen from '../Assets/14.jpg';
import hero_fifteen from '../Assets/15.jpg';

const Hero3 = () => {
  return (
    <div className="hero3-container">
      <div className="hero3-content">
        <h1 className="hero3-title">Welcome to Hero 3</h1>
        <p className="hero3-subtitle">Explore premium designs and vibrant visuals</p>
        <div className="hero3-images">
          <img src={hero_eleven} alt="Hero Eleven" className="hero3-image" />
          <img src={hero_tweleve} alt="Hero Twelve" className="hero3-image" />
          <img src={hero_thirteen} alt="Hero Thirteen" className="hero3-image" />
          <img src={hero_fourteen} alt="Hero Fourteen" className="hero3-image" />
          <img src={hero_fifteen} alt="Hero Fifteen" className="hero3-image" />
        </div>
        <button className="hero3-button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero3;
