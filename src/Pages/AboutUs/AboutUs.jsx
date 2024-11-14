// src/Pages/AboutUs/AboutUs.jsx

import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './AboutUs.css'; // Add styles for better presentation

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section className="about-us-section">
        <div className="about-us-container">
          <h1>About Run Flat Tyres</h1>
          <p>
            At Run Flat Tyres, we are a leading provider of advanced tire technology,
            specializing in run-flat solutions designed for enhanced safety and
            reliability. Founded with a mission to revolutionize the automotive
            industry, we pride ourselves on our commitment to innovation,
            performance, and quality.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to empower drivers with the confidence and security
            of knowing they can rely on their tires, even in challenging
            situations. We aim to eliminate the risks associated with flat
            tires by providing high-performance, puncture-resistant solutions
            that keep you moving, no matter the road ahead.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> Constantly pushing the boundaries of
              tire technology to deliver cutting-edge products.
            </li>
            <li>
              <strong>Safety:</strong> Prioritizing safety in every design and
              material choice to protect our customers on the road.
            </li>
            <li>
              <strong>Quality:</strong> Adhering to the highest standards of
              quality and durability in every product.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Committed to providing
              exceptional service and support to ensure a seamless experience
              for all our clients.
            </li>
          </ul>

          <h2>Our Products</h2>
          <p>
            Run Flat Tyres offers a wide range of products tailored for various
            vehicle types and driving needs, including:
          </p>
          <ul>
            <li>RunFlat Systems for city and highway driving</li>
            <li>Military-grade RunFlat Systems for high-security vehicles</li>
            <li>Beadlock Systems designed for off-road enthusiasts</li>
            <li>Heavy Duty Wheels for trucks and commercial vehicles</li>
            <li>Military Wheels specialized for extreme terrain</li>
          </ul>

          <h2>Why Choose Us?</h2>
          <p>
            Choosing Run Flat Tyres means choosing a partner who values your
            safety, convenience, and satisfaction. Our products are designed to
            provide peace of mind, allowing you to focus on the journey, not the
            potential pitfalls.
          </p>
          <p>
            We work tirelessly to innovate, test, and improve our products,
            ensuring that they meet the evolving needs of our customers. With a
            team of experts in tire technology and customer service, Run Flat
            Tyres stands at the forefront of the industry, ready to support you
            every step of the way.
          </p>

          <h2>Our Commitment to Sustainability</h2>
          <p>
            We are committed to minimizing our environmental impact by using
            eco-friendly materials and sustainable manufacturing processes.
            Run Flat Tyres believes in a greener future and continually explores
            ways to reduce waste and improve recyclability in our products.
          </p>

          <p>Thank you for choosing Run Flat Tyres. We look forward to being your trusted partner on the road!</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
