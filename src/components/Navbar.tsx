import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          तांडा ग्रामपंचायत
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              मुख्यपृष्ठ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              आमच्याबद्दल
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>
              सेवा
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links" onClick={toggleMenu}>
              गॅलरी
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-links dropdown-toggle" onClick={toggleDropdown}>
              नेतृत्व
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <li>
                <Link to="/sarpanch" className="dropdown-link" onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  सरपंच
                </Link>
              </li>
              <li>
                <Link to="/upsarpanch" className="dropdown-link" onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  उपसरपंच
                </Link>
              </li>
              <li>
                <Link to="/gramsevak" className="dropdown-link" onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  ग्रामसेवक
                </Link>
              </li>
              <li>
                <Link to="/adhyaksha" className="dropdown-link" onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  अध्यक्ष
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              संपर्क
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
