import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaEnvelope, FaBullhorn, FaUsers } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Home.scss';
import gp1 from '../images/gp1.jpg';
import gp2 from '../images/gp2.jpg';
import gp3 from '../images/gp3.jpg';
import gp4 from '../images/gp4.jpg';
import gp5 from '../images/gp5.jpg';
import gp6 from '../images/gp6.jpg';
import gp7 from '../images/gp7.jpg';
import gp8 from '../images/gp8.jpg';
import gp9 from '../images/gp9.jpg';
import gp10 from '../images/gp10.jpg';

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

  // Hero background slider
  const heroImages = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10];
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setHeroIdx(i => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Animated welcome text
  const welcomeText = 'तांडा ग्रामपंचायत मध्ये आपले स्वागत आहे';
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let idx = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      setDisplayedText(welcomeText.slice(0, idx + 1));
      idx++;
      if (idx >= welcomeText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [welcomeText]);

  // Animated counters data
  const stats = React.useMemo(() => [
    { label: 'एकूण लोकसंख्या', value: 2526, icon: '👥' },
    { label: 'एकूण क्षेत्रफळ (हे.)', value: 429.75, icon: '🌾' },
    { label: 'शाळा', value: 1, icon: '🏫' },
    { label: 'सदस्य संख्या', value: 9, icon: '👤' },
    { label: 'बचत गट', value: 51, icon: '💰' },
    { label: 'पुरस्कार', value: 5, icon: '🏆' }
  ], []);
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    const intervals = stats.map((stat, i) => setInterval(() => {
      setCounts(prev => prev.map((c, idx) => idx === i ? (c < stat.value ? +(c + Math.ceil((stat.value / 40))) : stat.value) : c));
    }, 40));
    return () => intervals.forEach(clearInterval);
  }, [stats]);

  return (
    <div className="home">
      {/* Maharashtra Government Banner */}
      <div className="govt-banner">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Seal_of_Maharashtra.png/80px-Seal_of_Maharashtra.png" alt="महाराष्ट्र शासन" className="govt-emblem" />
        <span className="govt-text">महाराष्ट्र शासन</span>
      </div>
      <SEO
        title="तांडा ग्रामपंचायत | Tand Grampanchayat - आधिकारिक वेबसाइट"
        description="तांडा ग्रामपंचायत - गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील आधिकारिक ग्रामपंचायत वेबसाइट। सेवा, जाहिराती, नेतृत्व आणि ग्रामीण विकास कार्यक्रम।"
        keywords="तांडा, ग्रामपंचायत, गोंदिया, महाराष्ट्र, गोंदिया, सरपंच, ग्रामीण विकास, सेवा"
        ogTitle="तांडा ग्रामपंचायत | Tand Grampanchayat"
        ogDescription="तांडा ग्रामपंचायत - आधिकारिक ग्रामपंचायत वेबसाइट"
        canonicalUrl="https://tandgrampanchayat.gov.in"
        structuredData={structuredData}
      />
      {/* Hero Section with animated slider and text */}
      <section className="hero" style={{ backgroundImage: `url(${heroImages[heroIdx]})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 1s' }}>
        <div className="hero-content" style={{ background: 'rgba(0,0,0,0.45)', borderRadius: '18px', padding: '2rem' }}>
          <h1 style={{ minHeight: 48, fontWeight: 700, letterSpacing: 1 }}>{displayedText}<span className="blinking-cursor">|</span></h1>
          <p style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: 24 }}>सर्वांसाठी, सर्वांच्या विकासासाठी</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">आमच्या सेवा</Link>
            <Link to="/contact" className="btn btn-secondary">संपर्क साधा</Link>
          </div>
        </div>
      </section>

      {/* Stats/Counters Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{counts[i]}<span className="stat-plus">{stat.value > 10 ? '+' : ''}</span></div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
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
              <img src={gp3} alt="गाव विकास कार्यक्रम" />
              {/* {src: gp1, title: 'गाव विकास कार्यक्रम' } */}
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
            {[
              { src: gp1, title: 'गाव विकास कार्यक्रम' },
              { src: gp2, title: 'स्वच्छता अभियान' },
              { src: gp3, title: 'शिक्षा कार्यक्रम' },
              { src: gp4, title: 'सामाजिक कार्यक्रम' },
              { src: gp5, title: 'कृषि विकास' },
              { src: gp6, title: 'महिला सशक्तिकरण' }

            ].map((img, idx) => (
              <div className="gallery-item" key={idx}>
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <h3>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
