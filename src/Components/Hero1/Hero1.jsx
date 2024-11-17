import React from 'react';
import './Hero1.css';
import hero_one from '../Assets/7.jpg';
import hero_two from '../Assets/10.jpg';
import hero_three from '../Assets/13.jpg';
import hero_four from '../Assets/16.jpg';
import hero_five from '../Assets/3.jpg';

const Hero1 = () => {
  return (
    <div className="hero-container">
      <div className="hero-slider">
        <div className="hero-slide">
          <img src={hero_one} alt="Hero 1" className="hero-image" />
          <div className="hero-content">
            <h1 className="hero-title">Welcome to RUNFLAT Tire Systems</h1>
            <p className="hero-subtitle">Experience the premium Products</p>
            <button className="hero-button">
              <i className="fas fa-arrow-right"></i> Explore More
            </button>
          </div>
        </div>
        <div className="hero-slide">
          <img src={hero_two} alt="Hero 2" className="hero-image" />
          <div className="hero-content">
            <h1 className="hero-title">Unmatched Elegance</h1>
            <p className="hero-subtitle">Crafted for the elite</p>
            <button className="hero-button">
              <i className="fas fa-arrow-right"></i> Discover Now
            </button>
          </div>
        </div>
        <div className="hero-slide">
          <img src={hero_three} alt="Hero 3" className="hero-image" />
          <div className="hero-content">
            <h1 className="hero-title">Timeless Designs</h1>
            <p className="hero-subtitle">Experience true artistry</p>
            <button className="hero-button">
              <i className="fas fa-arrow-right"></i> Learn More
            </button>
          </div>
        </div>
        <div className="hero-slide">
          <img src={hero_four} alt="Hero 3" className="hero-image" />
          <div className="hero-content">
            <h1 className="hero-title">Timeless Designs</h1>
            <p className="hero-subtitle">Experience true artistry</p>
            <button className="hero-button">
              <i className="fas fa-arrow-right"></i> Learn More
            </button>
          </div>
        </div>
        <div className="hero-slide">
          <img src={hero_five} alt="Hero 3" className="hero-image" />
          <div className="hero-content">
            <h1 className="hero-title">Timeless Designs</h1>
            <p className="hero-subtitle">Experience true artistry</p>
            <button className="hero-button">
              <i className="fas fa-arrow-right"></i> Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
