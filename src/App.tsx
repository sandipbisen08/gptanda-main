import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import Gallery from './pages/Gallery';
import Schemes from './pages/Schemes';
import Ahwal from './pages/Ahwal';
import Members from './pages/Members';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Feedback from './pages/Feedback';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RTI from './pages/RTI';
import './App.scss';
import { Analytics } from "@vercel/analytics/react";

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/ahwal" element={<Ahwal />} />
          <Route path="/members" element={<Members />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sarpanch" element={<Sarpanch />} />
          <Route path="/upsarpanch" element={<Upsarpanch />} />
          <Route path="/gramsevak" element={<Gramsevak />} />
          <Route path="/adhyaksha" element={<Adhyaksha />} />
          <Route path="/rti" element={<RTI />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>

  );
};

export default App;

