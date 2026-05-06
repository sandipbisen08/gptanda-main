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
import gptandaVideo2 from '../videos/gptanda2.mp4';
import gptandaVideo3 from '../videos/gptanda3.mp4';
import gptandaVideo4 from '../videos/gptanda4.mp4';
import gptandaVideo5 from '../videos/gptanda5.mp4';
import gptandaVideo6 from '../videos/gptanda6.mp4';
import gptandaVideo7 from '../videos/gptanda7.mp4';
import gptandaVideo8 from '../videos/gptanda8.mp4';
import gptandaVideo9 from '../videos/gptanda9.mp4';
import gptandaVideo10 from '../videos/gptanda10.mp4';
import gptandaVideo11 from '../videos/gptanda11.mp4';
import gptandaVideo12 from '../videos/gptanda12.mp4';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';
import p8 from '../images/p8.png';
import p9 from '../images/p9.png';
import p10 from '../images/p10.png';
import p11 from '../images/p11.png';
import p12 from '../images/p12.png';
import p13 from '../images/p13.png';
import p14 from '../images/p14.png';
import p15 from '../images/p15.png';
import p16 from '../images/p16.png';
import p17 from '../images/p17.png';
import p18 from '../images/p18.png';
import p19 from '../images/p19.png';
import p20 from '../images/p20.png';
import p21 from '../images/p21.png';
import p22 from '../images/p22.png';
import p23 from '../images/p23.png';
import p24 from '../images/p24.png';
import p25 from '../images/p25.png';
import p26 from '../images/p26.png';
import p27 from '../images/p27.png';
import p28 from '../images/p28.png';
import p29 from '../images/p29.png';
import p30 from '../images/p30.png';
import p31 from '../images/p31.png';
import p32 from '../images/p32.png';
import p33 from '../images/p33.png';
import p34 from '../images/p34.png';
import p35 from '../images/p35.png';
import p36 from '../images/p36.png';
import p37 from '../images/p37.png';
import p38 from '../images/p38.png';
import p39 from '../images/p39.png';
import p40 from '../images/p40.png';
import p41 from '../images/p41.png';
import p42 from '../images/p42.png';
import p43 from '../images/p43.png';
import p44 from '../images/p44.png';
import p45 from '../images/p45.png';
import p46 from '../images/p46.png';
import p47 from '../images/p47.png';
import p48 from '../images/p48.png';
import p49 from '../images/p49.png';
import p50 from '../images/p50.png';
import p51 from '../images/p51.png';
import p52 from '../images/p52.png';
import p53 from '../images/p53.png';
import p54 from '../images/p54.png';
import p55 from '../images/p55.png';
import p56 from '../images/p56.png';
import p57 from '../images/p57.png';
import p58 from '../images/p58.png';
import p59 from '../images/p59.png';
import p60 from '../images/p60.png';
import p61 from '../images/p61.png';
import p62 from '../images/p62.png';
import p63 from '../images/p63.png';
import p64 from '../images/p64.png';
import p65 from '../images/p65.png';
import p66 from '../images/p66.png';
import p67 from '../images/p67.png';
import p68 from '../images/p68.png';
import p69 from '../images/p69.png';
import p70 from '../images/p70.png';

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
        { src: jan2926, title: 'चित्र 24', desc: 'मुख्यमंत्री समृद्ध पंचायत राज अभियांना दरम्यान ग्रामपंचायत तांडा येथे दिनांक  २९/०१/२०२६ रोजी मा.श्री.जे.आR.देवरे सर (गटविकास अधिकारी पं.स.गोंदिया)मा. श्री एस.एस.निमजे सर ( विस्तार अधिकारी पं.स.गोंदिया), मा.श्री.चिंधालोरे सर ( विस्तार अधिकारी पं.स.गोंदिया) कृषी विस्तार अधिकारी पटले सर , जाधव सर यांनी भेट देऊन मुख्यमंत्री समृद्ध पंचायत राज अभियान योजने बाबद मार्गदर्शन करून पाहणी केली व ०१ ते ३३ नमुने रेकॉर्ड अद्यावत बाबद मार्गदर्शन केले.' },
        { src: jan3026, title: 'चित्र 25', desc: 'भेट दरम्यान ग्राम पंचायतचे मा.सौ वर्षाताई पटले (सरपंच ) कु.एस.टी.बिसेन ग्रा.पं. अधिकारी, सौरभी कमलेश बांते, अपूर्वा इंद्रेदीवार, श्री.रजat मटकुरे, नलिनी पाटील श्री. सुमित प्रदिते सर्व ग्रा.पं.अधिकारी श्री. रामेश्वर जी भगत (सदस्य) अंगणवाडी सेविका , ग्राम पंचायत कर्मचारी, रोजगार सेवक उपस्थित होते.' },
        { src: p1, title: 'चित्र 26' },
        { src: p2, title: 'चित्र 27' },
        { src: p3, title: 'चित्र 28' },
        { src: p4, title: 'चित्र 29' },
        { src: p5, title: 'चित्र 30' },
        { src: p6, title: 'चित्र 31' },
        { src: p7, title: 'चित्र 32' },
        { src: p8, title: 'चित्र 33' },
        { src: p9, title: 'चित्र 34' },
        { src: p10, title: 'चित्र 35' },
        { src: p11, title: 'चित्र 36' },
        { src: p12, title: 'चित्र 37' },
        { src: p13, title: 'चित्र 38' },
        { src: p14, title: 'चित्र 39' },
        { src: p15, title: 'चित्र 40' },
        { src: p16, title: 'चित्र 41' },
        { src: p17, title: 'चित्र 42' },
        { src: p18, title: 'चित्र 43' },
        { src: p19, title: 'चित्र 44' },
        { src: p20, title: 'चित्र 45' },
        { src: p21, title: 'चित्र 46' },
        { src: p22, title: 'चित्र 47' },
        { src: p23, title: 'चित्र 48' },
        { src: p24, title: 'चित्र 49' },
        { src: p25, title: 'चित्र 50' },
        { src: p26, title: 'चित्र 51' },
        { src: p27, title: 'चित्र 52' },
        { src: p28, title: 'चित्र 53' },
        { src: p29, title: 'चित्र 54' },
        { src: p30, title: 'चित्र 55' },
        { src: p31, title: 'चित्र 56' },
        { src: p32, title: 'चित्र 57' },
        { src: p33, title: 'चित्र 58' },
        { src: p34, title: 'चित्र 59' },
        { src: p35, title: 'चित्र 60' },
        { src: p36, title: 'चित्र 61' },
        { src: p37, title: 'चित्र 62' },
        { src: p38, title: 'चित्र 63' },
        { src: p39, title: 'चित्र 64' },
        { src: p40, title: 'चित्र 65' },
        { src: p41, title: 'चित्र 66' },
        { src: p42, title: 'चित्र 67' },
        { src: p43, title: 'चित्र 68' },
        { src: p44, title: 'चित्र 69' },
        { src: p45, title: 'चित्र 70' },
        { src: p46, title: 'चित्र 71' },
        { src: p47, title: 'चित्र 72' },
        { src: p48, title: 'चित्र 73' },
        { src: p49, title: 'चित्र 74' },
        { src: p50, title: 'चित्र 75' },
        { src: p51, title: 'चित्र 76' },
        { src: p52, title: 'चित्र 77' },
        { src: p53, title: 'चित्र 78' },
        { src: p54, title: 'चित्र 79' },
        { src: p55, title: 'चित्र 80' },
        { src: p56, title: 'चित्र 81' },
        { src: p57, title: 'चित्र 82' },
        { src: p58, title: 'चित्र 83' },
        { src: p59, title: 'चित्र 84' },
        { src: p60, title: 'चित्र 85' },
        { src: p61, title: 'चित्र 86' },
        { src: p62, title: 'चित्र 87' },
        { src: p63, title: 'चित्र 88' },
        { src: p64, title: 'चित्र 89' },
        { src: p65, title: 'चित्र 90' },
        { src: p66, title: 'चित्र 91' },
        { src: p67, title: 'चित्र 92' },
        { src: p68, title: 'चित्र 93' },
        { src: p69, title: 'चित्र 94' },
        { src: p70, title: 'चित्र 95' }

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
        {
            type: 'mp4',
            title: 'अनौपचारिक शिक्षण दिले जात आहे.',
            desc: 'अनौपचारिक शिक्षण दिले जात आहे. टांडा-१ च्या मुलांना शिक्षण दिले जात आहे. टांडा-१ च्या अंगणवाडी सेविका व मदतनीस कार्यरत आहेत.',
            src: gptandaVideo8
        },
        {
            type: 'mp4',
            title: 'परशबाग पुरविण्यात आली',
            desc: 'अंगणवाडी केंद्र तांडा १ सेविका सौ.मिनाक्षी एस.रहागडालेअंगणवाडी केंद्र २ सेविका सौ.दिक्षा.आर.खांडेकर.मदतनीस हष्षिला अंबादे मदतनीस भुमिका पटले.यांच्या परिश्रमाने परशबाग पुरविण्यात आली आहे.संपूर्ण गा्मपंचायत तांडा यांचेमार्फत परशबाग तयार करून दिल्या बद्दल  धन्यवाद.',
            src: gptandaVideo9
        },
        {
            type: 'mp4',
            title: 'मुलांना अनौपचारिक शिक्षण.',
            desc: 'आज दि.४/१२/२०२५ ला . अंगनवाडी केंद्र तांडा २ . मुलांना अनौपचारिक शिक्षणच्या माध्यमातून मुलांची आई बनून त्यांच्याशी गमतीचे खेड खेळून त्यांना आनंवनभुवनाचे मार्ग मोकळा करून दिली.',
            src: gptandaVideo10
        },
        {
            type: 'mp4',
            title: 'अन्नपाशन कार्यक्रम',
            desc: 'आज दि.७/२/२०२६ ला अंगणवाडी केंद्र तांडा अंतर्गत अंगणवाडी मध्ये.अन्नपाशन कार्यक्रम आयोजित करण्यात आले.त्यातसौ.वर्षा ताई दिपक जी पटले.सरपंच तांडा अंगणवाडी सेविका.मदतनिस उपस्थित होते.६ महिणे पूर्ण बालकांना वाटी चमचा दिलेगरोदर मातांना सेफ.अनार.पोषटिक आहारात दूध खारीक अंडी खाण्यास मार्गदर्शन केले.🙏🏻💐',
            src: gptandaVideo11
        },
        {
            type: 'mp4',
            title: 'मुलांना अनौपचारिक शिक्षण.',
            desc: 'आज दि.४/१२/२०२५ ला . अंगनवाडी केंद्र तांडा २ . मुलांना अनौपचारिक शिक्षणच्या माध्यमातून मुलांची आई बनून त्यांच्याशी गमतीचे खेड खेळून त्यांना आनंवनभुवनाचे मार्ग मोकळा करून दिली.',
            src: gptandaVideo12
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
