import React, { useState } from 'react';
import './Navbar.css';
import Runflat_logo from '../Assets/run-flat-logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAboutUsDropdown = () => setIsAboutUsOpen(!isAboutUsOpen);
  const toggleServicesDropdown = () => setIsServicesOpen(!isServicesOpen);

  return (
    <div>
      <div className="main-nav">
        {/* Marquee Section */}
        <div className="nav-scroll-marquee">
  <p className="scroll-text">🚗 Welcome To Run Flat Tire Systems! 🚗</p>
</div>


        {/* Navbar Section */}
        <div className="navbar">
          <div className="nav-logo" style={{background:'none'}}>
            <Link to="/">
              <img src={Runflat_logo} alt="Runflat Logo" width="120"/>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="nav-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </div>

          {/* Menu Links */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-item">
              <span onClick={toggleAboutUsDropdown}>
                About Us <FontAwesomeIcon icon={faChevronDown} />
              </span>
              {isAboutUsOpen && (
                <div className="dropdown">
                  <Link to="/company" style={{color:'blue',background:'none'}}>Company</Link>
                  <Link to="/ourteam" style={{color:'blue',background:'none'}}>Our Team</Link>
                  <Link to="/news" style={{color:'orange',background:'none'}}>News</Link>
                  <Link to="/markets" style={{color:'orange',background:'none'}}>Market</Link>
                  <Link to="/material" style={{color:'green',background:'none'}}>Material</Link>
                  <Link to="/strengths" style={{color:'green',background:'none'}}>Strength</Link>
                </div>
              )}
            </div>

            <div className="nav-item">
              <span onClick={toggleServicesDropdown}>
                Our Services <FontAwesomeIcon icon={faChevronDown} />
              </span>
              {isServicesOpen && (
                <div className="dropdown">
                  <Link to="/runflatsystems" style={{color:'blue',background:'none'}}>Runflat Tires Systems</Link>
                  <Link to="/militaryrunflatsystem" style={{color:'blue',background:'none'}}>Military Runflat Tires Systems</Link>
                  <Link to="/beadlocksystem" style={{color:'orange',background:'none'}}>Beadlock Systems</Link>
                  <Link to="/heavydutywheels" style={{color:'green',background:'none'}}>Heavy-duty Wheels</Link>
                  <Link to="/militarywheels" style={{color:'green',background:'none'}}>Military Wheels</Link>
                </div>
              )}
            </div>

            <div className="nav-item">
              <Link to="/credentials" style={{color:'orange',background:'none'}}>Credentials</Link>
            </div>
            <div className="nav-item">
              <Link to="/resources" style={{color:'orange',background:'none'}}>Resources</Link>
            </div>
            <div className="nav-item">
              <Link to="/contactus" style={{color:'green',background:'none'}}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
