import React from 'react';
import './Strengths.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const Strengths = () => {
  return (
    <div>
      <Navbar />
      <div className="strengths-container">
        <h1>Our Strengths</h1>
        <p>
          <strong>RunFlat International</strong> has been growing year-on-year by offering products that technically differentiate with the competition, based on criteria established with our customers. Our strengths include:
        </p>
        <div className="strength-item">
          <h2>Easy Fit</h2>
          <p>
            Our RunFlat products are designed to be easily fitted in under 10 minutes, with no need for special, expensive tools or presses. This ensures quick and cost-effective installation, reducing downtime and making maintenance simpler.
          </p>
        </div>
        <div className="strength-item">
          <h2>Durability</h2>
          <p>
            We use the highest-quality materials that ensure longevity and reliability under extreme conditions, offering superior performance in both civilian and military applications.
          </p>
        </div>
        <div className="strength-item">
          <h2>Ballistic Resistance</h2>
          <p>
            Our unique composite material offers enhanced ballistic resistance, providing unmatched safety and protection. This makes our products highly reliable, especially for defense and security applications.
          </p>
        </div>
        <div className="strength-item">
          <h2>Custom Solutions</h2>
          <p>
            We offer tailor-made solutions to meet the specific needs of different markets. Whether for armored vehicles or civilian use, we provide products that are perfectly suited to our customers' requirements.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Strengths;
