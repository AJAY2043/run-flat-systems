import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest news, offers, and updates from RunFlat Tires.</p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
