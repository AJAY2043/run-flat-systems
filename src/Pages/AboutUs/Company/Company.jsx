import React from 'react';
import './Company.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Hero4 from '../../../Components/Hero4/Hero4';
import Footer from '../../../Components/Footer/Footer';
import factory_img1 from '../../../Components/Assets/factory-img1.jpg'
import factory_img2 from '../../../Components/Assets/factory-img2.jpg'
import iso_img from '../../../Components/Assets/iso-img.jpg'
import { Link } from 'react-router-dom';


const Company = () => {
  return (
    <>
      <Navbar />
      <Hero4 />
      <div className="company-container">
        <h1>About Us</h1>
        <p>
        <strong>Runflat Tire Systems</strong> is an industry-leading specialist and custom RUNFLAT insert manufacturer based in Hyderabad, India. We take pride in providing high-quality solutions tailored to the unique needs of our customers in the defense, automotive, and off-road industries.
        </p>
        <div className="background-img">
        {/* <img src={background_img} alt="" /> */}
        <p>Proud of its 200-year-old heritage, RunFlat International also has all the attributes of a small business: responsiveness, focused expertise and ease to do business with.</p>
      </div>
      <div className="company-section1">
        <h2>Our History and Heritage</h2>
        <p>RunFlat International was established in 2001 as a subsidiary of its parent company Westley Plastics using its leading edge polymer technology to exclusively develop run-flat tyre insert systems.</p>
        <p>RunFlat International originates from Westley Group, a European leading non-ferrous foundry and engineering group since the beginning of the 19th century in the cradle of the industrial revolution.</p>
        <p>Westley Plastics was started in the 1960’s, developing polymer technologies to replace heavier, more expensive and less wear-resistant metal products.</p>
        <p>RunFlat International is a subsidiary and partner of Westley Plastics which specialises exclusively in run-flat systems. Our composite material has been developed and is processed specifically for run-flat applications while our products are subject to multiple patents.</p>
        <p>Recently Wheels International was established to work in parallel with RunFlat International and specialise in lightweight, high load military/security alloy and steel wheels manufactured in Europe.</p>
      </div>
      <div className="company-section2">
        <h2>Operational Excellence</h2>
        <p>RunFlat International has full ISO 9001:2015 certification. Operational excellence is achieved through state of the art machinery, polymerisation expertise and regularly audited quality standards.</p>
        <p>All our products are manufactured in house from raw chemicals through to complete fitted wheel assemblies. Controlling the process from start to finish ensures full process control and quality can be guaranteed.</p>
        <p>Extensive industry experience and a regular global customer base mean our products are well proven throughout the world, with many products still in use after 20 years.</p>
      </div>
      <div className="company-section3-img">
        <img src={factory_img1} alt="" />
        <img src={factory_img2} alt="" />
        <img src={iso_img} alt="" />
      </div>
        
        <h2>Contact Us</h2>
        <p>
          Have questions or need a custom solution? Get in touch with us today! We’re here to 
          help you find the perfect RUNFLAT Tire Systems for your vehicle.
        </p>
        <Link to='/contactus'><button>Contat Us</button></Link>
      </div>
      <div className="company-section-4">
        <strong><h3>RunFlat International offers the flexibility and fast responsiveness of a small business whilst relying on operational excellence.

This results in outstanding customer service and impeccable product quality.</h3></strong>
      </div>
      <Footer />
    </>
  );
};

export default Company;
