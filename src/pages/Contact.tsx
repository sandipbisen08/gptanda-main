import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Contact.scss';

const Contact: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tanda Grampanchayat',
    description: 'तांडा ग्रामपंचायत - संपर्क माहिती',
    url: 'https://tandgrampanchayat.gov.in/contact',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tanda',
      addressLocality: 'Gondia',
      addressRegion: 'Gondia',
      postalCode: '441601',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-XXXXXXXXXX',
      email: 'contact@tandgrampanchayat.gov.in'
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      <SEO
        title="संपर्क साधा | तांडा ग्रामपंचायत"
        description="तांडा ग्रामपंचायतशी संपर्क साधा। फोन, ईमेल, पत्ता आणि कार्यालय वेळ। आपल्या प्रश्न आणि सुझाव भेजा।"
        keywords="संपर्क, तांडा, ग्रामपंचायत, फोन, ईमेल, पत्ता, कार्यालय वेळ"
        ogTitle="संपर्क साधा | तांडा ग्रामपंचायत"
        ogDescription="तांडा ग्रामपंचायतशी संपर्क साधण्यासाठी संपर्क माहिती।"
        canonicalUrl="https://tandgrampanchayat.gov.in/contact"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>संपर्क साधा</h1>
          <p>आमच्याशी संपर्क साधण्यासाठी येथे आहोत</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>संपर्क माहिती</h2>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h3>पता</h3>
                  <p>तांडा, ता. गोंदिया</p>
                  <p>जि. गोंदिया, महाराष्ट्र - ४१३७०१</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-text">
                  <h3>फोन</h3>
                  <p>+91 XXXXXXXXXX</p>
                  <p>+91 XXXXXXXXXX</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h3>ईमेल</h3>
                  <p>tandagp@example.com</p>
                  <p>info@tandagp.gov.in</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-text">
                  <h3>कार्य वेळ</h3>
                  <p>सोमवार - शनिवार</p>
                  <p>सकाळी १० ते संध्याकाळी ६ वाजे</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h3>आमच्या सोशल मीडिया</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>आमच्याशी संपर्क साधा</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">नाव *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="आपले नाव"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">ईमेल *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="आपली ईमेल"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">फोन नंबर</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="आपला फोन नंबर"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">विषय *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="विषय"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">संदेश *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="आपला संदेश"
                    rows={6}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  संदेश पाठवा
                </button>

                {submitted && (
                  <div className="success-message">
                    ✓ आपला संदेश यशस्वीरित्या पाठविला गेला. लवकरच आम्ही आपल्याशी संपर्क साधू.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>आमचे स्थान</h2>
            <div className="map-container">
              <iframe
                title="तांडा ग्रामपंचायत स्थान"
                src="https://www.google.com/maps/place/Gram+Panchayat+Tanda/@21.3877274,80.1741351,10.68z/data=!4m14!1m7!3m6!1s0x3a2bafc42e29b181:0xec83540ed7ee164d!2sGram+Panchayat+Tanda!8m2!3d21.3953543!4d80.2628182!16s%2Fg%2F11t2282_8g!3m5!1s0x3a2bafc42e29b181:0xec83540ed7ee164d!8m2!3d21.3953543!4d80.2628182!16s%2Fg%2F11t2282_8g?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
