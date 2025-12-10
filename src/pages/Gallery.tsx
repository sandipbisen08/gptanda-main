import React, { useState, useCallback, useEffect } from 'react';
import SEO from '../components/SEO';
import './Gallery.scss';
import gp1 from '../images/gp1.jpg';
import gp2 from '../images/gp2.jpg';
import gp3 from '../images/gp3.jpg';
import gp4 from '../images/gp4.jpg';
import gp5 from '../images/gp5.jpg';
import gp6 from '../images/gp6.jpg';
import gp7 from '../images/gp7.jpg';
import gp8 from '../images/gp8.jpg';
import gp9 from '../images/gp9.jpg';
import gp10 from '../images/gp10.jpg';
import gpb2 from '../images/gpb2.jpg';
import gpb3 from '../images/gpb3.jpg';
import gpb4 from '../images/gpb4.jpg';
import gpb5 from '../images/gpb5.jpg';
import gpb6 from '../images/gpb6.jpg';
import dec6 from '../images/dec6.jpg';
import dec8 from '../images/dec8.jpg';
const Gallery: React.FC = () => {
    const images = [
    { src: gp1, title: 'चित्र 1', desc: 'मुख्यमंत्री समृद्ध  पंचायतराज अभियान अंतर्गत ग्राम तांडा येथे जिल्हा परिषद शाळेतील प्रथम व द्वितीय  क्रमांक आलेल्या विद्यार्थ्यांना तसेच गावातील शासकीय सेवेत लागलेल्या मुला मुलींचे ग्रामपंचायत मार्फत शाल, श्रीफळ, व शील्ड देऊन विद्यार्थ्यांचा सत्कार करण्यात आला' },
    { src: gp2, title: 'चित्र 2', desc: 'मुख्यमंत्री पंचायत राज अभियान अंतर्गत लोक वरगनी करतांनी घेण्यात आलेले छायाचित्र' },
    { src: gp3, title: 'चित्र 3', desc: 'चित्र 3 साठी वेगळे वर्णन' },
    { src: gp4, title: 'चित्र 4', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत ग्रामपंचायत तांडा येथे संपूर्ण गावात, चौकात, रस्त्याच्या मुख्य रस्त्यावर, सार्वजनिक ठिकाणी, सौर उर्जेवर आधारित सी.सी.टीव्ही कॅमेरे लावण्यात आले' },
    { src: gp5, title: 'चित्र 5', desc: 'चित्र 5 साठी वेगळे वर्णन' },
    { src: gp6, title: 'चित्र 6', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत ग्राम तांडा येथे अभियान सुरुवातीपासून दर आठवड्याला स्वच्छता अभियान राबविण्यात येते' },
    { src: gp7, title: 'चित्र 7', desc: 'चित्र 7 साठी वेगळे वर्णन' },
    { src: gp8, title: 'चित्र 8', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत नाविन्यपूर्ण उपक्रम अंतर्गत ग्राम तांडा येथे कृत्रिम विसर्जन तलाव तयार करून गणेश जी मूर्ती विसर्जन करण्यात आली' },
    { src: gp9, title: 'चित्र 9', desc: 'दिनांक 20/11/2025ला शुद्ध पिण्याच्या पाण्याचा पुरवठा करिता गावकरी ग्रामस्थांना पिण्याच्या पाण्याची  कॅन वाटप करण्यात आली' },
    { src: gp10, title: 'चित्र 10', desc: 'चित्र 10 साठी वेगळे वर्णन' },
    { src: gpb2, title: 'चित्र 11', desc: 'ग्राम पंचायत कार्यालय तांडा , व पं.समिती गोंदिया  अतंर्गत माय बहुउद्देशीय विकास सेवा संस्था द्वारा भव्य निःशुल्क आरोग्य शिबिर कार्यक्रम दिनांक १०/११/२०२५ रोज सोमवारला आयोजित करण्यात आले होते.' },
    { src: gpb3, title: 'चित्र 12', desc: 'दिनांक 20/11/2025ला मुख्यमंत्री समृद्ध पंचायत राज अभियान अंतर्गत ग्रामपंचायत तांडा येथे महिलांकरिता ॲनिमिया टेस्ट अभियान मोहीम राबविण्यात आली .' },
    // { src: gpb4, title: 'चित्र 13', desc: 'दिनांक 20/11/2025ला मुख्यमंत्री समृद्ध पंचायत राज अभियान अंतर्गत ग्रामपंचायत तांडा येथे महिलांकरिता ॲनिमिया टेस्ट अभियान मोहीम राबविण्यात आली .' },
    { src: gpb5, title: 'चित्र 14', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान कार्यक्रमाअंतर्गत आज दिनांक १२/११/२०२५ ला गोंडीटोला (तांडा) येथे नाल्यावरती वनराई बंधारा बांधण्यात आला' },
    { src: gpb6, title: 'चित्र 15', desc: 'आज दिनांक 25/11/2025 ला मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत ग्रामपंचायत तांडा येथे अंगणवाडी परिसर स्वच्छता करण्यात आली' },
    { src: dec6, title: 'चित्र 16', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियानांतर्गत ग्रामपंचायत कार्यालय तांडा येथे दिनांक 6 /12/ 2025 ला अंगणवाडी परिसरात परसबाग तयार करण्यात आली ' },
    { src: dec8, title: 'चित्र 17', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियानांतर्गत ग्रामपंचायत तांडा इथे आज दिनांक 08/12/2025 ला ग्रामपंचायत परिसर, अंगणवाडी परिसर शासकीय योजनांच्या प्रचार प्रसिद्धी संदर्भात पेंटिंग काढण्यात आली' },
];

    const [current, setCurrent] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Prevent right-click and drag-save on images
    const preventImgActions = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

    const closeLightbox = () => setLightboxOpen(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightboxOpen, next, prev]);

    return (
        <div className="gallery-page">
            <SEO
                title="गॅलरी | तांडा ग्रामपंचायत"
                description="गावातील कार्यक्रम आणि विकास प्रकल्पांची गॅलरी"
            />

            <section className="gallery-large">
                <div className="container">
                    <div className="section-header">
                        <h2>गॅलरी</h2>
                        <p>गावातील कार्यक्रम आणि विकास प्रकल्प</p>
                    </div>

                    <div className="thumbnails">
    {images.map((img, idx) => (
        <button
            key={idx}
            className={`thumb ${idx === current ? 'active' : ''}`}
            onClick={() => { setCurrent(idx); setLightboxOpen(true); }}
            onContextMenu={preventImgActions}
            aria-label={`Open ${img.title}`}
        >
            <img
                src={img.src}
                alt={img.title}
                className="no-download"
                draggable={false}
                onContextMenu={preventImgActions}
                onDragStart={preventImgActions}
            />
            <div className="thumb-caption">
                <div className="thumb-title">{img.title}</div>
                {img.desc && (
                    <div className="thumb-desc">{img.desc}</div>
                )}
            </div>
        </button>
    ))}
</div>
                </div>
            </section>

            {lightboxOpen && (
                <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close" onClick={closeLightbox} aria-label="Close">✕</button>
                        <button className="nav nav-left" onClick={prev} aria-label="Previous">‹</button>
                        <img
                            src={images[current].src}
                            alt={images[current].title}
                            className="no-download"
                            draggable={false}
                            onContextMenu={preventImgActions}
                            onDragStart={preventImgActions}
                        />
                        <button className="nav nav-right" onClick={next} aria-label="Next">›</button>
                        <div className="lightbox-caption">{images[current].title}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
