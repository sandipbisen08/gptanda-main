import React from 'react';
import { Link } from 'react-router-dom';
import './Ahwal.scss';
import news1 from '../images/news1.jpg';
import news2 from '../images/news2.jpg';
import gpb3 from '../images/gpb3.jpg';

const Ahwal: React.FC = () => {
  const reports = [
    { id: 1, title: 'आझादी का अमृत महोत्सव अहवाल', image: news1 },
    { id: 2, title: 'ग्राम स्वच्छता अभियान अहवाल', image: news2 },
    { id: 3, title: 'ग्रामसभेचा अहवाल', image: gpb3 },
  ];

  return (
    <div className="ahwal">
      {/* <section className="page-hero">
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
          {reports.map(r => (
            <article key={r.id} className="report-card">
              <div className="thumb">
                <img src={r.image} alt={r.title} />
              </div>
              <div className="content">
                <h3>{r.title}</h3>
                <div className="actions">
                  <a href={r.image} className="btn btn-primary" download>
                    Download
                  </a>
                  <a href={r.image} className="btn btn-outline" target="_blank" rel="noreferrer">
                    View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section> */}
      <h1 style={{ marginTop: '100px' }}>This page is under development, please visit later...</h1>
    </div>
  );
};

export default Ahwal;
