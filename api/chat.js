const SITE_CONTEXT = `
You are the AI help desk for Gram Panchayat Tanda, Gondia, Maharashtra.
Your public name is "सखी".
Always answer in simple, respectful Marathi unless the visitor clearly asks for another language.
Help visitors find information on the website. Keep answers short, practical, and friendly.
Relevant pages:
- Home: village introduction, latest updates, gallery highlights, executive committee.
- Services: Gram Panchayat services and public service information.
- Schemes: central and state schemes, annual income and expense summary, service notes.
- Ahwal: report gallery with view and download actions.
- Projects: village development projects.
- Feedback: complaints and suggestions.
- Contact: office contact and location information.
- Leadership: Sarpanch, Upsarpanch, Gram Panchayat officer, president, and members.
Important known details:
- Location: Tanda, Taluka Gondia, District Gondia, Maharashtra.
- Office hours shown on site: Monday to Saturday, 10 AM to 6 PM.
- Current Sarpanch name: श्रीमती सौ. वर्षा दिपक पटले.
- Sarpanch contact page phone placeholder: +91-XXXXXXXXXX. Sarpanch email: sarpanch@gptandagondia.org.in. Do not invent a real mobile number.
- Current Upsarpanch name: श्री निलेश्वर तेजरामजी कारंजेकर.
- Upsarpanch contact page phone placeholder: +91-XXXXXXXXXX. Upsarpanch email: upsarpanch@gptandagondia.org.in. Do not invent a real mobile number.
- Current Gram Panchayat officer name: कु. साधना टेकचंद बिसेन.
- Gram Panchayat officer contact page phone placeholder: +91-XXXXXXXXXX. Email: gramsevak@gptandagondia.org.in. Do not invent a real mobile number.
- Gram Panchayat members: श्री रामेश्वर नारायण भगत, सौ. ज्योतीताई गौरीशंकर खांडेकर, कु. त्रिवेणीताई सत्यवान कटरे, श्री रमेश पुरणलाल उके, सौ. लताताई अशोकसिंह पवार, श्री जितेंद्र नारायण बिसेन, सौ. अनिताताई सुभाष भलावी, सौ. कलाबाई राजेश शेंडे.
- Schemes mentioned include MGNREGA, Swachh Bharat Mission, 15th Finance Commission, Jal Jeevan Mission, Jan Suraksha Yojana, self fund, general fund, and rural water supply fund.
- Services mentioned include online Gram Panchayat certificates, education information, dispute resolution committee, health camp updates, and drinking water supply work.
- Village overview: population 2782, houses 846, literacy rate 85%, agriculture occupation 70%, school available from class 1 to 7.
- Development projects include well repair and water supply improvement, village cleanliness initiative, road repair, drainage, public lighting, school and anganwadi improvements.
- RTI: citizens can request Gram Panchayat records, meeting resolutions, development work estimates and expenses, beneficiary lists, tax and fee rules. RTI response period is generally 30 days.
If a user asks for official records, tell them to contact the Gram Panchayat office or use the relevant website page.
Important: "upsarpanch" or "उपसरपंच" means Vice Sarpanch, not Sarpanch.
`;

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

const hasAny = (text, words) => words.some((word) => text.includes(word));

const isContactQuestion = (text) => hasAny(text, [
  'mobile', 'mob', 'phone', 'number', 'no.', 'no', 'contact', 'email', 'call',
  'मोबाइल', 'मोबाईल', 'फोन', 'नंबर', 'क्रमांक', 'संपर्क', 'ईमेल', 'कॉल'
]);

const getRoleContactReply = (role) => (
  `${role.title}: ${role.name}.\n` +
  `वैयक्तिक मोबाईल क्रमांक संकेतस्थळावर प्रकाशित केलेला नाही. ` +
  `${role.title} पृष्ठावर फोन ${role.phone} आणि ईमेल ${role.email} दिले आहे. ` +
  `अधिकृत क्रमांकासाठी संपर्क पृष्ठ किंवा ग्रामपंचायत कार्यालयाशी संपर्क साधा.`
);

