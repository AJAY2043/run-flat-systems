import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import './RunFlatSystems.css';
import { Link } from 'react-router-dom';

const RunFlatSystems = () => {

    return (
    <div>
      <Navbar />
      
      <div className="runflatsystem-hero-section-heading">
        <h1>RUNFLAT Systems</h1>
      </div>
      
      <div className="runflatsystem-section1">
        <h3>Runflat systems ensure that drivers can keep moving safely even after loss of pressure due to a firing incident or tire blast. This feature eliminates the need for immediate stops to change a tire, reducing downtime and allowing the vehicles to reach their destination or a safe location without interruption.    Operators benefit from knowing they have an extra layer of safety on the road.</h3>
      </div>
      
      <br /><br />
      <hr />
      <br />
      
      <div className="runflatsystem-section2">
        <h2><strong>Benefits of Choosing Runflat Tire Systems</strong></h2>
           <p><strong>Peace of Mind: </strong> Whether you're cruising on the highway or going cross country, our Runflat Systems have been tried & tested to outperform.</p><br />
           <p><strong>Material Superiority: </strong>Many Years of material innovation to craft the perfect Ballistic composite so that our Runflats do not degrade over time.</p><br />
           <p><strong>Easy on your Wallet: </strong>We have the best prices on the market. So you spend less to go further.</p><br />
           <p><strong>Easy Installation : </strong>2 or 3 Segment Runflat Systems are easy to install without prior training or complex tools.</p>
      </div>
      
      <br /><br />
      
      <div className="runflatsystem-section3">
        <Link to={'/contactus'}><button>Request A Quote</button></Link>
      </div>

          <Footer />
    </div>
  );
};

export default RunFlatSystems;
