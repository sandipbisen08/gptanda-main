import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import gptandalogo from '../images/tanda-logo-new.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const leadershipPaths = ['/sarpanch', '/upsarpanch', '/gramsevak', '/adhyaksha'];
  const isLeadershipActive = leadershipPaths.some(p => location.pathname.startsWith(p));

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
          <img src={gptandalogo} alt="" />
        </Link>
        {/* <Link to="/" className="navbar-logo">
          तांडा ग्रामपंचायत
        </Link> */}

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-links ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>
              मुख्यपृष्ठ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-links ${isActive('/about') ? 'active' : ''}`} onClick={toggleMenu}>
              आमच्याबद्दल
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={`nav-links ${isActive('/services') ? 'active' : ''}`} onClick={toggleMenu}>
              सेवा
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/schemes" className={`nav-links ${isActive('/schemes') ? 'active' : ''}`} onClick={toggleMenu}>
              योजना
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/overview" className={`nav-links ${isActive('/overview') ? 'active' : ''}`} onClick={toggleMenu}>
              संक्षिप्त माहिती
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-links ${isActive('/projects') ? 'active' : ''}`} onClick={toggleMenu}>
              ग्रामविकास प्रकल्प
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/feedback" className={`nav-links ${isActive('/feedback') ? 'active' : ''}`} onClick={toggleMenu}>
              तक्रार आणि सूचना
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className={`nav-links ${isActive('/gallery') ? 'active' : ''}`} onClick={toggleMenu}>
              गॅलरी
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ahwal" className={`nav-links ${isActive('/ahwal') ? 'active' : ''}`} onClick={toggleMenu}>
              अहवाल
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span className={`nav-links dropdown-toggle ${isLeadershipActive ? 'active' : ''}`} onClick={toggleDropdown}>
              नेतृत्व
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <li>
                <Link to="/sarpanch" className={`dropdown-link ${isActive('/sarpanch') ? 'active' : ''}`} onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  सरपंच
                </Link>
              </li>
              <li>
                <Link to="/upsarpanch" className={`dropdown-link ${isActive('/upsarpanch') ? 'active' : ''}`} onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  उपसरपंच
                </Link>
              </li>
              <li>
                <Link to="/gramsevak" className={`dropdown-link ${isActive('/gramsevak') ? 'active' : ''}`} onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  ग्रा.पं.अधिकारी                </Link>
              </li>
              <li>
                <Link to="/adhyaksha" className={`dropdown-link ${isActive('/adhyaksha') ? 'active' : ''}`} onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  अध्यक्ष
                </Link>
              </li>
              <li>
                <Link to="/members" className={`dropdown-link ${isActive('/members') ? 'active' : ''}`} onClick={() => {
                  toggleMenu();
                  setIsDropdownOpen(false);
                }}>
                  सदस्य
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-links ${isActive('/contact') ? 'active' : ''}`} onClick={toggleMenu}>
              संपर्क
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
