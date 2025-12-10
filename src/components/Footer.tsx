import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>तांडा ग्रामपंचायत</h3>
          <p>सर्वांसाठी, सर्वांच्या विकासासाठी</p>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/people/%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AE-%E0%A4%AA%E0%A4%82%E0%A4%9A%E0%A4%BE%E0%A4%AF%E0%A4%A4-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B2%E0%A4%AF-%E0%A4%A4%E0%A4%BE%E0%A4%82%E0%A4%A1%E0%A4%BE/pfbid0mgMvGk46urvjAHs5B9TdwiXx3i1S3Y8h3ovkxxqRtpWxkCa6Sn8yzWt46t6Fx3Dgl/?rdid=nTH0CM7yrFjDOUSD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JFncGktyx%2F" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a> */}
          </div>
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
