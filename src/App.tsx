import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Sarpanch from './pages/Sarpanch';
import Upsarpanch from './pages/Upsarpanch';
import Gramsevak from './pages/Gramsevak';
import Adhyaksha from './pages/Adhyaksha';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sarpanch" element={<Sarpanch />} />
          <Route path="/upsarpanch" element={<Upsarpanch />} />
          <Route path="/gramsevak" element={<Gramsevak />} />
          <Route path="/adhyaksha" element={<Adhyaksha />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
