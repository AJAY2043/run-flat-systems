// src/Components/Navbar.jsx

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import navbar_logo from '../Assets/logo.jpg';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Updated Logo with Image */}
        <Link to="/" className="nav-logo">
          <img src={navbar_logo} alt="RunFlat Systems" className="nav-logo-img" />
        </Link>

        {/* Toggle Menu Icon for Small and Medium Screens */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li
            className="nav-link"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Our Services <FontAwesomeIcon icon={faCaretDown} />
            {isServicesOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/runflatsystems" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>RUNFLAT Systems</Link></li>
                <li><Link to="/militaryrunflatsystem" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Military Runflat System</Link></li>
                <li><Link to="/beadlocksystem" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Beadlock System</Link></li>
                <li><Link to="/heavydutywheels" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Heavy Duty Wheels</Link></li>
                <li><Link to="/militarywheels" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Military Wheels</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contactus" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
