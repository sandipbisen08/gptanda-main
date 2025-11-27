import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">मुख्यपृष्ठ</Link></li>
            {/* <li><Link to="/about">आमच्याबद्दल</Link></li>
            <li><Link to="/services">सेवा</Link></li>
            <li><Link to="/schemes">योजना</Link></li>
            <li><Link to="/projects">ग्रामविकास प्रकल्प</Link></li>
            <li><Link to="/ahwal">अहवाल</Link></li>
            <li><Link to="/gallery">गॅलरी</Link></li> */}
            <li><Link to="/feedback">तक्रार आणि सूचना</Link></li>
            <li><Link to="/rti">माहिती अधिकार (RTI)</Link></li>
            <li><Link to="/contact">संपर्क</Link></li>
            <li><Link to="/privacy-policy">गोपनीयता धोरण</Link></li>
            <li><Link to="/terms-and-conditions">अटी व शर्ती</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>संपर्क माहिती</h4>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> तांडा, ता. गोंदिया, जि. गोंदिया, महाराष्ट्र</li>
            <li><FaPhone /> +91 XXXXXXXXXX</li>
            <li><FaEnvelope /> tandagp@example.com</li>
            <li><FaClock /> सोम-शनि: सकाळी 10 ते संध्याकाळी 6</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          येथे दिलेली माहिती शक्य तितकी अचूक ठेवण्याचा प्रयत्न केला जातो. अधिकृत नोंदींसाठी
          कृपया संबंधित शासकीय कार्यालयाशी संपर्क साधा.
        </p>
        <p>&copy; {new Date().getFullYear()} तांडा ग्रामपंचायत. सर्व हक्क राखीव.</p>
      </div>
    </footer>
  );
};

export default Footer;
