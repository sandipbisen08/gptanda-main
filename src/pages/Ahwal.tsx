import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ahwal.scss';
import data1 from '../images/data/data1.png';
import data2 from '../images/data/data2.png';
import data3 from '../images/data/data3.png';
import data4 from '../images/data/data4.png';
import data5 from '../images/data/data5.png';
import data6 from '../images/data/data6.png';
import data7 from '../images/data/data7.png';
import data8 from '../images/data/data8.png';
import data9 from '../images/data/data9.png';
import data10 from '../images/data/data10.png';
import data11 from '../images/data/data11.png';
import data12 from '../images/data/data12.png';
import data13 from '../images/data/data13.png';
import data14 from '../images/data/data14.png';
import data15 from '../images/data/data15.png';
import data16 from '../images/data/data16.png';
import data17 from '../images/data/data17.png';
import data18 from '../images/data/data18.png';
import data19 from '../images/data/data19.png';
import data20 from '../images/data/data20.png';
import data21 from '../images/data/data21.png';
import data22 from '../images/data/data22.png';
import data23 from '../images/data/data23.png';
import data24 from '../images/data/data24.png';
import data25 from '../images/data/data25.png';
import data26 from '../images/data/data26.png';
import data27 from '../images/data/data27.png';
import data28 from '../images/data/data28.png';
import data29 from '../images/data/data29.png';
import data30 from '../images/data/data30.png';
import data31 from '../images/data/data31.png';
import data32 from '../images/data/data32.png';
import data33 from '../images/data/data33.png';
import data34 from '../images/data/data34.png';
import data35 from '../images/data/data35.png';
import data36 from '../images/data/data36.png';
import data37 from '../images/data/data37.png';
import data38 from '../images/data/data38.png';
import data39 from '../images/data/data39.png';
import data40 from '../images/data/data40.png';
import data41 from '../images/data/data41.png';
import data42 from '../images/data/data42.png';
import data43 from '../images/data/data43.png';
import data44 from '../images/data/data44.png';
import data45 from '../images/data/data45.png';
import data46 from '../images/data/data46.png';
import data47 from '../images/data/data47.png';
import data48 from '../images/data/data48.png';
import data49 from '../images/data/data49.png';
import data50 from '../images/data/data50.png';
import data51 from '../images/data/data51.png';
import data52 from '../images/data/data52.png';
import data53 from '../images/data/data53.png';

