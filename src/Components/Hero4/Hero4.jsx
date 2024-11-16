import React, { useState, useEffect } from 'react';
import './Hero4.css';
import hero_sixteen from '../Assets/16.jpg';
import hero_seventeen from '../Assets/17.jpg';
import hero_eightteen from '../Assets/18.jpg';
import hero_nineteen from '../Assets/19.jpg';
import hero_twentiy from '../Assets/20.jpg';

const Hero4 = () => {
  const images = [
    hero_sixteen,
    hero_seventeen,
    hero_eightteen,
    hero_nineteen,
    hero_twentiy,
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero4-container">
      <div className="carousel">
        <img 
          src={images[currentImageIndex]} 
          alt="Carousel slide" 
          className="carousel-image" 
        />
      </div>
      <div className="hero4-content">
        <h1>Welcome to Runflat Tire Systems</h1>
        <p>
          Your trusted partner for custom RUNFLAT insert manufacturing. 
          We provide cutting-edge solutions tailored to the needs of 4X4, 6X6, and specialty vehicles worldwide.
        </p>
      </div>
    </div>
  );
};

export default Hero4;
