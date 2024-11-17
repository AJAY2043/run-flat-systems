import React, { useEffect, useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import runFlatData from '../../../Data/runflatSystems.json';
import './RunFlatSystems.css';
import { Link } from 'react-router-dom';

const RunFlatSystems = () => {
  const [data, setData] = useState([]);

  // useEffect will only run once on component mount
  useEffect(() => {
    // Load the data initially or handle any other side-effects
    setData(runFlatData); // Set data from the imported JSON
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">RUNFLAT Systems</h1>
          <p className="hero-description">
            Runflat systems ensure that drivers can keep moving safely even after loss of pressure due to a firing incident or tire blast. This feature eliminates the need for immediate stops to change a tire, reducing downtime and allowing the vehicles to reach their destination or a safe location without interruption. Operators benefit from knowing they have an extra layer of safety on the road.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="section-title">Benefits of Choosing Runflat Tire Systems</h2>
        <ul className="benefits-list">
          <li><i className="fas fa-shield-alt"></i> Peace of Mind: Whether you're cruising on the highway or going cross country, our Runflat Systems have been tried & tested.</li>
          {/* Add other benefits as needed */}
        </ul>
      </section>

      {/* RunFlat Data Section */}
      <section className="runflat-data">
        <h2 className="section-title">Our Runflat Tire Systems</h2>
        {data && data.length > 0 ? (
          <ul className="runflat-list">
            {data.map((item, index) => (
              <li key={index} className="runflat-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.link} className="read-more-link">Learn More</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default RunFlatSystems;
