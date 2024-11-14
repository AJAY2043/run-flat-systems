import React from 'react';
import './Hero.css';
import heroGif from '../Assets/hero-gif.mp4';

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src={heroGif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1>Experience Run-Flat Tires Solutions</h1>
        <p>Your trusted partner for advanced tire technology and durability.</p>
        <button className="hero-btn">Discover More</button>
      </div>
    </div>
  );
};

export default Hero;
