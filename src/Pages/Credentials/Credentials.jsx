import React from 'react';
import './Credentials.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShieldAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Hero5 from '../../Components/Hero5/Hero5';

const Credentials = () => {
  return (
    <div>
      <Navbar />
      <Hero5/>
      <div className="credentials-container">
        <h1>Our Credentials</h1>
        <p className="intro-text">
          RunFlat International is the leading independent RunFlat supplier in the defence and security sector. Our products meet the highest standards of quality, performance, and safety.
        </p>
        
        <div className="credentials-list">
          <div className="credential-item">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <h3>Military Standards Compliance</h3>
            <p>
              Our run-flat systems are rigorously tested according to military standards such as FINABEL, TUV, and American standards (SAE). Our products meet the toughest requirements, ensuring performance and safety in critical situations.
            </p>
          </div>
          
          <div className="credential-item">
            <FontAwesomeIcon icon={faCertificate} className="icon" />
            <h3>Certified Quality</h3>
            <p>
              Our systems have been tested and proven to meet European standards, including FINABEL 20.A.5" P.T. (Saudi Arabia), confirming the reliability and robustness of our products.
            </p>
          </div>
          
          <div className="credential-item">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <h3>Proven Performance</h3>
            <p>
              We are proud of our ability to deliver performance under pressure. RunFlat International's products continue to prove their reliability in real-world scenarios, ensuring maximum safety for our clients.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Credentials;
