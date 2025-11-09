import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaEnvelope, FaBullhorn, FaUsers } from 'react-icons/fa';
import SEO from '../components/SEO';
import Marquee from '../components/Marquee';
import './Home.scss';
import gp1 from '../images/gptanda.jpg';
import gp2 from '../images/gp2.jpg';
import gp3 from '../images/gp3.jpg';
import gp4 from '../images/gp4.jpg';
import gp5 from '../images/gp5.jpg';
import gp6 from '../images/gp6.jpg';
import gp7 from '../images/gp7.jpg';
import gp8 from '../images/gp8.jpg';
import gp9 from '../images/gp9.jpg';
import gp10 from '../images/gp10.jpg';
import gptanda from '../images/gptanda.jpg';
import gptandaVideo from '../videos/gptanda2.mp4';

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
  const heroImages = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10, gptanda];
  const [heroIdx, setHeroIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => setHeroIdx(i => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(interval);
  }, [heroImages.length, autoPlay]);

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

  // About section toggle state
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  return (
    <div className="home">
      {/* Maharashtra Government Banner */}
      <div className="govt-banner">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Seal_of_Maharashtra.png/80px-Seal_of_Maharashtra.png" alt="महाराष्ट्र शासन" className="govt-emblem" />
        <span className="govt-text">महाराष्ट्र शासन</span>
      </div>

      {/* Latest Update Marquee */}
      <Marquee 
        text="पावसाळ्याआधी रस्त्यांची दुरुस्ती केली जाणार आहे | विद्यार्थ्यांसाठी शिष्यवृत्ती योजना अंतर्गत अर्ज मागण्यात येत आहेत | हर घर नलजल योजना सुरू आहे"
        speed={25}
      />

      <SEO
        title="तांडा ग्रामपंचायत | Tanda Grampanchayat - आधिकारिक वेबसाइट"
        description="तांडा ग्रामपंचायत - गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील आधिकारिक ग्रामपंचायत वेबसाइट। सेवा, जाहिराती, नेतृत्व आणि ग्रामीण विकास कार्यक्रम।"
        keywords="तांडा, ग्रामपंचायत, गोंदिया, महाराष्ट्र, गोंदिया, सरपंच, ग्रामीण विकास, सेवा"
        ogTitle="तांडा ग्रामपंचायत | Tanda Grampanchayat"
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
            {/* <Link to="/contact" className="btn btn-secondary">संपर्क साधा</Link> */}
          </div>
        </div>
      </section>

      {/* Stats/Counters Section */}
      {/* <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{counts[i]}<span className="stat-plus">{stat.value > 10 ? '+' : ''}</span></div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>ग्रामपंचायत कार्यालय तांडा</h2>
            <h4>पं.स.गोंदिया ता. – गोंदिया , जिल्‍हा परिषद .-गोंदिया, महाराष्ट्र</h4>
            <p>प्रस्तावना </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                मुख्यमंत्री समृध्द पंचायत राज अभियान अंतर्गत ग्रामपंचायत कार्यालय तांडा याची स्थापना सन १९५२ ला झालेली आहे. आमच्या तांडा या गावाचे प्रथम सरपंच श्री भोजराजसिंह गणपतसिंह [सोमवंशी हे सन १९५३ ते १९५७ पर्यंत  गावाचे प्रथम सरपंच होते तेव्हापासून आमचा तांडा हे गाव सतत विकासाच्या वाटेने वाटचाल करीत आहे आता पर्यंत  गावात एकूण १८ सरपंच झालेले आहेत सध्या स्थितीत १९ वे सरपंच सौ.वर्षाताई दीपक पटले  व उपसरपंच श्री निलेस्वर  तेजरामजी कारंजेकर व इतर ०८ सदस्य १०/०१/२०२३ पासून कार्यरत आहेत.
                तांडा हे गाव गोंदिया ते आमगाव (NH -५४३ ) महामार्गावर वसलेले गाव आहे या गावाचे भौगोलिक क्षेत्र ६६४.४२ आहे या गावाची लोकसंख्या २०११ च्या जणगणनेनुसार २७८२ असून  अनुसूचित जाती २५८ ,अनुसूचित जमाती २०५ व ईतर २३१९ अशी आहे. या गावाचे  शिवाटोला,सावकारटोली व गोंडीटोला हे तीन प्रमुख टोले आहेत.या गावात क्रमांक  १,२  व ३  अंगणवाडी आहेत आणि जि.प. वरिष्ठ प्राथमिक शाळा  तांडा येथे  कॉन्वेट व १ ते ७ पर्यंत वर्ग खोल्या आहेत. व यात एकूण १७० विद्यार्थी शिक्षण घेत आहेत  जिल्हापरिषद शाळेचा आवारातमुलाकरिता व्यायाम शाळा   भव्य मोठा पंटागण आहे व यात एकूण २७० झाडे लावलेले आहेत. या गावात स्व पोहुमल हायस्कूल व बी एस सी नर्सिंग कॉलेज उपलब्ध आहे तसेच स्व.खुशाल कापसे कनिष्ट महाविधालय येथे ११ ते  पदवी पर्यंत शिक्षण उपलब्ध आहे.
                </p>
              {showMoreAbout && (
                <p>
                या गावात महिला बचत गट भवन,वाचनालय अशा एकूण ०८ शासकीय ईमारती आहेत तसेच गावात  एकूण १४ चौक व ०३ वार्ड  आहेत  तसेच गावामध्ये पोळा,गोवर्धन चौक व मंडई ची जागा राखून ठेवलेली आहे.या गावाची परंपरा आहे कि संपूर्ण गावातील लोक गावाच्या विकासाकरिता मिळून प्रयत्न करतात व सार्वजनिक उत्सव जसे कि पोळा , गणेशउत्सव,दुर्गाउत्सव, दसरा,दिवाळी, महाशिवरात्री ,होळी,बिरसा मुंडा जयंती  मोठ्या उत्साहाने साजरे करतात व सार्वजनिक ठिकाणी भजन कीर्तनाच्या माध्यमातून  बालविवाह,हुंडा प्रतिबंध कायदा अंधश्रद्धा निर्मुलन ,वेशन मुक्ती,ग्रामस्वच्छता, प्लास्टिक बंदी समाजप्रबोधन व संत पुण्यतिथी इत्यादी विषयावर भजन मंडळाच्या माध्यमातून जनजागृती केली जाते व प्रत्येक आठवड्यात रविवार या दिवशी ग्रामस्वच्छता संघाव्दारे स्वच्छतेचे कार्य केले जाते तसेच गावामध्ये एकूण ०७ तळे सार्वजनिक पाण्याची टाकी सध्या तांडा या गावात माळयादेव देवस्थान पर्यटन स्थळ महणून विकसित होत आहे महाशिवरात्रीला माळयादेव येथे ८० ते ९० वर्षापासून जत्रा भरत असते व आजूबाजूच्या परिसरातील लोक येतात व आपला आनद द्वूगुनीत करतात.
                या गावातील लोकांना पिण्याकारिता शुध्द पाणी  वाटर एटीएम  व्दारे उपलब्ध करण्यात  आले आहे. गावातजलजीवन मिशन प्राधिकरण अंतर्गत  हर घर नलजल  योजना उपलब्ध करण्यात आली आहे तसेच गावामध्ये वाटर टँकर,लघु नळ योजना,बंदिस्त गटारे, स्मशान भूमी,व स्मशानभूमी स्थळी सिमेंट खुर्च्या,मग्रारोहयो व मझी वसुंधरा योजने अंतर्गत झाले लावलेले आहेत सिमेंट रस्ते सुव्यवस्थित आहेत व या गावात दळणवळणा करिता गोंदिया  हे त.जिल्हाचे ठिकाण अंदाजे ९ ते १० कि.मी अंतरावर आहे
                </p>
              )}
              <button 
                onClick={() => setShowMoreAbout(!showMoreAbout)}
                className="btn btn-outline"
                style={{ marginTop: '1rem' }}
              >
                {showMoreAbout ? 'कमी दाखवा' : 'अधिक जाणून घ्या'}
              </button>
            </div>
            <div className="about-image">
              <img src={gptanda} alt="गाव विकास कार्यक्रम" />
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
            <div className="announcement announcement-video-only">
              <div className="announcement-header">
                <div className="announcement-date">१७/०९/२०२५</div>
                <h3>मुख्यमंत्री समृद्ध पंचायतराज अभियान राबविण्यासंदर्भात प्रचार प्रसिद्धी</h3>
              </div>
              <div className="announcement-video-full">
                <video
                  controls
                  width="100%"
                  height="100%"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <source src={gptandaVideo} type="video/mp4" />
                  आपल्या ब्राउझरमध्ये व्हिडिओ प्लेबॅक समर्थित नाही.
                </video>
              </div>
              <p style={{ marginTop: '1.5rem', color: 'var(--gray-color)', lineHeight: '1.7' }}>
                दिनांक १७/०९/२०२५ रोज बुधवारला सकाळी ठिक १०:०० वाजता ग्रामपंचायत कार्यालय तांडा येथे मुख्यमंत्री समृद्ध पंचायतराज अभियान राबविण्यासंदर्भात कार्यक्रम घेण्यात आले.सर्व प्रथम अभियानाचा राज्यस्तरीय सुभारंभ  कार्यक्रम प्रक्षेपण उपस्थित सर्वान्ना लाइव कार्यक्रम दाखविण्यात आले .व त्यानंतर विशेष ग्रामसभेला मा.सरपंच श्रीमती सौ. वर्षा दिपक पटले यांच्या अध्यक्षतेखाली  सुरुवात करण्यात आली .
              </p>
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
