import React from 'react';
import { FaRoad, FaTint, FaLeaf, FaBook, FaHeartbeat, FaUsers, FaHome, FaRecycle } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Services.scss';

const Services: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tanda Grampanchayat Services',
    description: 'तांडा ग्रामपंचायतचे विविध सेवा - रस्ते, पाणी, कृषी, शिक्षा, आरोग्य आणि सामाजिक कल्याण।',
    url: 'https://tandgrampanchayat.gov.in/services'
  };
  const services = [
    {
      icon: <FaRoad />,
      title: 'रस्ते आणि वाहतूक',
      description: 'गावातील रस्त्यांची देखभाल, मरम्मत आणि वाहतूक सुविधा सुधारणे.'
    },
    {
      icon: <FaTint />,
      title: 'पाणी पुरवठा',
      description: 'स्वच्छ पाण्याची पुरवठा व्यवस्था आणि जलनिकाय व्यवस्थापन.'
    },
    // {
    //   icon: <FaLeaf />,
    //   title: 'कृषी विकास',
    //   description: 'आधुनिक कृषी तंत्र, बीज वितरण आणि कृषक प्रशिक्षण कार्यक्रम.'
    // },
    // {
    //   icon: <FaBook />,
    //   title: 'शिक्षा',
    //   description: 'शिक्षा सुविधा, शिष्यवृत्ती योजना आणि शैक्षणिक कार्यक्रम.'
    // },
    {
      icon: <FaHeartbeat />,
      title: 'आरोग्य सेवा',
      description: 'आरोग्य शिविर, टीकाकरण आणि स्वास्थ्य जागरूकता कार्यक्रम.'
    },
    {
      icon: <FaUsers />,
      title: 'कल्याणकारी योजना',
      description: 'सरकारी योजनांचा लाभ, वृद्धा पेंशन आणि अन्य सहायता.'
    },
    {
      icon: <FaHome />,
      title: 'घर बांधकाम योजना',
      description: 'प्रधानमंत्री आवास योजना आणि घर बांधकामासाठी सहायता.'
    },
    {
      icon: <FaRecycle />,
      title: 'स्वच्छता अभियान',
      description: 'स्वच्छता, कचरा व्यवस्थापन आणि पर्यावरण संरक्षण.'
    }
  ];

  return (
    <div className="services">
      <SEO
        title="सेवा | तांडा ग्रामपंचायत"
        description="तांडा ग्रामपंचायतचे विविध सेवा - रस्ते, पाणी पुरवठा, कृषी विकास, शिक्षा, आरोग्य सेवा, महिला कल्याण आणि स्वच्छता अभियान।"
        keywords="सेवा, ग्रामीण विकास, तांडा, ग्रामपंचायत, रस्ते, पाणी, कृषी, शिक्षा, आरोग्य"
        ogTitle="सेवा | तांडा ग्रामपंचायत"
        ogDescription="तांडा ग्रामपंचायतचे विविध सेवा आणि कार्यक्रम।"
        canonicalUrl="https://tandgrampanchayat.gov.in/services"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>आमच्या सेवा</h1>
          <p>तांडा ग्रामपंचायत द्वारा प्रदान केलेल्या सेवा</p>
        </div>
      </section>

      {/* Services Content */}
      <section className="services-content">
        <div className="container">
          <div className="intro-text">
            <h2>ग्रामीण विकासासाठी आमचे प्रयत्न</h2>
            <p>
              तांडा ग्रामपंचायत गावातील सर्व नागरिकांच्या विकासासाठी विविध सेवा प्रदान करते.
              आम्ही शिक्षा, आरोग्य, कृषी, बुनियादी सुविधा आणि कल्याणकारी योजनांमध्ये कार्य करत आहोत.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Services */}
          <div className="detailed-services">
            <h2>विस्तृत माहिती</h2>

            <div className="service-detail">
              <h3>१. रस्ते आणि वाहतूक</h3>
              <p>
                गावातील सर्व रस्त्यांची नियमित देखभाल आणि मरम्मत केली जाते.
                आम्ही सार्वजनिक वाहतूक सुविधा सुधारण्यासाठी प्रयत्नशील आहोत.
              </p>
            </div>

            <div className="service-detail">
              <h3>२. पाणी पुरवठा</h3>
              <p>
                स्वच्छ पाण्याची पुरवठा व्यवस्था सुनिश्चित करण्यासाठी आम्ही विविध योजना राबवत आहोत.
                जलनिकाय व्यवस्थापन आणि पाणी संरक्षण हे आमचे मुख्य लक्ष्य आहे.
              </p>
            </div>

            {/* <div className="service-detail">
              <h3>३. कृषी विकास</h3>
              <p>
                कृषकांना आधुनिक कृषी तंत्र, उन्नत बीज आणि खते प्रशिक्षण प्रदान केले जाते.
                आम्ही कृषी उत्पादन वाढवण्यासाठी विविध कार्यक्रम आयोजित करत आहोत.
              </p>
            </div> */}

            {/* <div className="service-detail">
              <h3>४. शिक्षा</h3>
              <p>
                शिक्षा हे विकासाचा मूल आधार आहे. आम्ही शिष्यवृत्ती योजना, शैक्षणिक कार्यक्रम
                आणि शिक्षा सुविधा प्रदान करत आहोत.
              </p>
            </div> */}

            <div className="service-detail">
              <h3>३. आरोग्य सेवा</h3>
              <p>
                आरोग्य शिविर, टीकाकरण, आणि स्वास्थ्य जागरूकता कार्यक्रम नियमित आयोजित केले जातात.
                आम्ही सर्वांच्या आरोग्य सुधारणासाठी कार्य करत आहोत.
              </p>
            </div>

            <div className="service-detail">
              <h3>४. कल्याणकारी योजना</h3>
              <p>
                वृद्धा पेंशन, विधवा पेंशन, अपंग पेंशन आणि अन्य सरकारी योजनांचा लाभ
                पात्र नागरिकांना दिला जाता है.
              </p>
            </div>

            <div className="service-detail">
              <h3>५. घर बांधकाम योजना</h3>
              <p>
                प्रधानमंत्री आवास योजना आणि अन्य घर बांधकाम योजनांमध्ये सहायता प्रदान केली जाते.
                आम्ही गरीब परिवारांना घर बांधकामासाठी आर्थिक सहायता देत आहोत.
              </p>
            </div>

            <div className="service-detail">
              <h3>६. स्वच्छता अभियान</h3>
              <p>
                स्वच्छ भारत अभियानाचा भाग म्हणून आम्ही स्वच्छता, कचरा व्यवस्थापन
                आणि पर्यावरण संरक्षणासाठी कार्य करत आहोत.
              </p>
            </div>
          </div>

          {/* How to Avail Services */}
          {/* <div className="how-to-avail">
            <h2>सेवा कसे घ्यायचे?</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">१</div>
                <h4>ग्रामपंचायत कार्यालयात येथे</h4>
                <p>सोम-शनि सकाळी १० ते संध्याकाळी ६ वाजेपर्यंत</p>
              </div>
              <div className="step">
                <div className="step-number">२</div>
                <h4>आवश्यक कागदपत्र सादर करा</h4>
                <p>आपल्या ओळखपत्र आणि अन्य आवश्यक कागदपत्र घेऊन येथे</p>
              </div>
              <div className="step">
                <div className="step-number">३</div>
                <h4>अर्ज भरा</h4>
                <p>संबंधित सेवेसाठी अर्ज भरा आणि जमा करा</p>
              </div>
              <div className="step">
                <div className="step-number">४</div>
                <h4>अनुमोदन प्राप्त करा</h4>
                <p>आपल्या अर्जाचे अनुमोदन मिळवा आणि सेवा घ्या</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
