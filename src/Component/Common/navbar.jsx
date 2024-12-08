import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import '../../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth"); 
    navigate("/login"); 
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/business', label: 'Business' },
    { path: '/technology', label: 'Technology' },
    { path: '/sports', label: 'Sports' },
    { path: '/science', label: 'Science' },
    { path: '/entertainment', label: 'Entertainment' }
  ];

  return (
    <nav className="navbar">
      <h3>NEWS APP</h3>
      <div 
        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => ( 
          <li key={link.path}>
            <Link 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
     
     {/* mobile view logout button */}
        <li id="logout-mv"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>

      {/* desktop view logout button */}
      <button 
        className="logout-button" id="logout-dv"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;