import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>RunFlat Tires</h3>
          <p>Industry-leading specialist in custom RUNFLAT tires based out of Hyderabad, India.</p>
          <p>Delivering safety and durability with every drive.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-section services-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/runflatsystems">RUNFLAT Systems</a></li>
            <li><a href="/militaryrunflatsystem">Military Runflat System</a></li>
            <li><a href="/beadlocksystem">Beadlock System</a></li>
            <li><a href="/heavydutywheels">Heavy Duty Wheels</a></li>
            <li><a href="/militarywheels">Military Wheels</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/company/runflat-tire-systems/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 RunFlat Tires. All rights reserved.</p>
        <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a> | <a href="/sitemap">Site Map</a></p>
      </div>

      {/* Scroll to Top Button */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </footer>
  );
};

export default Footer;
