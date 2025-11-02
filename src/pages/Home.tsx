import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaEnvelope, FaBullhorn, FaUsers } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Home.scss';
import gp1 from '../images/gp1.jpg';

const Home: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tanda Grampanchayat',
    description: 'तांडा ग्रामपंचायत - गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील आधिकारिक ग्रामपंचायत',
    url: 'https://tandgrampanchayat.gov.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tanda',
      addressLocality: 'Gondia',
      addressRegion: 'Gondia',
      postalCode: '441601',
      addressCountry: 'IN'
    },
    areaServed: 'Tanda, Gondia, Gondia',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-XXXXXXXXXX'
    }
  };

  return (
    <div className="home">
      <SEO
        title="तांडा ग्रामपंचायत | Tand Grampanchayat - आधिकारिक वेबसाइट"
        description="तांडा ग्रामपंचायत - गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील आधिकारिक ग्रामपंचायत वेबसाइट। सेवा, जाहिराती, नेतृत्व आणि ग्रामीण विकास कार्यक्रम।"
        keywords="तांडा, ग्रामपंचायत, गोंदिया, महाराष्ट्र, गोंदिया, सरपंच, ग्रामीण विकास, सेवा"
        ogTitle="तांडा ग्रामपंचायत | Tand Grampanchayat"
        ogDescription="तांडा ग्रामपंचायत - आधिकारिक ग्रामपंचायत वेबसाइट"
        canonicalUrl="https://tandgrampanchayat.gov.in"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>तांडा ग्रामपंचायत मध्ये आपले स्वागत आहे</h1>
          <p>सर्वांसाठी, सर्वांच्या विकासासाठी</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">आमच्या सेवा</Link>
            <Link to="/contact" className="btn btn-secondary">संपर्क साधा</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>आमच्याबद्दल</h2>
            <p>तांडा ग्रामपंचायत बद्दल थोडक्यात</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                तांडा हे गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील एक सुंदर गाव आहे.
                आमच्या ग्रामपंचायतचे उद्दिष्ट ग्रामीण भागातील लोकांच्या जीवनमानात सुधारणा करणे
                आणि सर्वांना मूलभूत सुविधा उपलब्ध करून देणे हे आहे.
              </p>
              <Link to="/about" className="btn btn-outline">अधिक जाणून घ्या</Link>
            </div>
            <div className="about-image">
              <img src="/images/village.jpg" alt="Tanda Village" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>आमच्या सेवा</h2>
            <p>आम्ही तुम्हाला पुरवत असलेल्या सेवा</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaTools />
              </div>
              <h3>रस्ते आणि वाहतूक</h3>
              <p>गावातील रस्त्यांची देखभाल आणि वाहतूक सुविधा</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaEnvelope />
              </div>
              <h3>पाणी पुरवठा</h3>
              <p>स्वच्छ पाण्याची पुरवठा व्यवस्था</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaBullhorn />
              </div>
              <h3>स्वच्छता अभियान</h3>
              <p>स्वच्छता आणि आरोग्याबाबत जागरूकता</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>कल्याणकारी योजना</h3>
              <p>सरकारी योजनांचा लाभ</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-primary">सर्व सेवा पहा</Link>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="announcements">
        <div className="container">
          <div className="section-header">
            <h2>जाहिराती</h2>
            <p>नवीन आणि महत्वाच्या जाहिराती</p>
          </div>
          <div className="announcement-list">
            <div className="announcement">
              <div className="announcement-date">१५ मे २०२४</div>
              <h3>पावसाळ्याआधी रस्त्यांची दुरुस्ती</h3>
              <p>सर्व ग्रामस्थांना कळविण्यात येत आहे की, पावसाळ्याआधी गावातील रस्त्यांची दुरुस्ती केली जाणार आहे.</p>
            </div>
            <div className="announcement">
              <div className="announcement-date">१० मे २०२४</div>
              <h3>विद्यार्थ्यांसाठी शिष्यवृत्ती योजना</h3>
              <p>यशवंतराव चव्हाण शिष्यवृत्ती योजनेअंतर्गत अर्ज मागण्यात येत आहेत.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <div className="section-header">
            <h2>गॅलरी</h2>
            <p>गावातील कार्यक्रम आणि विकास प्रकल्प</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={gp1} alt="गाव विकास कार्यक्रम" />
              <div className="gallery-overlay">
                <h3>गाव विकास कार्यक्रम</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-2.jpg" alt="स्वच्छता अभियान" />
              <div className="gallery-overlay">
                <h3>स्वच्छता अभियान</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-3.jpg" alt="शिक्षा कार्यक्रम" />
              <div className="gallery-overlay">
                <h3>शिक्षा कार्यक्रम</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-4.jpg" alt="सामाजिक कार्यक्रम" />
              <div className="gallery-overlay">
                <h3>सामाजिक कार्यक्रम</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-5.jpg" alt="कृषि विकास" />
              <div className="gallery-overlay">
                <h3>कृषि विकास</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-6.jpg" alt="महिला सशक्तिकरण" />
              <div className="gallery-overlay">
                <h3>महिला सशक्तिकरण</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
