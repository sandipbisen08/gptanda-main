import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import upsarpanchImg from '../images/leaders/upsarpanch.jpg';
import './Officials.scss';

const Upsarpanch: React.FC = () => {
  const preventImgActions = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'उपसरपंच',
    jobTitle: 'Vice Sarpanch (Deputy Village Head)',
    affiliation: {
      '@type': 'Organization',
      name: 'Tanda Grampanchayat',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tanda',
        addressLocality: 'Gondia',
        addressRegion: 'Gondia',
        postalCode: '441601',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <div className="officials-page">
      <SEO
        title="उपसरपंच | तांडा ग्रामपंचायत"
        description="तांडा ग्रामपंचायतचे उपसरपंच (उप-गाव प्रमुख) यांचे संपर्क, कार्यालय वेळ आणि जिम्मेदारी।"
        keywords="उपसरपंच, उप गाव प्रमुख, तांडा, ग्रामपंचायत, गोंदिया"
        ogTitle="उपसरपंच | तांडा ग्रामपंचायत"
        ogDescription="तांडा ग्रामपंचायतचे उपसरपंच (उप-गाव प्रमुख) यांचे संपर्क आणि जिम्मेदारी।"
        canonicalUrl="https://tandgrampanchayat.gov.in/upsarpanch"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>उपसरपंच</h1>
          <p>सरपंचचे सहायक नेतृत्व</p>
        </div>
      </section>

      {/* Official Profile */}
      <section className="official-profile">
        <div className="container">
          <div className="profile-grid">
            <div className="profile-image">
              {/* <div className="placeholder-image large">उपसरपंच</div> */}
              <img
                src={upsarpanchImg}
                alt="upsarpanch"
                className="no-download"
                draggable={false}
                onContextMenu={preventImgActions}
                onDragStart={preventImgActions}
              />
              <h3>श्री नीलेश्वर तेजराम कारंजेक</h3>
            </div>
            <div className="profile-info">
              <h2>उपसरपंच</h2>
              <p className="designation">Vice Sarpanch (Deputy Village Head)</p>

              <div className="info-section">
                <h3>संक्षिप्त परिचय</h3>
                <p>
                  तांडा ग्रामपंचायतचे उपसरपंच हे सरपंचचे मुख्य सहायक आहेत.
                  ते सरपंचच्या अनुपस्थितीत त्यांचे कार्य संभाळतात आणि विविध विभागांचे
                  पर्यवेक्षण करतात. महिला कल्याण, स्वच्छता आणि सामाजिक कार्यक्रमांचे विशेष
                  जिम्मेदारी असते.
                </p>
              </div>

              <div className="contact-info">
                <h3>संपर्क माहिती</h3>
                <div className="contact-item">
                  <FaPhone className="icon" />
                  <div>
                    <p className="label">फोन</p>
                    <p className="value">+91-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="icon" />
                  <div>
                    <p className="label">ईमेल</p>
                    <p className="value">upsarpanch@tandgrampanchayat.gov.in</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="icon" />
                  <div>
                    <p className="label">कार्यालय</p>
                    <p className="value">ग्रामपंचायत कार्यालय, तांडा</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="responsibilities">
        <div className="container">
          <h2>उपसरपंचचे मुख्य जिम्मेदारी</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-card">
              <h3>सरपंचचे प्रतिनिधित्व</h3>
              <p>सरपंचच्या अनुपस्थितीत त्यांचे कार्य संभाळणे आणि प्रतिनिधित्व करणे</p>
            </div>
            <div className="responsibility-card">
              <h3>महिला कल्याण</h3>
              <p>महिला सशक्तीकरण, स्वयंसहायता गट आणि महिला कल्याण योजनांचे पर्यवेक्षण</p>
            </div>
            <div className="responsibility-card">
              <h3>स्वच्छता अभियान</h3>
              <p>गाव स्वच्छ राहण्यासाठी कार्यक्रम आयोजन आणि पर्यवेक्षण</p>
            </div>
            <div className="responsibility-card">
              <h3>सामाजिक कार्यक्रम</h3>
              <p>सामाजिक कल्याण कार्यक्रम आणि सांस्कृतिक कार्यक्रमांचे आयोजन</p>
            </div>
            <div className="responsibility-card">
              <h3>विभाग पर्यवेक्षण</h3>
              <p>विविध विभागांचे कार्य पर्यवेक्षण आणि समन्वय</p>
            </div>
            <div className="responsibility-card">
              <h3>समितीचे नेतृत्व</h3>
              <p>विविध समितींचे नेतृत्व आणि पर्यवेक्षण करणे</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours">
        <div className="container">
          <h2>कार्यालय वेळ</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <FaClock className="icon" />
              <h3>सोमवार - शुक्रवार</h3>
              <p>सकाळ ९:००  - दुपार १:००</p>
              <p>दुपार २:०० - संध्या ५:००</p>
            </div>
            <div className="hours-card">
              <FaClock className="icon" />
              <h3>शनिवार</h3>
              <p>सकाळ १०:०० - दुपार १:००</p>
            </div>
            <div className="hours-card">
              <FaClock className="icon" />
              <h3>रविवार</h3>
              <p>बंद</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="achievements">
        <div className="container">
          <h2>मुख्य पहल</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <h3>महिला सशक्तीकरण</h3>
              <p>महिला स्वयंसहायता गट स्थापन आणि प्रशिक्षण कार्यक्रम सुरू केले.</p>
            </div>
            <div className="achievement-item">
              <h3>स्वच्छ भारत अभियान</h3>
              <p>गाव स्वच्छ राहण्यासाठी नियमित अभियान आयोजित केले.</p>
            </div>
            <div className="achievement-item">
              <h3>बालिका शिक्षा</h3>
              <p>बालिका शिक्षा प्रोत्साहन कार्यक्रम सुरू केले.</p>
            </div>
            <div className="achievement-item">
              <h3>स्वास्थ्य जागरूकता</h3>
              <p>महिला आरोग्य आणि स्वच्छता जागरूकता कार्यक्रम आयोजित केले.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upsarpanch;
