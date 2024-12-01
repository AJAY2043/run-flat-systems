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
        Proud of its 200-year-old heritage, RunFlat International also has all the attributes of a small business: responsiveness, focused expertise and ease to do business with.</p>
      </div>
    </div>
  );
};

export default Hero4;