const Ahwal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const reports = [
    { id: 1, title: 'मुख्यमंत्री समृद्ध पंचायत राज अभियान', image: data1 },
    { id: 2, title: 'लोकभिमुख प्रशासन ग्रामपंचायत', image: data2 },
    { id: 3, title: 'ग्रामसभेचा अहवाल', image: data3 },
    { id: 4, title: 'तक्रार निवारण ग्रामपंचायत', image: data4 },
    { id: 5, title: 'ग्रामपंचायत वेबसाईट', image: data5 },
    { id: 6, title: 'सीसीटीव्ही बसवणे', image: data6 },
    { id: 7, title: 'दप्तर अध्यावत व लेखापरीक्षण', image: data7 },
    { id: 8, title: 'सर्व सभा व कार्य वृत्तांत नोंदवही', image: data8 },
    { id: 9, title: 'ग्राम विकास समिती कामकाज', image: data9 },
    { id: 10, title: 'मतदार नागरिकांनी ॲप डाऊनलोड करणे', image: data10 },
    { id: 11, title: 'आयुष्मान भारत कार्ड केंद्र', image: data11 },
    { id: 12, title: 'ग्रामपंचायत कडील दिव्यांग कल्याण महिला व बालकल्याण मागासवर्गीय कल्याणवर अनुक्रमे', image: data12 },
    { id: 13, title: 'दिव्यांग ओळखपत्र', image: data13 },
    { id: 14, title: 'घरपट्टी व पाणीपट्टी इतर करांची थकबाकी वसुली करणे', image: data14 },
    { id: 15, title: 'लोक वर्गणी निधी', image: data15 },
    { id: 16, title: 'स्व उत्पन्न', image: data16 },
    { id: 17, title: 'ताडेबंद लोक सहभागातून पाण्याचा ताडेबंद', image: data17 },
    { id: 18, title: 'शुद्ध पिण्याचा पुरवठा', image: data18 },
    { id: 19, title: 'विद्युत देयकांचा थकबाकी', image: data19 },
    { id: 20, title: 'पिण्याच्या पानाचे स्त्रोत', image: data20 },
    { id: 21, title: 'रेन वॉटर हार्वेस्टिंग युनिट', image: data21 },
    { id: 22, title: 'सूक्ष्म सिंचनाखालील क्षेत्र', image: data22 },
    { id: 23, title: 'अपारंपारिक ऊर्जा व सौर ऊर्जा वापर', image: data23 },
    { id: 24, title: 'वृक्ष लागवड व वृक्ष संवर्धन', image: data24 },
    { id: 25, title: 'संत गाडगेबाबा ग्रामस्वच्छता अभियान', image: data25 },
    { id: 26, title: 'प्लास्टिक बंदी', image: data26 },
    { id: 27, title: 'घनकचरा व्यवस्थापन', image: data27 },
    { id: 28, title: 'सांडपाणी व्यवस्थापन', image: data28 },
    { id: 29, title: 'महात्मा गांधी ग्रामीण रोजगार हमी योजना', image: data29 },
    { id: 30, title: 'निर्मल शोष खड्डा जलतारा कामे', image: data30 },
    { id: 31, title: 'नवीन विहीर दुरुस्ती,  विहीर पुनर्भरण, शेततळे, बांध दगडी कामे', image: data31 },
    { id: 32, title: 'जनावरांचा गोठा, कुक्कुटपालन, शेळीपालन', image: data32 },
    { id: 33, title: 'घरकुल मनरेगा अभिसरण', image: data33 },
    { id: 34, title: 'ग्रामपंचायत सक्षमीकरण', image: data34 },
    { id: 35, title: 'शाळा सुविधा सक्षमीकरण', image: data35 },
    { id: 36, title: 'अंगणवाडी सुविधा सक्षमीकरण', image: data36 },
    { id: 37, title: 'पशु वैद्यकीय उपचार केंद्र', image: data37 },
    { id: 38, title: 'समशानभूमीमध्ये शेड व पाण्याची सोय', image: data38 },
    { id: 39, title: 'व्यायाम शाळा सुविधा', image: data39 },
    { id: 40, title: 'धार्मिक स्थळांचे सुसोभीकरण', image: data40 },
    { id: 41, title: 'प्रधानमंत्री आवास योजना व राज्यस्तरीय घरकुल योजना', image: data41 },
    { id: 42, title: 'बचत गटामध्ये महिला मतदार सहभाग', image: data42 },
    { id: 43, title: 'बचत गटातील महिलांना लखपती दीदी करणे', image: data43 },
    { id: 44, title: 'शेतकरी उत्पादक संस्था मध्ये महिलांचा सहभाग', image: data44 },
    { id: 45, title: 'सुशिक्षित उम्मेदवारांना स्वयंरोजगारासाठी कौशल्य प्रशिक्षण', image: data45 },
    { id: 46, title: 'सामाजिक अर्थसहाय्य योजना', image: data46 },
    { id: 47, title: 'शेतकरी उत्पादक संस्था स्थापन', image: data47 },
    { id: 48, title: 'ॲनिमिया मुक्तगाव संकल्पना राबविणे', image: data48 },
    { id: 49, title: 'किमान एक दिवस श्रमदान', image: data49 },
    { id: 50, title: 'रस्त्याची कामे व रस्ते दुरुस्ती करणे', image: data50 },
    { id: 51, title: 'ग्रामपंचायतीने नवीन्यपूर्ण उपक्रम राबविविणे', image: data51 },
    { id: 52, title: 'मुख्य घटक विषय', image: data52 },
    { id: 53, title: 'धन्यवाद', image: data53 },
  ];

  return (
    <div className="ahwal">
      <section className="page-hero">
        <div className="container">
          <h1>अहवाल</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>अहवाल</span>
          </nav>
        </div>
      </section>

      <section className="container">
        <div className="reports-grid">
          {reports.map((r, index) => (
            <article key={r.id} className="report-card">
              <div className="thumb" onClick={() => setActiveIndex(index)}>
                <img src={r.image} alt={r.title} />
              </div>
              <div className="content">
                <h3>{r.title}</h3>
                <div className="actions">
                  <a href={r.image} className="btn btn-primary" download>
                    Download
                  </a>
                  <button type="button" className="btn btn-outline" onClick={() => setActiveIndex(index)}>
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" className="viewer-close" onClick={() => setActiveIndex(null)} aria-label="Close preview">
            ×
          </button>
          <button type="button" className="viewer-arrow prev" onClick={() => setActiveIndex((prev) => (prev !== null ? (prev + reports.length - 1) % reports.length : null))} aria-label="Previous report">
            ‹
          </button>
          <div className="viewer-content">
            <img src={reports[activeIndex].image} alt={reports[activeIndex].title} />
            <h3>{reports[activeIndex].title}</h3>
          </div>
          <button type="button" className="viewer-arrow next" onClick={() => setActiveIndex((prev) => (prev !== null ? (prev + 1) % reports.length : null))} aria-label="Next report">
            ›
          </button>
        </div>
      )}

      {/* <h1 style={{ marginTop: '100px' }}>This page is under development, please visit later...</h1> */}
    </div>
  );
};

export default Ahwal;
