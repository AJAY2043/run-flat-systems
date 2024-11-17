import React from 'react';
import './Markets.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const Markets = () => {
  return (
    <div>
      <Navbar />
      <div className="markets-container">
        <h1>Markets Served</h1>
        <p>
          <strong>RUNFLAT Tire Systems</strong> is the leading independent Runflat Tire Systems supplier in the defence and security sector. 
          We specialize in custom-engineered solutions that offer unmatched durability and performance under extreme conditions.
        </p>
        <p>
          Our products are trusted by the Ministries of Defence and Interior of several countries (including the UK, USA, and India), providing high-performance tire solutions for various types of vehicles, from military trucks to civilian security vehicles.
        </p>
        
        <h2>Key Markets and Applications</h2>
        <ul>
          <li>
            <strong>Military & Defense:</strong> We supply RunFlat tire systems for armored vehicles, military trucks, and combat vehicles, ensuring safe operation in hostile environments.
          </li>
          <li>
            <strong>Security Forces:</strong> Our Runflat Tire Systems inserts are used by law enforcement agencies worldwide, providing tire security during high-speed pursuits and challenging terrains.
          </li>
          <li>
            <strong>Commercial Vehicles:</strong> We provide rugged solutions for 4X4, 6X6, and other off-road vehicles, ideal for construction, mining, and other industries requiring enhanced tire reliability.
          </li>
          <li>
            <strong>Automotive & Civilian Markets:</strong> Expanding our reach into civilian vehicles and specialized commercial applications, ensuring mobility even in challenging conditions.
          </li>
        </ul>
        
        <h2>Global Presence</h2>
        <p>
          With a robust global network and years of experience, we cater to markets worldwide, offering high-quality products that meet international standards for performance, durability, and safety.
        </p>
        <p>
          We continue to innovate and adapt to the evolving needs of the defense, security, and commercial sectors, reinforcing our position as a leading supplier of Runflat Tire Systems globally.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Markets;