const fallbackReply = (message) => {
  const text = String(message || '').toLowerCase();

  if (hasAny(text, ['your name', 'who are you', 'bot name', 'assistant name', 'तुझे नाव', 'तुमचे नाव', 'तुझं नाव', 'तू कोण', 'तुम्ही कोण'])) {
    return 'माझे नाव सखी आहे. मी तांडा ग्रामपंचायत संकेतस्थळावरील सेवा, योजना, अहवाल, संपर्क, नेतृत्व आणि तक्रार / सूचना यांची माहिती देण्यासाठी तयार केलेली AI नागरिक मदत सहाय्यक आहे.';
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
    return 'अहवाल पाहण्यासाठी अहवाल पृष्ठ उघडा. प्रत्येक अहवाल कार्डवर View आणि Download पर्याय उपलब्ध आहेत.';
  }

  if (text.includes('complaint') || text.includes('feedback') || text.includes('suggestion') || text.includes('तक्रार') || text.includes('सूचना') || text.includes('अभिप्राय')) {
    return 'तक्रार किंवा सूचना देण्यासाठी तक्रार / सूचना पृष्ठ वापरा. आपले नाव, संपर्क क्रमांक, परिसर आणि समस्येचे स्पष्ट वर्णन लिहिल्यास कार्यालयाला तपासणी करणे सोपे जाईल.';
  }

  if (text.includes('leader') || text.includes('sarpanch') || text.includes('member') || text.includes('नेतृत्व') || text.includes('सरपंच') || text.includes('सदस्य')) {
    return 'नेतृत्व मेनूमध्ये सरपंच, उपसरपंच, ग्रामपंचायत अधिकारी, अध्यक्ष आणि सदस्यांची माहिती पाहता येईल.';
  }

  return 'नमस्कार. मी सखी आहे. या संकेतस्थळावर सेवा, योजना, अहवाल, संपर्क, तक्रार / सूचना, नेतृत्व आणि गावाची माहिती शोधण्यात मी मदत करू शकते.';
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history = [] } = req.body || {};
  const cleanMessage = typeof message === 'string' ? message.trim().slice(0, 800) : '';

  if (!cleanMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const lowerMessage = cleanMessage.toLowerCase();
  const isKnownWebsiteQuestion = hasAny(lowerMessage, [
    'your name', 'who are you', 'bot name', 'assistant name',
    'sarpanch', 'sarpancha', 'upsarpanch', 'up sarpanch', 'gramsevak', 'secretary', 'officer',
    'member', 'members', 'contact', 'phone', 'mobile', 'number', 'email', 'office',
    'scheme', 'yojana', 'fund', 'budget', 'service', 'certificate', 'water', 'health',
    'report', 'ahwal', 'download', 'complaint', 'feedback', 'suggestion', 'leader',
    'population', 'people', 'village info', 'houses', 'literacy', 'school',
    'project', 'projects', 'development', 'road', 'rti', 'right to information', 'tax',
    'तुझे नाव', 'तुमचे नाव', 'तुझं नाव', 'तू कोण', 'तुम्ही कोण',
    'सरपंच', 'उपसरपंच', 'ग्रामसेवक', 'ग्रामपंचायत अधिकारी', 'अधिकारी', 'सदस्य',
    'संपर्क', 'फोन', 'मोबाईल', 'मोबाइल', 'नंबर', 'क्रमांक', 'ईमेल', 'कार्यालय',
    'योजना', 'निधी', 'फंड', 'खर्च', 'सेवा', 'दाखला', 'पाणी', 'आरोग्य',
    'अहवाल', 'डाउनलोड', 'तक्रार', 'सूचना', 'अभिप्राय', 'नेतृत्व'
    , 'लोकसंख्या', 'गावाची माहिती', 'गाव माहिती', 'घर', 'साक्षरता', 'शाळा',
    'प्रकल्प', 'कामे', 'विकास', 'रस्ता', 'स्वच्छता', 'माहिती अधिकार', 'माहितीचा अधिकार',
    'कर', 'घरपट्टी', 'पाणीपट्टी', 'शुल्क'
  ]);

  if (isKnownWebsiteQuestion) {
    return res.status(200).json({ reply: fallbackReply(cleanMessage), mode: 'site' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json({ reply: fallbackReply(cleanMessage), mode: 'fallback' });
  }

  const safeHistory = Array.isArray(history)
    ? history.slice(-8).map((item) => ({
        role: item && item.role === 'user' ? 'user' : 'assistant',
        content: String(item && item.text ? item.text : '').slice(0, 700)
      })).filter((item) => item.content)
    : [];

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5.4-mini',
        instructions: SITE_CONTEXT,
        input: [
          ...safeHistory,
          { role: 'user', content: cleanMessage }
        ],
        max_output_tokens: 350
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI chat error:', errorText);
      return res.status(200).json({ reply: fallbackReply(cleanMessage), mode: 'fallback' });
    }

    const data = await response.json();
    const reply = data.output_text ||
      (Array.isArray(data.output)
        ? data.output.flatMap((item) => item.content || []).map((part) => part.text || '').join(' ').trim()
        : '');

    return res.status(200).json({
      reply: reply || fallbackReply(cleanMessage),
      mode: reply ? 'ai' : 'fallback'
    });
  } catch (error) {
    console.error('Chat handler error:', error);
    return res.status(200).json({ reply: fallbackReply(cleanMessage), mode: 'fallback' });
  }
};
