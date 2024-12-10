// src/Pages/ContactUs/ContactUs.jsx

import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div>
      <Navbar />

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>We’d Love To Help You</h2>
        <p>We’d love to hear your thoughts and answer any questions you may have!</p>
        <div className="info-cards">
          <div className="info-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <h3>Address</h3>
            <p>Plot No. 9/6/A, Road No. 5, Industrial Park Nacharam, Hyderabad, 500020.</p>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <h3>Call Us</h3>
            <p>+91 9959902433</p>
            <p>+91 9704622433</p>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Mail Us</h3>
            <p>sales@runflat.in</p>
            <p>tech@runflat.in</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-us">
        <h2>Send Your Message To Us</h2>
        <form className="contact-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" required />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Your Phone" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message goes here" rows="4" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
