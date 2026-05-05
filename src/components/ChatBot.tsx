import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { FaComments, FaPaperPlane, FaTimes, FaUser, FaChevronRight } from 'react-icons/fa';
import MaitriAvatar from './SakhiAvatar';
import './ChatBot.scss';

type ChatMessage = {
  id: number;
  role: 'assistant' | 'user';
  text: string;
};

const QUICK_PROMPTS = [
  'कोणत्या सेवा उपलब्ध आहेत?',
  'योजनांची माहिती द्या',
  'कार्यालयाशी संपर्क कसा साधू?',
  'अहवाल कुठे पाहू शकतो?'
];

const SITE_LINKS = [
  { label: 'सेवा', hash: '#/services' },
  { label: 'योजना', hash: '#/schemes' },
  { label: 'अहवाल', hash: '#/ahwal' },
  { label: 'तक्रार / सूचना', hash: '#/feedback' },
  { label: 'संपर्क', hash: '#/contact' }
];

const PANCHAYAT_INFO = {
  sarpanch: {
    name: 'श्रीमती सौ. वर्षा दिपक पटले',
    title: 'सरपंच',
    phone: '+91-XXXXXXXXXX',
    email: 'sarpanch@gptandagondia.org.in'
  },
  upsarpanch: {
    name: 'श्री निलेश्वर तेजरामजी कारंजेकर',
    title: 'उपसरपंच',
    phone: '+91-XXXXXXXXXX',
    email: 'upsarpanch@gptandagondia.org.in'
  },
  gramsevak: {
    name: 'कु. साधना टेकचंद बिसेन',
    title: 'ग्रामपंचायत अधिकारी',
    phone: '+91-XXXXXXXXXX',
    email: 'gramsevak@gptandagondia.org.in'
  },
  office: {
    address: 'तांडा, पो. अदासी, ता. गोंदिया, जि. गोंदिया, महाराष्ट्र - 441601',
    phone: '+91 XXXXXXXXXX',
    email: 'tandagp@example.com / info@tandagp.gov.in',
    hours: 'सोमवार ते शनिवार, सकाळी 10 ते सायंकाळी 6'
  },
  village: {
    population: '2782',
    houses: '846',
    literacy: '85%',
    agriculture: '70%',
    school: 'ग्रामपंचायत अंतर्गत 1 ते 7 वी पर्यंत शाळा उपलब्ध आहे.',
    intro: 'तांडा हे गोंदिया जिल्ह्यातील गोंदिया तालुक्यातील प्रगतिशील गाव आहे. ग्रामपंचायत नागरिकांच्या सर्वांगीण विकासासाठी पायाभूत सुविधा, शिक्षण, आरोग्य, सामाजिक सुरक्षा आणि ग्रामीण विकास क्षेत्रात काम करते.'
  },
  services: [
    'रस्ते आणि वाहतूक सुविधा',
    'पाणीपुरवठा आणि जलनिकाय व्यवस्थापन',
    'आरोग्य शिबिर, लसीकरण आणि आरोग्य जनजागृती',
    'कल्याणकारी योजना',
    'घर बांधकाम / प्रधानमंत्री आवास योजना सहाय्य',
    'स्वच्छता अभियान आणि कचरा व्यवस्थापन',
    'दाखले व प्रमाणपत्रांसाठी मार्गदर्शन',
    'कर व शुल्क भरणा',
    'तक्रार नोंद व सूचना'
  ],
  projects: [
    'विहीर दुरुस्ती व पाणीपुरवठा सुधारणा',
    'ग्रामस्वच्छता उपक्रम',
    'रस्ता दुरुस्ती',
    'पायाभूत सुविधा, जलनिस्सारण, सार्वजनिक प्रकाश व्यवस्था आणि शाळा / अंगणवाडी सुधारणा'
  ],
  rti: {
    summary: 'माहिती अधिकार कायदा 2005 अंतर्गत नागरिक ग्रामपंचायत कार्यालयाकडून कागदपत्रे, नोंदी, अहवाल, निर्णय प्रक्रिया, विकासकामांचे अंदाजपत्रक, खर्च, लाभार्थी यादी आणि कर / शुल्क संदर्भातील माहिती मागू शकतात.',
    apply: 'RTI अर्ज साध्या कागदावर मराठी किंवा इंग्रजीत करता येतो. अर्जात अर्जदाराचे पूर्ण नाव, पत्ता, मागितलेल्या माहितीचा विषय व कालावधी, आणि संपर्क क्रमांक / ईमेल असल्यास लिहावे.',
    timeline: 'साधारणपणे अर्ज प्राप्त झाल्यानंतर 30 दिवसांच्या आत माहिती उपलब्ध करून देणे आवश्यक आहे.',
    fee: 'RTI अर्जासाठी शासनाने निर्धारित केलेले अर्ज शुल्क भरावे लागते. अतिरिक्त प्रतींसाठी प्रति पान शुल्क लागू शकते.'
  },
  members: [
    'श्रीमती सौ. वर्षा दिपक पटले - सरपंच',
    'श्री निलेश्वर तेजरामजी कारंजेकर - उपसरपंच',
    'कु. साधना टेकचंद बिसेन - ग्रामपंचायत अधिकारी',
    'श्री रामेश्वर नारायण भगत - सदस्य',
    'सौ. ज्योतीताई गौरीशंकर खांडेकर - सदस्या',
    'कु. त्रिवेणीताई सत्यवान कटरे - सदस्या',
    'श्री रमेश पुरणलाल उके - सदस्य',
    'सौ. लताताई अशोकसिंह पवार - सदस्या',
    'श्री जितेंद्र नारायण बिसेन - सदस्य',
    'सौ. अनिताताई सुभाष भलावी - सदस्या',
    'सौ. कलाबाई राजेश शेंडे - सदस्या'
  ]
};

