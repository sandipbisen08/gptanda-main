import React, { useEffect, useRef, useState } from 'react';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';
import SEO from '../components/SEO';
import './About.scss';

const About: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tanda Grampanchayat',
    description: 'तांडा ग्रामपंचायत - गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील आधिकारिक ग्रामपंचायत',
    url: 'https://gptandagondia.org.in',
    foundingDate: '1950',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tanda',
      addressLocality: 'Gondia',
      addressRegion: 'Gondia',
      postalCode: '441601',
      addressCountry: 'IN'
    }
  };

  // Helper: convert Western digits to Devanagari digits for Marathi display
  const toDevanagari = (input: string) => {
    const map: Record<string, string> = {
      '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
      '5': '५', '6': '६', '7': '७', '8': '८', '9': '९'
    };
    return input.replace(/\d/g, d => map[d] || d);
  };

  const formatNumberForDisplay = (num: number) => {
    // format with Indian grouping, then convert digits
    const formatted = new Intl.NumberFormat('en-IN').format(Math.round(num));
    return toDevanagari(formatted);
  };

  // AnimatedStat: shows an animated counter that starts when visible
  const AnimatedStat: React.FC<{ label: string; value: number; format?: 'number' | 'percent' }> = ({ label, value, format = 'number' }) => {
    const [count, setCount] = useState(0);
    const elRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
      let observer: IntersectionObserver | null = null;
      const node = elRef.current;
      if (!node || typeof IntersectionObserver === 'undefined') return;

      const startAnimation = () => {
        const start = performance.now();
        const duration = format === 'percent' ? 900 : 1400;
        const from = 0;
        const to = value;

        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = from + (to - from) * eased;
          setCount(Math.round(current));
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(step);
          }
        };

        rafRef.current = requestAnimationFrame(step);
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
            // start once and disconnect
            startAnimation();
            if (observer && node) {
              observer.unobserve(node);
            }
          }
        });
      }, { threshold: [0, 0.25, 0.5] });

      observer.observe(node);

      return () => {
        if (observer && node) observer.unobserve(node);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [value, format]);

    return (
      <div className="stat-card" ref={elRef}>
        <h3>
          {format === 'percent'
            ? `${toDevanagari(String(count))}%`
            : formatNumberForDisplay(count)}
        </h3>
        <p>{label}</p>
      </div>
    );
  };

  return (
    <div className="about">
      <SEO
        title="आमच्याबद्दल | तांडा ग्रामपंचायत"
        description="तांडा ग्रामपंचायतचा इतिहास, उद्दिष्ट, दृष्टिकोन आणि नेतृत्व। ग्रामीण विकास आणि सामाजिक कल्याण कार्यक्रमांबद्दल जाणून घ्या।"
        keywords="तांडा, ग्रामपंचायत, इतिहास, उद्दिष्ट, दृष्टिकोन, नेतृत्व, ग्रामीण विकास"
        ogTitle="आमच्याबद्दल | तांडा ग्रामपंचायत"
        ogDescription="तांडा ग्रामपंचायतचा इतिहास, उद्दिष्ट आणि नेतृत्व।"
        canonicalUrl="https://gptandagondia.org.in/about"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <h1>आमच्याबद्दल</h1>
          <p>तांडा ग्रामपंचायतचा इतिहास आणि उद्दिष्ट</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>तांडा ग्रामपंचायत</h2>
            <p>
              तांडा हे गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील एक सुंदर आणि समृद्ध गाव आहे.
              आमच्या गावाचे नाव तांडा असे आहे कारण येथे पूर्वी तांदूळ (भात) चे मोठे शेतकरी समुदाय होते.
              आज हा गाव कृषी, पशुपालन आणि लहान उद्योगांवर अवलंबून आहे.
            </p>
            <p>
              आमच्या ग्रामपंचायतचे मुख्य उद्दिष्ट ग्रामीण भागातील लोकांच्या जीवनमानात सुधारणा करणे,
              शिक्षा आणि आरोग्य सेवा सुलभ करणे, आणि सर्वांना समान विकासाचे संधी देणे हे आहे.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="mvv-section">
            <div className="mvv-card">
              <div className="mvv-icon">
                <FaBullseye />
              </div>
              <h3>आमचे लक्ष्य</h3>
              <p>
                ग्रामीण विकास आणि सर्वांगीण उन्नति साधन करणे.
                शिक्षा, आरोग्य, कृषी विकास आणि बुनियादी सुविधांमध्ये सुधारणा करणे.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <FaEye />
              </div>
              <h3>आमचा दृष्टिकोन</h3>
              <p>
                एक आधुनिक, समृद्ध आणि स्वच्छ गाव तयार करणे जेथे सर्व नागरिकांना
                समान अधिकार आणि सुविधा मिळतील.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <FaHeart />
              </div>
              <h3>आमचे मूल्य</h3>
              <p>
                सत्यता, न्याय, समानता आणि पारदर्शकता हे आमचे मूल मूल्य आहेत.
                आम्ही सर्वांचा विकास करण्यास प्रतिबद्ध आहोत.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="statistics">
            <h2>आमच्या गावाचे आंकडे</h2>
            <div className="stats-grid">
              {/* Counters will animate when this section scrolls into view */}
              <AnimatedStat label="एकूण लोकसंख्या" value={2782} format="number" />
              <AnimatedStat label="घरे" value={848} format="number" />
              <AnimatedStat label="साक्षरता दर" value={85} format="percent" />
              <AnimatedStat label="कृषी व्यवसाय" value={70} format="percent" />
            </div>
          </div>

          {/* Leadership */}
          {/* <div className="leadership">
            <h2>नेतृत्व</h2>
            <div className="leadership-grid">
              <div className="leader-card">
                <div className="leader-image">
                  <div className="placeholder-image">ग्र</div>
                </div>
                <h3>ग्रामपंचायत सरपंच</h3>
                <p className="position">सरपंच</p>
                <p className="contact">संपर्क: XXXXXXXXXX</p>
              </div>

              <div className="leader-card">
                <div className="leader-image">
                  <div className="placeholder-image">उप</div>
                </div>
                <h3>उपसरपंच</h3>
                <p className="position">उपसरपंच</p>
                <p className="contact">संपर्क: XXXXXXXXXX</p>
              </div>

              <div className="leader-card">
                <div className="leader-image">
                  <div className="placeholder-image">ग्रामसेविका</div>
                </div>
                <h3>साधना बिसेन</h3>
                <p className="position">ग्रामसेविका</p>
                <p className="contact">संपर्क: XXXXXXXXXX</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
