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
import dec13 from '../images/dec13.jpeg';
import dec14 from '../images/dec14.jpeg';
import dec21 from '../images/dec21.jpeg';
import dec22 from '../images/dec22.jpeg';
import dec26 from '../images/dec26.jpeg';
import dec28 from '../images/dec28.jpeg';
import dec31 from '../images/dec31.jpeg';
import jan2926 from '../images/jan2926.jpeg';
import jan3026 from '../images/jan3026.jpeg';
import gptandaVideo1 from '../videos/gptanda1.mp4';
import gptandaVideo2 from '../videos/gptanda2.mp4';
import gptandaVideo3 from '../videos/gptanda3.mp4';
import gptandaVideo4 from '../videos/gptanda4.mp4';
import gptandaVideo5 from '../videos/gptanda5.mp4';
import gptandaVideo6 from '../videos/gptanda6.mp4';
import gptandaVideo7 from '../videos/gptanda7.mp4';

type GalleryTab = 'photos' | 'videos';

type VideoItem =
    | {
            type: 'youtube';
            title: string;
            desc?: string;
            url: string;
      }
    | {
            type: 'mp4';
            title: string;
            desc?: string;
            src: string;
            poster?: string;
      };

const getYouTubeId = (url: string): string | null => {
    try {
        const u = new URL(url);
        if (u.hostname.includes('youtu.be')) {
            const id = u.pathname.replace('/', '').trim();
            return id || null;
        }
        if (u.hostname.includes('youtube.com')) {
            const v = u.searchParams.get('v');
            if (v) return v;
            const parts = u.pathname.split('/').filter(Boolean);
            const embedIdx = parts.indexOf('embed');
            if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];
        }
        return null;
    } catch {
        return null;
    }
};

const getYouTubeEmbedUrl = (url: string): string | null => {
    const id = getYouTubeId(url);
    if (!id) return null;
    return `https://www.youtube.com/embed/${id}`;
};

