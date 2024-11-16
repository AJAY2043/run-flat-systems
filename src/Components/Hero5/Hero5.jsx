import React, { useState, useEffect } from 'react';
import './Hero5.css';
import hero_twenteyone from '../Assets/21.jpg';
import hero_twenteytwo from '../Assets/22.jpg';
import hero_twenteythree from '../Assets/23.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShieldAlt, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Hero5 = () => {
  const images = [hero_twenteyone, hero_twenteytwo, hero_twenteythree];
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero5-container">
      <div className="hero5-carousel">
        <img src={images[currentImage]} alt="RunFlat product" className="hero5-image" />
      </div>

      <div className="hero5-content">
        <h1>RunFlat International - Industry-Leading Supplier</h1>
        <p>
          <FontAwesomeIcon icon={faCheckCircle} className="hero5-icon" /> <strong>Leading the industry</strong> with innovative run-flat systems designed for defense and security.
        </p>
        <p>
          <FontAwesomeIcon icon={faShieldAlt} className="hero5-icon" /> <strong>Tested and trusted</strong> by military organizations worldwide, our products meet high standards like FINABEL, TUV, and SAE.
        </p>
        <p>
          <FontAwesomeIcon icon={faTrophy} className="hero5-icon" /> <strong>Recognized globally</strong> for excellence in quality and performance.
        </p>
        <div className="hero5-credentials">
          <h2>Our Credentials</h2>
          <p>
            RunFlat International has proven that its products fulfill European requirements like FINABEL 20.A.5" P.T. (Saudi Arabia), making us the leading independent supplier in the defense sector.
          </p>
          <p>
            Our products undergo rigorous testing to meet military standards including FINABEL, TUV, and SAE. Trusted by military forces and industries around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
