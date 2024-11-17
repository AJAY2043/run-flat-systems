import React from 'react';
import './Company.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Hero4 from '../../../Components/Hero4/Hero4';
import Footer from '../../../Components/Footer/Footer';

const Company = () => {
  return (
    <>
      <Navbar />
      <Hero4 />
      <div className="company-container">
        <h1>About Us</h1>
        <p>
          <strong>Runflat Tire Systems</strong> is an industry-leading specialist and custom 
          RUNFLAT insert manufacturer based in Hyderabad, India. We take pride in providing 
          high-quality solutions tailored to the unique needs of our customers in the defense, 
          automotive, and off-road industries.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to design and manufacture innovative, reliable, and durable Runflat Tire Systems and bead locks for 4X4, 6X6, and other specialized vehicles. We aim to 
          ensure safety, performance, and reliability in the toughest conditions.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>Manufacture custom-made RUNFLAT Tire Systems tailored to specific vehicle requirements.</li>
          <li>Provide bead lock systems to enhance tire performance under low-pressure conditions.</li>
          <li>Collaborate with leading defense and automotive companies for innovative solutions.</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          At RUNFLAT Tire Systems, we focus on quality, innovation, and customer satisfaction. 
          Our products are rigorously tested to ensure they meet industry standards and exceed 
          customer expectations. With a team of skilled engineers and state-of-the-art 
          manufacturing facilities, we deliver world-class products designed for durability 
          and performance.
        </p>

        <h2>Industries We Serve</h2>
        <p>Our products are widely used in:</p>
        <ul>
          <li>Defense vehicles and armored personnel carriers</li>
          <li>Off-road vehicles and expedition trucks</li>
          <li>Commercial and industrial transportation</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions or need a custom solution? Get in touch with us today! We’re here to 
          help you find the perfect RUNFLAT Tire Systems for your vehicle.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Company;
