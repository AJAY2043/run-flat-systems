import React from 'react';
import './Materials.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import thumbnail_img from '../../../Components/Assets/3.jpg'

const Material = () => {
  return (
    <div>
      <Navbar />
      <div className="our-material-container">
        <h1>Our Material</h1>
        <p>
          <strong>Runflat Tire Systems</strong> has developed a unique composite material specifically designed for Runflat Tire Systems. As a safety product, the quality of the material used is paramount to ensure that the Runflat Tire Systems can be relied on when it is needed the most. 
        </p>
        <p>
          Ballistic resistance is created from the quality of the material used and the environment in which it is produced. Runflat Tire Systems never compromises on these areas, and all our material is produced in-house in a humidity- and temperature-controlled environment using customized raw materials. 
        </p>
        <p>
          This unique Runflat Tire Systems offers all the key properties needed to fulfill rigorous safety and performance standards, ensuring maximum reliability and durability in extreme conditions.
        </p>
        
        <div className="key-properties">
          <h2>Key Properties of Our Material</h2>
          <ul>
            <li><strong>High Ballistic Resistance:</strong> Engineered to withstand impact and provide protection in hostile environments.</li>
            <li><strong>Durability:</strong> Designed to perform in extreme temperatures and harsh conditions.</li>
            <li><strong>Custom-Tailored:</strong> Manufactured in-house to meet the specific requirements of each customer.</li>
            <li><strong>Temperature & Humidity Controlled Production:</strong> Ensures consistent quality and performance of the material.</li>
          </ul>
        </div>

        <div className="visuals">
          <h2>Material Testing & Production</h2>
          <p>We employ advanced testing techniques to ensure that our material meets all necessary standards for safety and performance. The production environment is carefully controlled to ensure the highest quality output.</p>
          <img src={thumbnail_img} alt="Material testing" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Material;
