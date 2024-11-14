// src/Components/HeroImg.jsx
import React, { useState, useEffect } from 'react';
import './HeroImg.css';
import hero_img2 from '../Assets/hero-img2.jpg';
import hero_img3 from '../Assets/hero-img3.jpg';
import hero_img4 from '../Assets/hero-img4.jpg';
import hero_img5 from '../Assets/hero-img5.jpg';

const HeroImg = () => {
  const images = [hero_img2, hero_img3, hero_img4, hero_img5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
        <div className="hero-img-carosual">
      <img src={images[currentImage]} alt="Hero" className="hero-image" />
      <div className="hero-overlay">
        <h1>Welcome to Our Website</h1>
        <p>Your safety and durability partner</p>
      </div>
      </div>
    </div>
  );
};

export default HeroImg;
