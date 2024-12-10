import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import page_hero_img from '../../../Components/Assets/page-hero-img3.jpeg';
import security_armoured_vehicles from '../../../Components/Assets/ambulance.jpg';
import military_armoured_vehicles from '../../../Components/Assets/military-armoured-vehicle.jpg';
import off_road_vehicles from '../../../Components/Assets/off-road-vehicles.jpg';
import cash_in_transit from '../../../Components/Assets/cash-in-transit.jpg';
import mass_transit_vehicles from '../../../Components/Assets/mass-transit-vehicles.jpg';
import autonomous_vehicles from '../../../Components/Assets/autonomous-vehicles.jpg';
import './Markets.css';

const Markets = () => {
  return (
    <div>
      <Navbar />
      <div className="markets">
        {/* Hero Section */}
        <div className="markets-page-hero-section">
          <img src={page_hero_img} alt="Hero" />
          <strong><h1>Markets</h1></strong>
          <h3>RunFlat International is the leading independent provider of RunFlat systems across various markets.</h3>
        </div><br /><br />

        <div className="markets-page-info-section">
          <p>RunFlat International sells products to a wide range of markets and applications. Following our success with the Ministries of Defence and Interiors of many countries (UK, Spain, Germany, India, Pakistan, Thailand, Malaysia..), RunFlat International have expanded our product range and are offering into a wide range of applications including:</p><br /><br />
          <ul>
           <strong><li>Emergency Vehicles</li></strong>
           <strong><li>VIP Cars</li></strong>
           <strong><li>Aid Agency Vehicles</li></strong>
           <strong><li>Off road vehicles</li></strong>
           <strong><li>High Value Cargo Carriers</li></strong>
           <strong><li>Caravans and Trailers</li></strong>
           <strong><li>Anti riot vehicles</li></strong>
           <strong><li>Armoured vehicles</li></strong>
          </ul>
        </div>

        {/* Market Categories */}
        <div className="markets-category-section">
          <div className="market-category-card">
            <img src={security_armoured_vehicles} alt="Security Armoured Vehicles" />
            <h3>Security Armoured Vehicles</h3>
            <p>Providing mobility and protection for high-security missions.</p>
            {/* <a href="#">Learn More</a> */}
          </div>

          <div className="market-category-card">
            <img src={military_armoured_vehicles} alt="Military Armoured Vehicles" />
            <h3>Military Armoured Vehicles</h3>
            <p>Reinforced wheels and RunFlat systems for military operations.</p>
            {/* <a href="#">Learn More</a> */}
          </div>

          <div className="market-category-card">
            <img src={off_road_vehicles} alt="Off-Road Vehicles" />
            <h3>Off-Road Vehicles</h3>
            <p>Ideal solutions for rugged terrains and difficult environments.</p>
            {/* <a href="#">Learn More</a> */}
          </div>

          <div className="market-category-card">
            <img src={cash_in_transit} alt="Cash-in-Transit" />
            <h3>Cash in Transit</h3>
            <p>Ensuring safe transport for high-value goods.</p>
            {/* <a href="#">Learn More</a> */}
          </div>

          <div className="market-category-card">
            <img src={mass_transit_vehicles} alt="Mass Transit Vehicles" />
            <h3>Mass Transit Vehicles</h3>
            <p>Providing durability and safety for public transport.</p>
            {/* <a href="#">Learn More</a> */}
          </div>

          <div className="market-category-card">
            <img src={autonomous_vehicles} alt="Autonomous Vehicles" />
            <h3>Autonomous Vehicles</h3>
            <p>Revolutionizing transportation with autonomous technology.</p>
            {/* <a href="#">Learn More</a> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Markets;
