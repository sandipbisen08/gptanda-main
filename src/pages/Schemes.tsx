import React from 'react';
import { Link } from 'react-router-dom';
import './Schemes.scss';

const Schemes: React.FC = () => {
  return (
    <div className="schemes">
      <section className="page-hero">
        <div className="container">
          <h1>आमच्या योजना</h1>
          <p className="subtitle">तांडा ग्रामपंचायत द्वारा प्रदान केलेल्या योजना</p>
        </div>
      </section>

      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>योजना</span>
          </nav>
        </div>
      </div>

      <section className="container">
        <h2 className="section-title">सन २०२५-२०२६चा वार्षिक जमा खर्च गोषवारा</h2>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>४९५</td>
                <td></td>
                <td>११०००</td>
              </tr>
              <tr>
                <td>वाटर ट्रक्टरकिराया</td>
                <td>३१००</td>
                <td>निर्जतुकीकरण</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>वाटर कॅन किराया</td>
                <td>६८३०</td>
                <td>कार्यालयीन खर्च</td>
                <td>1572</td>
              </tr>
              <tr>
                <td>वाटर ए टी एम मशीन</td>
                <td>१८८९०</td>
                <td>पाणीपुरवठा विद्युत बिल</td>
                <td>1570</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>पाणीपुरवठा साहित्य खरेदी</td>
                <td>2080</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>पाणीपुरवठा कर्मचारी पगार</td>
                <td>67208</td>
              </tr>
              <tr>
                <td>एकून जमा</td>
                <td>134066.७२</td>
                <td>एकूण खर्च</td>
                <td>१२७८७३.७२</td>
              </tr>
              <tr>
                <td>सु.शि.</td>
                <td>50595.०४</td>
                <td>अ.शि.</td>
                <td>50९८८.०४</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>१८४६६१.७६</td>
                <td>एकूण</td>
                <td>१७८८६१.७६</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container schemes-sections">
        <div className="grid">
          <div className="col">
            <h2 className="block-title">योजना</h2>
            <div className="underline" />
            <div className="list-block">
              <h3>1) केंद्र पुरस्कृत योजना</h3>
              <ul className="bullets">
                <li>महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना</li>
                <li>स्वच्छ भारत मिशन योजना</li>
                <li>15 वा वित्त आयोग योजना</li>
                <li>जल जीवन मिशन योजना</li>
              </ul>
            </div>
            <div className="list-block">
              <h3>2) राज्य पुरस्कृत योजना</h3>
              <ul className="bullets">
                <li>जन सुरक्षा योजना</li>
                <li>नवयुवक घटकांच्या वस्तीत विकास करणे</li>
                <li>स्व निधी</li>
                <li>सामान्य फंड</li>
                <li>ग्रामीण पाणी पुरवठा निधी</li>
              </ul>
            </div>
          </div>

          <div className="col">
            <h2 className="block-title">सेवा</h2>
            <div className="underline" />
            <ul className="checks">
              <li>ग्राम पंचायत अंतर्गत सर्व दाखले ऑनलाईन देण्यात येतात.</li>
              <li>शिक्षणाच्या दृष्टीने गावात 1 ते 7 पर्यंत शाळा आहे.</li>
              <li>तालुक्यात जिल्हा परिषदेच्या अंतर्गत गुणवत्तापूर्ण शिक्षण दिले जाते.</li>
              <li>गावातील तंटे निराकरणासाठी तंटामुक्त समितीचे गठन करण्यात आले आहे.</li>
              <li>गावकऱ्यांच्या आरोग्यासाठी दर शनिवार आरोग्य शिबिर घेतले जाते.</li>
              <li>शुद्ध पिण्याचे पाणी मिळावे म्हणून नळ योजनेंतर्गत योजना राबविली जाते.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <h1 style={{ marginTop: '100px' }}>This page is under development, please visit later...</h1> */}
    </div>

  );
};

export default Schemes;
