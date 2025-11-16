import React from 'react';
import { Link } from 'react-router-dom';
import './Schemes.scss';

const Schemes: React.FC = () => {
  const rows = [
    {
      id: 1,
      name: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना',
      year: '2023-2024',
      received: 97813,
      spent: 97254.8,
    },
    {
      id: 2,
      name: '15 वा वित्त आयोग योजना',
      year: '2023-2024',
      received: 2262340,
      spent: 3550351.4,
    },
    {
      id: 3,
      name: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना',
      year: '2023-2024',
      received: 97813,
      spent: 97254.8,
    },
    {
      id: 4,
      name: '15 वा वित्त आयोग योजना',
      year: '2023-2024',
      received: 2262340,
      spent: 3550351.4,
    },
    {
      id: 5,
      name: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना',
      year: '2023-2024',
      received: 97813,
      spent: 97254.8,
    },
    {
      id: 6,
      name: '15 वा वित्त आयोग योजना',
      year: '2023-2024',
      received: 2262340,
      spent: 3550351.4,
    },
  ];

  const format = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 2 });

  return (
    <div className="schemes">
      {/* <section className="page-hero">
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
        <h2 className="section-title">योजना निधी जमा खर्च वर्ष 2023-2024 ग्राम पंचायत तांडा </h2>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>अ.क्र.</th>
                <th>योजनेचे नाव</th>
                <th>वर्ष</th>
                <th>एकूण प्राप्त अनुदान</th>
                <th>एकूण खर्च अनुदान</th>
                <th>शिल्लक अनुदान</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => {
                const balance = r.received - r.spent;
                return (
                  <tr key={r.id}>
                    <td>{idx + 1}</td>
                    <td>{r.name}</td>
                    <td>{r.year}</td>
                    <td>{format(r.received)}</td>
                    <td>{format(r.spent)}</td>
                    <td className={balance < 0 ? 'neg' : ''}>{format(balance)}</td>
                  </tr>
                );
              })}
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
              <li>शिक्षणाच्या दृष्टीने गावात १ ते ८ पर्यंत शाळा आहे.</li>
              <li>तालुक्यात जिल्हा परिषदेच्या अंतर्गत गुणवत्तापूर्ण शिक्षण दिले जाते.</li>
              <li>गावातील तंटे निराकरणासाठी तंटामुक्त समितीचे गठन करण्यात आले आहे.</li>
              <li>गावकऱ्यांच्या आरोग्यासाठी दर शनिवार आरोग्य शिबिर घेतले जाते.</li>
              <li>शुद्ध पिण्याचे पाणी मिळावे म्हणून नळ योजनेंतर्गत योजना राबविली जाते.</li>
            </ul>
          </div>
        </div>
      </section> */}
      <h1 style={{ marginTop: '100px' }}>This page is under development, please visit later...</h1>
    </div>
  );
};

export default Schemes;
