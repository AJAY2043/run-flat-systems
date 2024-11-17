import React from 'react';
import './About.css';
import aboutHeroImg from '../Assets/17.jpg';
import vivekDirectorSign from '../Assets/vivek-sign.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faShieldAlt, faIndustry } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="animate-fade">About Us</h2>
        <p className="animate-fade">
          Runflat Tire Systems is dedicated to providing advanced tire solutions that enhance durability, safety, and performance.
          With cutting-edge technology, we serve a variety of industries, ensuring quality and reliability at every step.
        </p>
        <button className="about-btn">Learn More</button>
      </div>

      <div className="about-image">
        <img src={aboutHeroImg} alt="About Us" className="animate-fade" />
      </div>

      <div className="custom-solutions">
        <h3>Custom Runflat Solutions</h3>
        <p>
          Each Runflat System is custom-made to match client specifications and requirements, complying with Finabel Standards and 
          End User tests even in deflated conditions.
        </p>
        <p>
          We offer Runflat systems for any custom wheel and tire configuration (any size) as per customer requirements. Ideal for 
          Armoured Cars, SUVs, Military Vehicles, and other Special Purpose Vehicles.
        </p>
      </div>

      <div className="expertise">
        <h3>Our Expertise</h3>
        <div className="expertise-icons">
          <div className="icon-box">
            <FontAwesomeIcon icon={faCogs} className="icon" />
            <h4>Custom Runflat Systems</h4>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <h4>Military-Grade Solutions</h4>
          </div>
          <div className="icon-box">
            <FontAwesomeIcon icon={faIndustry} className="icon" />
            <h4>Specialized Industries</h4>
          </div>
        </div>
      </div>

      <div className="director-sign">
        <img src={vivekDirectorSign} alt="Vivek Japala" />
        <p><strong>Vivek Japala</strong><br />Manager</p>
      </div>
    </section>
  );
};

export default About;
