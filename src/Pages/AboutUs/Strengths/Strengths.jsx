import React from 'react'; 
import './Strengths.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faFeatherAlt, faRecycle, faShieldAlt, faStopwatch, faHourglass } from '@fortawesome/free-solid-svg-icons';

const Strengths = () => {
  return (
    <div>
      <Navbar />
      <div className="strengths-container">
        <div className="strengths-hero-section">
          <h1>Strengths</h1>
          <p>
            Runflat Tire Systems has been growing year-on-year by offering products that technically differentiate from the competition on criteria established with our customers.
          </p>
        </div>
        <div className="strength-section1">
          <div className="strength-box">
            <FontAwesomeIcon icon={faTools} size="2x" className="strength-icon" />
            <h3>Durability</h3>
            <p>Our tires are built to last, providing unmatched durability in the toughest conditions.</p>
          </div>
          <div className="strength-box">
            <FontAwesomeIcon icon={faFeatherAlt} size="2x" className="strength-icon" />
            <h3>Lightweight</h3>
            <p>Designed to be lighter without compromising on strength, our tires ensure better fuel efficiency.</p>
          </div>
          <div className="strength-box">
            <FontAwesomeIcon icon={faRecycle} size="2x" className="strength-icon" />
            <h3>Eco-Friendly</h3>
            <p>We prioritize the environment with sustainable materials and processes in every tire.</p>
          </div>
        </div>
        <div className="strength-section2">
          <div className="strength-box">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" className="strength-icon" />
            <h3>Safety</h3>
            <p>Our tires provide exceptional grip and stability, ensuring maximum safety on any road.</p>
          </div>
          <div className="strength-box">
            <FontAwesomeIcon icon={faStopwatch} size="2x" className="strength-icon" />
            <h3>Efficiency</h3>
            <p>Designed for efficiency, our tires optimize performance and reduce wear over time.</p>
          </div>
          <div className="strength-box">
            <FontAwesomeIcon icon={faHourglass} size="2x" className="strength-icon" />
            <h3>Longevity</h3>
            <p>With high-quality materials, our tires offer extended lifespans even in the most demanding conditions.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Strengths;
