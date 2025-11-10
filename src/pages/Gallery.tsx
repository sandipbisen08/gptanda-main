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

const Gallery: React.FC = () => {
    const images = [
        { src: gp1, title: 'चित्र 1' },
        { src: gp2, title: 'चित्र 2' },
        { src: gp3, title: 'चित्र 3' },
        { src: gp4, title: 'चित्र 4' },
        { src: gp5, title: 'चित्र 5' },
        { src: gp6, title: 'चित्र 6' },
        { src: gp7, title: 'चित्र 7' },
        { src: gp8, title: 'चित्र 8' },
        { src: gp9, title: 'चित्र 9' },
        { src: gp10, title: 'चित्र 10' }
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
