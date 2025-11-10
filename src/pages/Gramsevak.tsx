import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import gramsevakImg from '../images/leaders/gramsevak.jpg';
import './Officials.scss';

const Gramsevak: React.FC = () => {
  const preventImgActions = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'ग्रामसेवक',
    jobTitle: 'Village Administrative Officer',
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
        title="ग्रामसेवक | तांडा ग्रामपंचायत"
        description="तांडा ग्रामपंचायतचे ग्रामसेवक (गाव प्रशासकीय अधिकारी) यांचे संपर्क, कार्यालय वेळ आणि जिम्मेदारी।"
        keywords="ग्रामसेवक, गाव प्रशासकीय अधिकारी, तांडा, ग्रामपंचायत, गोंदिया"
        ogTitle="ग्रामसेवक | तांडा ग्रामपंचायत"
        ogDescription="तांडा ग्रामपंचायतचे ग्रामसेवक यांचे संपर्क आणि जिम्मेदारी।"
        canonicalUrl="https://tandgrampanchayat.gov.in/gramsevak"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>ग्रामसेवक</h1>
          <p>गाव प्रशासकीय अधिकारी</p>
        </div>
      </section>

      {/* Official Profile */}
      <section className="official-profile">
        <div className="container">
          <div className="profile-grid">
            <div className="profile-image">
              {/* <div className="placeholder-image large">ग्रामसेवक</div> */}
              <img
                src={gramsevakImg}
                alt="gramsevak"
                className="no-download"
                draggable={false}
                onContextMenu={preventImgActions}
                onDragStart={preventImgActions}
              />
              <h3>कु.साधना टेकचंद बिसेन</h3>
            </div>
            <div className="profile-info">
              <h2>ग्रामसेवक</h2>
              <p className="designation">Village Administrative Officer</p>

              <div className="info-section">
                <h3>संक्षिप्त परिचय</h3>
                <p>
                  तांडा ग्रामपंचायतचे ग्रामसेवक हे गावचे मुख्य प्रशासकीय अधिकारी आहेत.
                  ते ग्रामपंचायतचे सर्व प्रशासकीय कार्य संभाळतात, दस्तऐवजीकरण करतात आणि
                  सरकारी योजनांचा अंमलबजावणी करतात. ते ग्रामस्थांच्या विविध प्रमाणपत्र,
                  अर्ज आणि इतर कागदपत्रांचे कार्य पाहतात.
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
                    <p className="value">gramsevak@tandgrampanchayat.gov.in</p>
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
          <h2>ग्रामसेवकचे मुख्य जिम्मेदारी</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-card">
              <h3>प्रशासकीय कार्य</h3>
              <p>ग्रामपंचायतचे सर्व प्रशासकीय कार्य संभाळणे आणि दस्तऐवजीकरण</p>
            </div>
            <div className="responsibility-card">
              <h3>प्रमाणपत्र जारी करणे</h3>
              <p>जन्म प्रमाणपत्र, मृत्यु प्रमाणपत्र, निवास प्रमाणपत्र इत्यादी जारी करणे</p>
            </div>
            <div className="responsibility-card">
              <h3>सरकारी योजनांचा अंमलबजावणी</h3>
              <p>विविध सरकारी योजनांचा अंमलबजावणी आणि लाभार्थी निवड</p>
            </div>
            <div className="responsibility-card">
              <h3>लेखा व्यवस्थापन</h3>
              <p>ग्रामपंचायतचे लेखा आणि आर्थिक व्यवस्थापन</p>
            </div>
            <div className="responsibility-card">
              <h3>जनसंपर्क</h3>
              <p>ग्रामस्थांच्या विविध अर्ज आणि समस्या सुनणे</p>
            </div>
            <div className="responsibility-card">
              <h3>रिपोर्ट तयारी</h3>
              <p>विविध सरकारी रिपोर्ट आणि आंकडे तयार करणे</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="services-provided">
        <div className="container">
          <h2>ग्रामसेवकचे माध्यमातून उपलब्ध सेवा</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>जन्म प्रमाणपत्र</h3>
              <p>नवजात बालकांचे जन्म प्रमाणपत्र जारी करणे</p>
            </div>
            <div className="service-card">
              <h3>मृत्यु प्रमाणपत्र</h3>
              <p>मृत व्यक्तीचे मृत्यु प्रमाणपत्र जारी करणे</p>
            </div>
            <div className="service-card">
              <h3>विवाह प्रमाणपत्र</h3>
              <p>गावातील विवाह प्रमाणपत्र जारी करणे</p>
            </div>
            <div className="service-card">
              <h3>बीपीएल प्रमाणपत्र</h3>
              <p>सेवा पुरविण्याबाबत बीपीएल प्रमाणपत्र जारी करणे</p>
            </div>
            <div className="service-card">
              <h3>घरचा नमूना ८ प्रमाणपत्र</h3>
              <p>गावातील लोकांना सेवा पुरविणे</p>
            </div>
            <div className="service-card">
              <h3>विविध अर्ज</h3>
              <p>सरकारी योजनांसाठी विविध अर्ज स्वीकारणे</p>
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

export default Gramsevak;
