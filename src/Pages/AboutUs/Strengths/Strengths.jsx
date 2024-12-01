import React from 'react';
import './Strengths.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faFeatherAlt, faRecycle , faShieldAlt ,faStopwatch , faHourglass } from '@fortawesome/free-solid-svg-icons';
const Strengths = () => {
  return (
    <div>
      <Navbar />
      <div className="strengths-container">
        <div className="strengths-hero-section">
        <h1>Strengths</h1>
        <p>Runflat Tire Systems has been growing year-on-year by offering products which technically differentiate with the competition on criteria established with our customers</p>
        </div>
        <div className="strength-section1">
        <FontAwesomeIcon icon={faTools} size="2x" className="strength-icon" />
          <h3>EASY FIT</h3>
          <p>Easy to fit in less than 10 minutes without special and expensive tools or presses. This allows in-theatre changes. Our RunFlat systems are also particularly safe to fit as it is not necessary to insert fingers inside the tyre during assembly.</p>
         
          <FontAwesomeIcon icon={faFeatherAlt} size="2x" className="strength-icon" />
          <h3>LIGHTER</h3>
          <p>Lighter due to their design and our proprietary material. Our Static systems typically offer more than 20% weight saving over rubber products. For further weight savings, heavy multi-piece wheels and rubber products may be replaced by Dynamic Systems on single-piece wheels.</p>
         
          <FontAwesomeIcon icon={faRecycle} size="2x" className="strength-icon" />
          <h3>REUSEABLE</h3>
          <p>Can be fitted on the same or another wheel rim whether it has been operated in run flat mode or not. Only a visual inspection is necessary to detect severe damage which may have been caused by a bomb blast or shooting.</p>
         
          <FontAwesomeIcon icon={faShieldAlt} size="3x" />
          <h3>ANTIBALLISTICS</h3>
          <p>Proprietary composite material has been specifically designed to offer exceptional antiballistic resistance. The material flexes, absorbs the energy of the bullet and partially heals back, even at freezing temperatures.</p>
         
          <FontAwesomeIcon icon={faStopwatch} size="3x" />
         <h3>PERFORMANCE</h3>
         <p>Comparative tests carried out consistently highlight a clear advantage for our products over the competition in terms of the quality of the vehicle handling and the distance covered in run flat mode on and off road.</p>
         
         <FontAwesomeIcon icon={faHourglass} size="3x" />
         <h3>LONG LIFE</h3>
         <p>If the RunFlat system is not used in deflated mode the system does not need to be changed regularly, in fact it can remain fitted for the lifetime of the vehicle without issue and can be removed and refitted during tyre changes.</p>
        </div>
       
       
        <div className="strength-section2"style={{background:'red',color:'white'}}>
          <strong><h3>Our products are market leading and continually give our customers the confidence needed when purchasing such an important vehicle component!</h3></strong>
        </div>
     </div>
      <Footer />
    </div>
  );
};

export default Strengths;
