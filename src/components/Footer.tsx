import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>तांडा ग्रामपंचायत</h3>
          <p>सर्वांसाठी, सर्वांच्या विकासासाठी</p>
        </div>
        
        <div className="footer-section">
          <h4>द्रुत लिंक</h4>
          <ul>
            <li><a href="/">मुख्यपृष्ठ</a></li>
            <li><a href="/about">आमच्याबद्दल</a></li>
            <li><a href="/services">सेवा</a></li>
            <li><a href="/contact">संपर्क</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>संपर्क माहिती</h4>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> तांडा, ता. गोंदिया, जि. गोंदिया, महाराष्ट्र</li>
            <li><FaPhone /> +91 XXXXXXXXXX</li>
            <li><FaEnvelope /> tandalwadigp@example.com</li>
            <li><FaClock /> सोम-शनि: सकाळी 10 ते संध्याकाळी 6</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} तांडा ग्रामपंचायत. सर्व हक्क राखीव.</p>
      </div>
    </footer>
  );
};

export default Footer;