const getYouTubeThumbUrl = (url: string): string | null => {
    const id = getYouTubeId(url);
    if (!id) return null;
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

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
    { src: dec8, title: 'चित्र 17', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियानांतर्गत ग्रामपंचायत तांडा इथे आज दिनांक 08/12/2025 ला ग्रामपंचायत परिसर, अंगणवाडी परिसर शासकीय योजनांच्या प्रचार प्रसिद्धी संदर्भात पेंटिंग काढण्यात आली' },
    { src: dec13, title: 'चित्र 17', desc: 'दिनांक 13/12/2025 ला ग्रामपंचायत तांडा येथे मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत नोडल अधिकारी, श्री. निमजे सर मार्गदर्शन करत असताना.' },
    { src: dec14, title: 'चित्र 18', desc: 'दिनांक 14/12/2025 ला ग्रामपंचायत कार्यालय तांडा येथे मुख्यमंत्री समृद्ध पंचायतराज अभियानांतर्गत गावामध्ये स्वच्छता अभियान मोहीम  राबविण्यात आली. सदर अभियानांतर्गत गावामध्ये स्वच्छता करण्यात आली.' },
    { src: dec21, title: 'चित्र 19', desc: 'दिनांक 21/12/2025 ला मुख्यमंत्री समृद्ध अभियान काळात तंटा मुक्त समिती अंतर्गत प्राप्त झालेल्या अर्जांवर सभेत सर्वांसमोर चर्चा करण्यात आली व समस्या सोडण्यात आल्या.' },
    { src: dec22, title: 'चित्र 20', desc: 'दिनांक 22/12/2025 ला मुख्यमंत्री समृद्ध पंचायत राज अभियान दरम्यान जि.प.वरिष्ठ प्राथमिक शाळेतील व खुशाल कापसे महाविद्यालयातील किशोर वयीन व १८ वर्ष पूर्ण मुलींना दर महिन्यात सॅनिटरी पॅड वितरण करून नाविन्यपूर्ण उपक्रम राबविण्यात आले.' },
    { src: dec26, title: 'चित्र 21', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत सर्व ग्रामस्थ नागरिकांना शुद्ध पिण्याच्या पाण्याची सोय करण्यात आली आहे.' },
    { src: dec28, title: 'चित्र 22', desc: 'दिनांक 28/12/2025 ला मुख्यमंत्री समृद्ध पंचायत राज अभियान अंतर्गत स्मशानभूमी येथे मृत व्यक्तीच्या नावाने अभियान काळात वृक्ष लागवड करून नाविण्यपूर्ण उपक्रम राबविण्यात आले.' },
    { src: dec31, title: 'चित्र 23', desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान  काळात नाविन्यपूर्ण उपक्रम म्हणून ०१/०४/२०२५ ते ३१/१२/२०२५ पर्यंत जन्मलेल्या मुलींना ग्राम पंचायत तांडा येथे दिनांक ३१/१२/२०२५ ला ग्रामपंचायत द्वारे कन्या अनुदान भेट म्हणून १,१०० रुपये अनुदान राशी देण्यात आले.' },
    { src: jan2926, title: 'चित्र 24', desc: 'मुख्यमंत्री समृद्ध पंचायत राज अभियांना दरम्यान ग्रामपंचायत तांडा येथे दिनांक  २९/०१/२०२६ रोजी मा.श्री.जे.आर.देवरे सर (गटविकास अधिकारी पं.स.गोंदिया)मा. श्री एस.एस.निमजे सर ( विस्तार अधिकारी पं.स.गोंदिया), मा.श्री.चिंधालोरे सर ( विस्तार अधिकारी पं.स.गोंदिया) कृषी विस्तार अधिकारी पटले सर , जाधव सर यांनी भेट देऊन मुख्यमंत्री समृद्ध पंचायत राज अभियान योजने बाबद मार्गदर्शन करून पाहणी केली व ०१ ते ३३ नमुने रेकॉर्ड अद्यावत बाबद मार्गदर्शन केले.' },
    { src: jan3026, title: 'चित्र 25', desc: 'भेट दरम्यान ग्राम पंचायतचे मा.सौ वर्षाताई पटले (सरपंच ) कु.एस.टी.बिसेन ग्रा.पं. अधिकारी, सौरभी कमलेश बांते, अपूर्वा इंद्रेदीवार, श्री.रजत मटकुरे, नलिनी पाटील श्री. सुमित प्रदिते सर्व ग्रा.पं.अधिकारी श्री. रामेश्वर जी भगत (सदस्य) अंगणवाडी सेविका , ग्राम पंचायत कर्मचारी, रोजगार सेवक उपस्थित होते.' },
];

    const videos: VideoItem[] = [
        // {
        //     type: 'youtube',
        //     title: 'ग्रामपंचायत उपक्रम (YouTube)',
        //     desc: 'ग्रामपंचायतच्या उपक्रमांचा संक्षिप्त व्हिडिओ',
        //     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        // },
        {
            type: 'mp4',
            title: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान राबविण्यासंदर्भात प्रचार प्रसिद्धी',
            desc: 'दिनांक १७/०९/२०२५ रोज बुधवारला सकाळी ठिक १०:०० वाजता ग्रामपंचायत कार्यालय तांडा येथे मुख्यमंत्री समृद्ध पंचायतराज अभियान राबविण्यासंदर्भात कार्यक्रम घेण्यात आले.सर्व प्रथम अभियानाचा राज्यस्तरीय सुभारंभ कार्यक्रम प्रक्षेपण उपस्थित सर्वान्ना लाइव कार्यक्रम दाखविण्यात आले .व त्यानंतर विशेष ग्रामसभेला मा.सरपंच श्रीमती सौ. वर्षा दिपक पटले यांच्या अध्यक्षतेखाली सुरुवात करण्यात आली .',
            src: gptandaVideo2
        },
        {
            type: 'mp4',
            title: 'भव्य निःशुल्क आरोग्य शिबिर कार्यक्रम',
            desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान कार्यक्रम अंतर्गत ग्राम पंचायत कार्यालय तांडा , व पं.समिती गोंदिया अतंर्गत माय बहुउद्देशीय विकास सेवा संस्था द्वारा भव्य निःशुल्क आरोग्य शिबिर कार्यक्रम दिनांक १०/११/२०२५ रोज सोमवारला आयोजित करण्यात आले.',
            src: gptandaVideo3
        },
        {
            type: 'mp4',
            title: 'रंगरंगोटी पेंटिंग',
            desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान अंतर्गत ग्राम तांडा येथील अंगणवाडी क्रमांक-1 ,व अंगणवाडी क्रमांक 2, ला रंगरंगोटी पेंटिंग करण्यात आली.',
            src: gptandaVideo4
        },
        {
            type: 'mp4',
            title: 'सॅनिटरी पॅड वितरण',
            desc: 'मुख्यमंत्री समृद्ध पंचायत राज अभियान दरम्यान जि.प.वरिष्ठ प्राथमिक शाळेतील व खुशाल कापसे महाविद्यालयातील किशोर वयीन व १८ वर्ष पूर्ण मुलींना दर महिन्यात सॅनिटरी पॅड वितरण करून नाविन्यपूर्ण उपक्रम राबविण्यात आले.',
            src: gptandaVideo5
        },
        {
            type: 'mp4',
            title: 'मृत व्यक्तीच्या नावाने अभियान काळात वृक्ष लागवड',
            desc: 'मुख्यमंत्री समृद्ध पंचायत राज अभियान अंतर्गत स्मशानभूमी येथे मृत व्यक्तीच्या नावाने अभियान काळात वृक्ष लागवड करून नाविण्यपूर्ण उपक्रम राबविण्यात आले.',
            src: gptandaVideo6
        },
        {
            type: 'mp4',
            title: 'कन्या अनुदान भेट',
            desc: 'मुख्यमंत्री समृद्ध पंचायतराज अभियान  काळात नाविन्यपूर्ण उपक्रम म्हणून ०१/०४/२०२५ ते ३१/१२/२०२५ पर्यंत जन्मलेल्या मुलींना ग्राम पंचायत तांडा येथे दिनांक ३१/१२/२०२५ ला ग्रामपंचायत द्वारे कन्या अनुदान भेट म्हणून १,१०० रुपये अनुदान राशी देण्यात आले.',
            src: gptandaVideo7
        },
    ];

    const [activeTab, setActiveTab] = useState<GalleryTab>('photos');

    const [current, setCurrent] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const [videoCurrent, setVideoCurrent] = useState(0);
    const [videoModalOpen, setVideoModalOpen] = useState(false);

    // Prevent right-click and drag-save on images
    const preventImgActions = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

    const closeLightbox = () => setLightboxOpen(false);
    const closeVideoModal = () => setVideoModalOpen(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (lightboxOpen) closeLightbox();
                if (videoModalOpen) closeVideoModal();
            }
            if (activeTab === 'photos' && lightboxOpen) {
                if (e.key === 'ArrowLeft') prev();
                if (e.key === 'ArrowRight') next();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [activeTab, lightboxOpen, next, prev, videoModalOpen]);

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

                    <div className="gallery-tabs" role="tablist" aria-label="Gallery Tabs">
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
                            role="tab"
                            aria-selected={activeTab === 'photos'}
                            onClick={() => setActiveTab('photos')}
                        >
                            Photos
                        </button>
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
                            role="tab"
                            aria-selected={activeTab === 'videos'}
                            onClick={() => setActiveTab('videos')}
                        >
                            Videos
                        </button>
                    </div>

                    <div className="tab-panels">
                        <div className={`tab-panel ${activeTab === 'photos' ? 'active' : ''}`} role="tabpanel" aria-hidden={activeTab !== 'photos'}>
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
                                            loading="lazy"
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

                        <div className={`tab-panel ${activeTab === 'videos' ? 'active' : ''}`} role="tabpanel" aria-hidden={activeTab !== 'videos'}>
                            <div className="media-grid">
                                {videos.map((v, idx) => {
                                    const thumb = v.type === 'youtube' ? getYouTubeThumbUrl(v.url) : v.poster;
                                    return (
                                        <button
                                            key={idx}
                                            type="button"
                                            className="media-card"
                                            aria-label={`Open video ${v.title}`}
                                            onClick={() => {
                                                setVideoCurrent(idx);
                                                setVideoModalOpen(true);
                                            }}
                                        >
                                            <div className="media-thumb">
                                                {v.type === 'youtube' ? (
                                                    thumb ? (
                                                        <img src={thumb} alt={v.title} loading="lazy" draggable={false} />
                                                    ) : (
                                                        <div className="media-thumb-fallback" aria-hidden />
                                                    )
                                                ) : (
                                                    <video
                                                        src={v.src}
                                                        preload="metadata"
                                                        muted
                                                        playsInline
                                                    />
                                                )}
                                                <div className="media-play" aria-hidden>
                                                    ▶
                                                </div>
                                            </div>
                                            <div className="media-title">{v.title}</div>
                                            {v.desc && <div className="media-desc">{v.desc}</div>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
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
                            loading="lazy"
                            onContextMenu={preventImgActions}
                            onDragStart={preventImgActions}
                        />
                        <button className="nav nav-right" onClick={next} aria-label="Next">›</button>
                        <div className="lightbox-caption">{images[current].title}</div>
                    </div>
                </div>
            )}

            {videoModalOpen && (
                <div className="lightbox video-lightbox" role="dialog" aria-modal="true" onClick={closeVideoModal}>
                    <div className="lightbox-content video-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close" onClick={closeVideoModal} aria-label="Close">✕</button>
                        <div className="video-frame">
                            {(() => {
                                const v = videos[videoCurrent];
                                if (v.type === 'youtube') {
                                    const embedUrl = getYouTubeEmbedUrl(v.url);
                                    if (!embedUrl) return null;
                                    return (
                                        <iframe
                                            src={embedUrl}
                                            title={v.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    );
                                }
                                return (
                                    <video
                                        src={v.src}
                                        poster={v.poster}
                                        controls
                                        autoPlay
                                    />
                                );
                            })()}
                        </div>
                        <div className="lightbox-caption">
                            <div>{videos[videoCurrent].title}</div>
                            {videos[videoCurrent].desc && <div className="lightbox-desc">{videos[videoCurrent].desc}</div>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
