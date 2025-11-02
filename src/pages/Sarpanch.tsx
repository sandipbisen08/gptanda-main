import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Officials.scss';

const Sarpanch: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'ग्रामपंचायत सरपंच',
    jobTitle: 'Sarpanch (Village Head)',
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
        title="सरपंच | तांडा ग्रामपंचायत"
        description="तांडा ग्रामपंचायतचे सरपंच (गाव प्रमुख) यांचे संपर्क, कार्यालय वेळ आणि जिम्मेदारी।"
        keywords="सरपंच, गाव प्रमुख, तांडा, ग्रामपंचायत, गोंदिया"
        ogTitle="सरपंच | तांडा ग्रामपंचायत"
        ogDescription="तांडा ग्रामपंचायतचे सरपंच (गाव प्रमुख) यांचे संपर्क आणि जिम्मेदारी।"
        canonicalUrl="https://tandgrampanchayat.gov.in/sarpanch"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>सरपंच</h1>
          <p>ग्रामपंचायतचे प्रमुख नेतृत्व</p>
        </div>
      </section>

      {/* Official Profile */}
      <section className="official-profile">
        <div className="container">
          <div className="profile-grid">
            <div className="profile-image">
              <div className="placeholder-image large">सरपंच</div>
            </div>
            <div className="profile-info">
              <h2>ग्रामपंचायत सरपंच</h2>
              <p className="designation">Sarpanch (Village Head)</p>
              
              <div className="info-section">
                <h3>संक्षिप्त परिचय</h3>
                <p>
                  तांडा ग्रामपंचायतचे सरपंच हे गावचे प्रमुख नेता आहेत. 
                  ते ग्रामपंचायतचे सर्व कार्यक्रमांचे नेतृत्व करतात आणि गावच्या विकासासाठी 
                  जिल्हा प्रशासन व राज्य सरकारशी संपर्क साधतात.
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
                    <p className="value">sarpanch@tandgrampanchayat.gov.in</p>
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
          <h2>सरपंचचे मुख्य जिम्मेदारी</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-card">
              <h3>ग्रामपंचायत नेतृत्व</h3>
              <p>ग्रामपंचायतचे सर्व निर्णय आणि कार्यक्रमांचे नेतृत्व करणे</p>
            </div>
            <div className="responsibility-card">
              <h3>ग्रामीण विकास</h3>
              <p>गावच्या बुनियादी सुविधा, शिक्षा, आरोग्य आणि कृषी विकासासाठी योजना बनवणे</p>
            </div>
            <div className="responsibility-card">
              <h3>जनसेवा</h3>
              <p>ग्रामस्थांच्या समस्या सुनणे आणि त्यांचे निराकरण करणे</p>
            </div>
            <div className="responsibility-card">
              <h3>प्रशासकीय संपर्क</h3>
              <p>जिल्हा प्रशासन आणि राज्य सरकारशी संपर्क साधणे</p>
            </div>
            <div className="responsibility-card">
              <h3>बजेट व्यवस्थापन</h3>
              <p>ग्रामपंचायतचे बजेट तयार करणे आणि खर्च व्यवस्थापन करणे</p>
            </div>
            <div className="responsibility-card">
              <h3>पारदर्शकता</h3>
              <p>सर्व कार्यक्रमांमध्ये पारदर्शकता आणि जवाबदेहीता सुनिश्चित करणे</p>
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

      {/* Achievements */}
      <section className="achievements">
        <div className="container">
          <h2>मुख्य उपलब्धी</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <h3>रस्ते आणि पाणी पुरवठा</h3>
              <p>गावातील सर्व मुख्य रस्त्यांची दुरुस्ती आणि स्वच्छ पाण्याची पुरवठा व्यवस्था सुधारली.</p>
            </div>
            <div className="achievement-item">
              <h3>शिक्षा सुविधा</h3>
              <p>शाळा आणि महाविद्यालयांमध्ये आधुनिक सुविधा जोडल्या.</p>
            </div>
            <div className="achievement-item">
              <h3>आरोग्य सेवा</h3>
              <p>ग्रामीण आरोग्य केंद्राचे आधुनिकीकरण केले.</p>
            </div>
            <div className="achievement-item">
              <h3>कृषी विकास</h3>
              <p>शेतकऱ्यांसाठी आधुनिक कृषी तंत्रज्ञान आणि प्रशिक्षण कार्यक्रम सुरू केले.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sarpanch;
