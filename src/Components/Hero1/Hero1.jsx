import React from 'react';
import './Hero1.css';
import hero_one from '../Assets/1.jpg';
import hero_two from '../Assets/2.jpg';
import hero_three from '../Assets/3.jpg';
import hero_four from '../Assets/4.jpg';
import hero_five from '../Assets/5.jpg';

const Hero1 = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Premium Designs</h1>
        <p className="hero-description">
          Discover a world of creativity and innovation with stunning visuals and sleek animations.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-images">
        <img src={hero_one} alt="Hero 1" className="hero-img hero-img-1" />
        <img src={hero_two} alt="Hero 2" className="hero-img hero-img-2" />
        <img src={hero_three} alt="Hero 3" className="hero-img hero-img-3" />
        <img src={hero_four} alt="Hero 4" className="hero-img hero-img-4" />
        <img src={hero_five} alt="Hero 5" className="hero-img hero-img-5" />
      </div>
    </div>
  );
};

export default Hero1;
