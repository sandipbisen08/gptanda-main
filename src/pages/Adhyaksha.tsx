import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Officials.scss';

const Adhyaksha: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'अध्यक्ष',
    jobTitle: 'Chairman',
    affiliation: {
      '@type': 'Organization',
      name: 'Tandulwadi Grampanchayat',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tandulwadi',
        addressLocality: 'Shrirampur',
        addressRegion: 'Ahmednagar',
        postalCode: '413709',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <div className="officials-page">
      <SEO
        title="अध्यक्ष | तांडा ग्रामपंचायत"
        description="तांडा ग्रामपंचायतचे अध्यक्ष यांचे संपर्क, कार्यालय वेळ आणि जिम्मेदारी।"
        keywords="अध्यक्ष, चेअरमन, तांडा, ग्रामपंचायत, गोंदिया"
        ogTitle="अध्यक्ष | तांडा ग्रामपंचायत"
        ogDescription="तांडा ग्रामपंचायतचे अध्यक्ष यांचे संपर्क आणि जिम्मेदारी।"
        canonicalUrl="https://tandgrampanchayat.gov.in/adhyaksha"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>अध्यक्ष</h1>
          <p>ग्रामपंचायत समितीचे अध्यक्ष</p>
        </div>
      </section>

      {/* Official Profile */}
      <section className="official-profile">
        <div className="container">
          <div className="profile-grid">
            <div className="profile-image">
              <div className="placeholder-image large">अध्यक्ष</div>
            </div>
            <div className="profile-info">
              <h2>अध्यक्ष</h2>
              <p className="designation">Chairman of Grampanchayat Committee</p>
              
              <div className="info-section">
                <h3>संक्षिप्त परिचय</h3>
                <p>
                  तांडा ग्रामपंचायतचे अध्यक्ष हे ग्रामपंचायत समितीचे प्रमुख आहेत. 
                  ते समितीच्या सर्व बैठकांचे नेतृत्व करतात, निर्णय घेतात आणि 
                  ग्रामपंचायतचे विविध समितींचे कार्य पर्यवेक्षण करतात. ते ग्रामीण विकास, 
                  शिक्षा, आरोग्य आणि कल्याणकारी कार्यक्रमांचे समन्वय करतात.
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
                    <p className="value">adhyaksha@tandgrampanchayat.gov.in</p>
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
          <h2>अध्यक्षचे मुख्य जिम्मेदारी</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-card">
              <h3>समितीचे नेतृत्व</h3>
              <p>ग्रामपंचायत समितीच्या सर्व बैठकांचे नेतृत्व आणि संचालन</p>
            </div>
            <div className="responsibility-card">
              <h3>निर्णय प्रक्रिया</h3>
              <p>समितीचे निर्णय घेणे आणि कार्यान्वयन सुनिश्चित करणे</p>
            </div>
            <div className="responsibility-card">
              <h3>समितीचे समन्वय</h3>
              <p>विविध समितींचे कार्य समन्वय आणि पर्यवेक्षण</p>
            </div>
            <div className="responsibility-card">
              <h3>विकास योजना</h3>
              <p>गावच्या विकास योजना तयार करणे आणि अंमलबजावणी</p>
            </div>
            <div className="responsibility-card">
              <h3>बजेट अनुमोदन</h3>
              <p>ग्रामपंचायतचे बजेट अनुमोदन आणि खर्च पर्यवेक्षण</p>
            </div>
            <div className="responsibility-card">
              <h3>जनसेवा</h3>
              <p>ग्रामस्थांच्या समस्या सुनणे आणि निराकरण करणे</p>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Supervised */}
      <section className="committees">
        <div className="container">
          <h2>अध्यक्षचे पर्यवेक्षणाखाली समितीं</h2>
          <div className="committees-grid">
            <div className="committee-card">
              <h3>शिक्षा समिती</h3>
              <p>शाळा आणि शिक्षा सुविधांचे विकास आणि पर्यवेक्षण</p>
            </div>
            <div className="committee-card">
              <h3>आरोग्य समिती</h3>
              <p>ग्रामीण आरोग्य सेवा आणि स्वच्छता कार्यक्रम</p>
            </div>
            <div className="committee-card">
              <h3>कृषी समिती</h3>
              <p>कृषी विकास आणि शेतकरी कल्याण कार्यक्रम</p>
            </div>
            <div className="committee-card">
              <h3>महिला कल्याण समिती</h3>
              <p>महिला सशक्तीकरण आणि कल्याण कार्यक्रम</p>
            </div>
            <div className="committee-card">
              <h3>बुनियादी सुविधा समिती</h3>
              <p>रस्ते, पाणी पुरवठा आणि विद्युत व्यवस्था</p>
            </div>
            <div className="committee-card">
              <h3>सामाजिक कल्याण समिती</h3>
              <p>दरिद्र, वृद्ध आणि विकलांग कल्याण</p>
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
              <p>सकाळ ९:०० - दुपार १:००</p>
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
    </div>
  );
};

export default Adhyaksha;
