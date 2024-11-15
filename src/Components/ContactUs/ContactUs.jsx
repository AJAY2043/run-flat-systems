import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>Have questions or need support? Fill out the form below, and our team will get back to you soon.</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
