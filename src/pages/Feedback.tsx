import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.scss';

const Feedback: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'तक्रार',
    subject: '',
    message: ''
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('धन्यवाद! आपली तक्रार/सूचना नोंदवली गेली आहे.');
    setForm({
      name: '',
      phone: '',
      email: '',
      type: 'तक्रार',
      subject: '',
      message: ''
    });
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
        <div className="feedback-layout">
          <div className="feedback-intro">
            <h2>आपली तक्रार / सूचना आमच्यासाठी महत्त्वाची आहे</h2>
            <p>
              गावाच्या विकासासाठी आणि सेवा सुधारण्यासाठी आपल्या तक्रारी, सूचना आणि अभिप्राय
              आम्हांला मदत करतात. कृपया खालील फॉर्म काळजीपूर्वक भरा.
            </p>
            <ul>
              <li>वास्तविक आणि अचूक माहिती द्या.</li>
              <li>अवमानास्पद किंवा चुकीची भाषा वापरू नका.</li>
              <li>गरज असल्यास संपर्कासाठी आपला मोबाईल / ई‑मेल नमूद करा.</li>
            </ul>
          </div>

          <div className="form-card">
            <form onSubmit={onSubmit}>
              <div className="row-group">
                <div className="row">
                  <label>नाव</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="आपले पूर्ण नाव"
                    required
                  />
                </div>
                <div className="row">
                  <label>मोबाईल</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="आपला मोबाईल क्रमांक"
                  />
                </div>
              </div>

              <div className="row-group">
                <div className="row">
                  <label>ई‑मेल</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="आपला ई‑मेल (ऐच्छिक)"
                  />
                </div>
                <div className="row">
                  <label>प्रकार</label>
                  <select name="type" value={form.type} onChange={onChange}>
                    <option value="तक्रार">तक्रार</option>
                    <option value="सूचना">सूचना</option>
                    <option value="प्रशंसा">प्रशंसा</option>
                    <option value="इतर">इतर</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <label>विषय</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="तक्रार / सूचनेचा मुख्य विषय"
                  required
                />
              </div>

              <div className="row">
                <label>सविस्तर माहिती</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="आपली तक्रार किंवा सूचना सविस्तर लिहा"
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="btn">सबमिट</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
