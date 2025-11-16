import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';

const Projects: React.FC = () => {
  const projects = [
    { id: 1, title: 'विहीर दुरुस्ती व पाणीपुरवठा सुधारणा', desc: 'ग्रामीण पाणी पुरवठा सुधारण्यासाठी दुरुस्ती व देखभाल.' },
    { id: 2, title: 'ग्रामस्वच्छता उपक्रम', desc: 'स्वच्छता अभियान अंतर्गत कचरा व्यवस्थापन सुधारणा.' },
    { id: 3, title: 'रस्ता दुरुस्ती', desc: 'मुख्य रस्त्यांची देखभाल व डांबरीकरण.' },
  ];

  return (
    <div className="projects">
      {/* <section className="page-hero">
        <div className="container">
          <h1>ग्रामविकास प्रकल्प</h1>
          <p className="subtitle">ग्रामातील सुरू असलेले व पूर्ण झालेले प्रकल्प</p>
        </div>
      </section>
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>ग्रामविकास प्रकल्प</span>
          </nav>
        </div>
      </div>

      <section className="container content">
        <div className="grid">
          {projects.map(p => (
            <article key={p.id} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </section> */}
      <h1 style={{ marginTop: '100px' }}>This page is under development, please visit later...</h1>
    </div>
  );
};

export default Projects;
