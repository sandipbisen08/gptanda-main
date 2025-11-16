import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.scss';

const Feedback: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('धन्यवाद! आपली तक्रार/सूचना नोंदवली गेली आहे.');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="feedback">
      <section className="page-hero">
        <div className="container">
          <h1>तक्रार आणि सूचना</h1>
          <p className="subtitle">आपल्या सूचना व तक्रारी आम्हांला सांगा</p>
        </div>
      </section>
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>तक्रार आणि सूचना</span>
          </nav>
        </div>
      </div>

      <section className="container content">
        <div className="form-card">
          <form onSubmit={onSubmit}>
            <div className="row">
              <label>नाव</label>
              <input name="name" value={form.name} onChange={onChange} placeholder="आपले नाव" required />
            </div>
            <div className="row">
              <label>मोबाईल</label>
              <input name="phone" value={form.phone} onChange={onChange} placeholder="आपला मोबाईल" />
            </div>
            <div className="row">
              <label>संदेश</label>
              <textarea name="message" value={form.message} onChange={onChange} placeholder="आपली तक्रार/सूचना" rows={5} required />
            </div>
            <button type="submit" className="btn">सबमिट</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
