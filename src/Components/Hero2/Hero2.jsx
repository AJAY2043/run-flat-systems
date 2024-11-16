import React from 'react';
import './Hero2.css';
import hero_six from '../Assets/6.jpg';
import hero_seven from '../Assets/7.jpg';
import hero_eight from '../Assets/8.jpg';
import hero_nine from '../Assets/9.jpg';
import hero_ten from '../Assets/10.jpg';

const Hero2 = () => {
  return (
    <div className="hero2-container">
      <div className="hero2-content">
        <h1 className="hero2-heading">Welcome to Premium Experience</h1>
        <p className="hero2-description">
          Discover the most exquisite destinations and moments through our curated collection.
        </p>
        <button className="hero2-btn">Explore More</button>
      </div>
      <div className="hero2-images">
        <img src={hero_six} alt="Hero 6" className="hero2-img fade-in" />
        <img src={hero_seven} alt="Hero 7" className="hero2-img fade-in" />
        <img src={hero_eight} alt="Hero 8" className="hero2-img fade-in" />
        <img src={hero_nine} alt="Hero 9" className="hero2-img fade-in" />
        <img src={hero_ten} alt="Hero 10" className="hero2-img fade-in" />
      </div>
    </div>
  );
};

export default Hero2;
