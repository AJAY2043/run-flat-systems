import React from "react";
// import backgroundHeroImg from "../Assets/3.jpg";
import topHeroImg from "../Assets/tire-img4.jpg";
import "./MainHero.css"; // Import the CSS file for animations

const MainHero = () => {
  return (
    <div className="hero-container">
      {/* Background Image */}
      <div className="hero-background"></div>
      
      {/* Content */}
      <div className="hero-content">
        {/* Heading */}
        <h2 className="hero-heading">MOBILITY & SECURITY EXPERTS</h2>
        
        {/* Top Image */}
        <img src={topHeroImg} alt="Top Hero" className="hero-top-image" />
        
        {/* Paragraph */}
        <p className="hero-paragraph">
          A complete range of runflat systems and reinforced wheels to suit all military vehicles and applications.
        </p>
        
        {/* Button */}
        <button className="hero-button">More Information</button>
      </div>
    </div>
  );
};

export default MainHero;