const hasAny = (text: string, words: string[]) => words.some((word) => text.includes(word));

const isContactQuestion = (text: string) => hasAny(text, [
  'mobile', 'mob', 'phone', 'number', 'no.', 'no', 'contact', 'email', 'call',
  'मोबाइल', 'मोबाईल', 'फोन', 'नंबर', 'क्रमांक', 'संपर्क', 'ईमेल', 'कॉल'
]);

const getRoleContactReply = (role: typeof PANCHAYAT_INFO.sarpanch) => (
  `${role.title}: ${role.name}.\n` +
  `वैयक्तिक मोबाईल क्रमांक संकेतस्थळावर प्रकाशित केलेला नाही. ` +
  `${role.title} पृष्ठावर फोन ${role.phone} आणि ईमेल ${role.email} दिले आहे. ` +
  `अधिकृत क्रमांकासाठी संपर्क पृष्ठ किंवा ग्रामपंचायत कार्यालयाशी संपर्क साधा.`
);

const getLocalReply = (question: string) => {
  const text = question.toLowerCase();

  if (hasAny(text, ['your name', 'who are you', 'bot name', 'assistant name', 'तुझे नाव', 'तुमचे नाव', 'तुझं नाव', 'तू कोण', 'तुम्ही कोण'])) {
    return 'माझे नाव मैत्री आहे. मी तांडा ग्रामपंचायत संकेतस्थळावरील सेवा, योजना, अहवाल, संपर्क, नेतृत्व आणि तक्रार / सूचना यांची माहिती देण्यासाठी तयार केलेली AI नागरिक मदत सहाय्यक आहे.';
  }

  if (text.includes('upsarpanch') || text.includes('up sarpanch') || text.includes('उपसरपंच')) {
    if (isContactQuestion(text)) return getRoleContactReply(PANCHAYAT_INFO.upsarpanch);
    return `तांडा ग्रामपंचायतीचे उपसरपंच ${PANCHAYAT_INFO.upsarpanch.name} आहेत.`;
  }

  if (text.includes('sarpanch') || text.includes('sarpancha') || text.includes('सरपंच')) {
    if (isContactQuestion(text)) return getRoleContactReply(PANCHAYAT_INFO.sarpanch);
    return `तांडा ग्रामपंचायतीच्या सरपंच ${PANCHAYAT_INFO.sarpanch.name} आहेत.`;
  }

  if (text.includes('gramsevak') || text.includes('secretary') || text.includes('officer') || text.includes('ग्रामसेवक') || text.includes('ग्रामपंचायत अधिकारी') || text.includes('अधिकारी')) {
    if (isContactQuestion(text)) return getRoleContactReply(PANCHAYAT_INFO.gramsevak);
    return `तांडा ग्रामपंचायतीच्या ग्रामपंचायत अधिकारी ${PANCHAYAT_INFO.gramsevak.name} आहेत.`;
  }

  if (text.includes('member') || text.includes('members') || text.includes('सदस्य') || text.includes('सदस्या')) {
    return `तांडा ग्रामपंचायत कार्यकारिणी सदस्य:\n${PANCHAYAT_INFO.members.join('\n')}`;
  }

  if (hasAny(text, ['population', 'लोकसंख्या', 'people', 'village info', 'गावाची माहिती', 'गाव माहिती', 'घर', 'houses', 'साक्षरता', 'literacy', 'school', 'शाळा'])) {
    return `तांडा ग्रामपंचायत संक्षिप्त माहिती:\nलोकसंख्या: ${PANCHAYAT_INFO.village.population}\nघरे: ${PANCHAYAT_INFO.village.houses}\nसाक्षरता दर: ${PANCHAYAT_INFO.village.literacy}\nकृषी व्यवसाय: ${PANCHAYAT_INFO.village.agriculture}\nशाळा: ${PANCHAYAT_INFO.village.school}\n${PANCHAYAT_INFO.village.intro}`;
  }

  if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('office') || text.includes('संपर्क') || text.includes('फोन') || text.includes('कार्यालय')) {
    return `ग्रामपंचायत कार्यालय संपर्क माहिती:\nपत्ता: ${PANCHAYAT_INFO.office.address}\nफोन: ${PANCHAYAT_INFO.office.phone}\nईमेल: ${PANCHAYAT_INFO.office.email}\nकार्यालय वेळ: ${PANCHAYAT_INFO.office.hours}`;
  }

  if (text.includes('scheme') || text.includes('yojana') || text.includes('fund') || text.includes('budget') || text.includes('योजना') || text.includes('निधी') || text.includes('फंड') || text.includes('खर्च')) {
    return 'योजना पृष्ठावर केंद्र व राज्य शासनाच्या योजना दिल्या आहेत. त्यात मनरेगा, स्वच्छ भारत मिशन, 15 वा वित्त आयोग, जल जीवन मिशन, जन सुरक्षा योजना, स्व निधी, सामान्य फंड आणि ग्रामीण पाणीपुरवठा निधी यांची माहिती आहे.';
  }

  if (text.includes('service') || text.includes('certificate') || text.includes('water') || text.includes('health') || text.includes('सेवा') || text.includes('दाखला') || text.includes('पाणी') || text.includes('आरोग्य')) {
    if (hasAny(text, ['certificate', 'दाखला', 'प्रमाणपत्र'])) {
      return 'दाखले व प्रमाणपत्रांसाठी ग्रामपंचायत कार्यालयात आवश्यक कागदपत्रांसह संपर्क साधा. संकेतस्थळावर जन्म-मृत्यू दाखले, रहिवासी दाखला, उत्पन्न प्रमाणपत्रासाठी शिफारस, नातेदाखला इत्यादी संदर्भातील मार्गदर्शनाचा उल्लेख आहे.';
    }
    if (hasAny(text, ['water', 'पाणी', 'नळ', 'जल'])) {
      return 'पाणीपुरवठा सेवेमध्ये स्वच्छ पाण्याची पुरवठा व्यवस्था, जलनिकाय व्यवस्थापन, विहीर दुरुस्ती, नळयोजना सुधारणा आणि पाणी संरक्षण यांचा समावेश आहे.';
    }
    if (hasAny(text, ['health', 'आरोग्य', 'लसीकरण', 'शिबिर'])) {
      return 'आरोग्य सेवेमध्ये आरोग्य शिबिर, लसीकरण आणि आरोग्य जनजागृती कार्यक्रमांचा समावेश आहे.';
    }
    return `तांडा ग्रामपंचायत सेवा:\n${PANCHAYAT_INFO.services.join('\n')}`;
  }

  if (hasAny(text, ['project', 'projects', 'प्रकल्प', 'कामे', 'development', 'विकास', 'road', 'रस्ता', 'स्वच्छता'])) {
    return `ग्रामविकास प्रकल्प:\n${PANCHAYAT_INFO.projects.join('\n')}\nनागरिक सूचना, तक्रारी किंवा नवीन प्रकल्पांचे प्रस्ताव ग्रामसभेत किंवा ग्रामपंचायत कार्यालयात लेखी स्वरूपात देऊ शकतात.`;
  }

  if (hasAny(text, ['rti', 'right to information', 'माहिती अधिकार', 'माहितीचा अधिकार'])) {
    return `माहिती अधिकार (RTI):\n${PANCHAYAT_INFO.rti.summary}\nअर्ज कसा करावा: ${PANCHAYAT_INFO.rti.apply}\nकालावधी: ${PANCHAYAT_INFO.rti.timeline}\nशुल्क: ${PANCHAYAT_INFO.rti.fee}`;
  }

  if (hasAny(text, ['tax', 'कर', 'घरपट्टी', 'पाणीपट्टी', 'शुल्क'])) {
    return 'कर व शुल्क भरण्यासाठी ग्रामपंचायत कार्यालयात संपर्क साधा. संकेतस्थळावर घरपट्टी, पाणीपट्टी, प्रकाशकर इत्यादी कर वेळेत भरण्यासाठी काउंटर सुविधा आणि हप्त्याने रक्कम भरण्याबाबत माहिती दिली आहे.';
  }

  if (text.includes('report') || text.includes('ahwal') || text.includes('download') || text.includes('अहवाल') || text.includes('डाउनलोड') || text.includes('पाहा')) {
    return 'अहवाल पृष्ठावर सर्व अहवाल चित्ररूपात उपलब्ध आहेत. प्रत्येक अहवालासाठी View आणि Download पर्याय दिले आहेत.';
  }

  if (text.includes('complaint') || text.includes('feedback') || text.includes('suggestion') || text.includes('तक्रार') || text.includes('सूचना') || text.includes('अभिप्राय')) {
    return 'तक्रार किंवा सूचना देण्यासाठी तक्रार / सूचना पृष्ठ उघडा. नाव, संपर्क क्रमांक, वॉर्ड किंवा परिसर आणि समस्येचे स्पष्ट वर्णन दिल्यास कार्यालयाला तपासणी करणे सोपे जाईल.';
  }

  if (text.includes('leader') || text.includes('sarpanch') || text.includes('member') || text.includes('नेतृत्व') || text.includes('सरपंच') || text.includes('सदस्य')) {
    return 'नेतृत्व मेनूमध्ये सरपंच, उपसरपंच, ग्रामपंचायत अधिकारी, अध्यक्ष आणि सदस्यांची माहिती पाहता येईल.';
  }

  return 'मी या संकेतस्थळावर सेवा, योजना, अहवाल, संपर्क, तक्रार / सूचना, नेतृत्व आणि गावाची माहिती शोधण्यात मदत करू शकतो. कृपया छोटा प्रश्न विचारा, जसे "पाणी सेवा", "योजना" किंवा "कार्यालय संपर्क".';
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      text: 'नमस्कार. मी मैत्री आहे. तांडा ग्रामपंचायत सेवा, योजना, अहवाल, संपर्क आणि तक्रार / सूचना यांची माहिती शोधण्यात मी मदत करते.'
    }
  ]);
  const nextId = useRef(2);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const recentMessages = useMemo(
    () => messages.slice(-8).map(({ role, text }) => ({ role, text })),
    [messages]
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading, isOpen]);

  const goTo = (hash: string) => {
    window.location.hash = hash;
    setIsOpen(false);
  };

  const submitQuestion = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { id: nextId.current++, role: 'user', text: trimmed };
    setMessages((current) => [...current, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history: recentMessages })
      });

      if (!response.ok) {
        throw new Error('Chat request failed');
      }

      const data = await response.json();
      const reply = typeof data.reply === 'string' && data.reply.trim()
        ? data.reply
        : getLocalReply(trimmed);

      setMessages((current) => [
        ...current,
        { id: nextId.current++, role: 'assistant', text: reply }
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { id: nextId.current++, role: 'assistant', text: getLocalReply(trimmed) }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitQuestion(input);
  };

  return (
    <div className={`chatbot ${isOpen ? 'chatbot-open' : ''}`}>
      {isOpen && (
        <section className="chatbot-panel" aria-label="मैत्री AI सहाय्यक">
          <header className="chatbot-header">
            <div className="chatbot-title">
              <span className="chatbot-avatar" aria-hidden="true"><MaitriAvatar /></span>
              <div>
                <h2>मैत्री</h2>
                <p>तांडा ग्रामपंचायत AI सहाय्यक</p>
              </div>
            </div>
            <button type="button" className="chatbot-icon-button" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <FaTimes />
            </button>
          </header>

          <div className="chatbot-messages" role="log" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`chatbot-message ${message.role}`}>
                <span className="message-icon" aria-hidden="true">
                  {message.role === 'assistant' ? <MaitriAvatar /> : <FaUser />}
                </span>
                <p>{message.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message assistant">
                <span className="message-icon" aria-hidden="true"><MaitriAvatar /></span>
                <p className="typing-text" aria-label="उत्तर तयार करत आहे">
                  <span />
                  <span />
                  <span />
                </p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-quick-actions" aria-label="सुचवलेले प्रश्न">
            {QUICK_PROMPTS.map((prompt) => (
              <button key={prompt} type="button" onClick={() => submitQuestion(prompt)} disabled={isLoading}>
                {prompt}
              </button>
            ))}
          </div>

          <div className="chatbot-links" aria-label="द्रुत लिंक">
            {SITE_LINKS.map((link) => (
              <button key={link.hash} type="button" onClick={() => goTo(link.hash)}>
                <span>{link.label}</span>
                <FaChevronRight aria-hidden="true" />
              </button>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <label htmlFor="chatbot-input" className="sr-only">AI सहाय्यकाला प्रश्न विचारा</label>
            <input
              id="chatbot-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="सेवा, योजना, अहवाल याबद्दल विचारा..."
              autoComplete="off"
            />
            <button type="submit" disabled={!input.trim() || isLoading} aria-label="संदेश पाठवा">
              <FaPaperPlane />
            </button>
          </form>
        </section>
      )}

      <button type="button" className="chatbot-toggle" onClick={() => setIsOpen((current) => !current)} aria-label="मैत्री AI सहाय्यक उघडा">
        {!isOpen && <span className="chatbot-hi" aria-hidden="true">नमस्कार</span>}
        <FaComments />
        <span>मैत्री AI</span>
      </button>
    </div>
  );
};

export default ChatBot;
