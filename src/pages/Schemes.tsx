import React from 'react';
import { Link } from 'react-router-dom';
import './Schemes.scss';

const Schemes: React.FC = () => {
  return (
    <div className="schemes">
      <section className="page-hero">
        <div className="container">
          <h1>आमच्या योजना</h1>
          <p className="subtitle">तांडा ग्रामपंचायत द्वारा प्रदान केलेल्या योजना</p>
        </div>
      </section>

      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>योजना</span>
          </nav>
        </div>
      </div>

      <section className="container">
        <h2 className="section-title">सन २०२५-२०२६चा वार्षिक जमा खर्च गोषवारा</h2>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>४९५</td>
                <td></td>
                <td>११०००</td>
              </tr>
              <tr>
                <td>वाटर ट्रक्टरकिराया</td>
                <td>३१००</td>
                <td>निर्जतुकीकरण</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>वाटर कॅन किराया</td>
                <td>६८३०</td>
                <td>कार्यालयीन खर्च</td>
                <td>1572</td>
              </tr>
              <tr>
                <td>वाटर ए टी एम मशीन</td>
                <td>१८८९०</td>
                <td>पाणीपुरवठा विद्युत बिल</td>
                <td>1570</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>पाणीपुरवठा साहित्य खरेदी</td>
                <td>2080</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>पाणीपुरवठा कर्मचारी पगार</td>
                <td>67208</td>
              </tr>
              <tr>
                <td>एकून जमा</td>
                <td>134066.७२</td>
                <td>एकूण खर्च</td>
                <td>१२७८७३.७२</td>
              </tr>
              <tr>
                <td>सु.शि.</td>
                <td>50595.०४</td>
                <td>अ.शि.</td>
                <td>50९८८.०४</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>१८४६६१.७६</td>
                <td>एकूण</td>
                <td>१७८८६१.७६</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">सामान्य निधी</h2>
        <p className="section-subtitle">सन २०२५-२०२६ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>घरकर</td>
                <td>११४७२७</td>
                <td>नौकर पगार</td>
                <td>८५२६१.००</td>
              </tr>
              <tr>
                <td>आरोग्य कर</td>
                <td>६२५५</td>
                <td>कार्यालयीन</td>
                <td>२२९३४.००</td>
              </tr>
              <tr>
                <td>दिवाबत्ती कर</td>
                <td>३९९६</td>
                <td>संगणक दुरुस्ती</td>
                <td>१४४९५.००</td>
              </tr>
              <tr>
                <td>व्याज</td>
                <td>९५५</td>
                <td>वृक्ष लागवट</td>
                <td>११००.००</td>
              </tr>
              <tr>
                <td>जमीन मह्शुल अनुदान</td>
                <td>२९१६४</td>
                <td>नाली विहीर सापसफाई १५%</td>
                <td>१२८००.००</td>
              </tr>
              <tr>
                <td>गौण खनिज अनुदान</td>
                <td>१४३०००</td>
                <td>साफसफाई रस्ता दुरुस्ती</td>
                <td>४०००.००</td>
              </tr>
              <tr>
                <td>सरपंच मानधन अनुदान</td>
                <td>७२००</td>
                <td>जि,प शाळा दुरुस्ती</td>
                <td>१६७९२०.००</td>
              </tr>
              <tr>
                <td>ग्रा, प कर्मचारी अनुदान</td>
                <td>३५७००</td>
                <td>विधूत बिल</td>
                <td>५३००.००</td>
              </tr>
              <tr>
                <td>जि, प शाळा दुरुस्ती अनुदान</td>
                <td>१६८१००</td>
                <td>गटारे सफाई</td>
                <td>८०००.००</td>
              </tr>
              <tr>
                <td>व्यापार संकुलन भाडे</td>
                <td>५४००</td>
                <td>नळ पा.पु.योजना मजुरी</td>
                <td>३०००.००</td>
              </tr>
              <tr>
                <td>न.वटलेले पासबुकनुसार किकोळजमा अनु</td>
                <td>८४९९</td>
                <td>दिवाबत्ती</td>
                <td>८६५.००</td>
              </tr>
              <tr>
                <td>अनुदान</td>
                <td>४५५०</td>
                <td>ग्रा,प उसनवार परत</td>
                <td>१६०००.००</td>
              </tr>
              <tr>
                <td>बाजार फी</td>
                <td>२४८०</td>
                <td>जाहिरात खर्च</td>
                <td>८८२०.००</td>
              </tr>
              <tr>
                <td>दाखला फी</td>
                <td>२९४०</td>
                <td>सार्व ई.सु ठेवणे पेंटिंग</td>
                <td>५६६०.००</td>
              </tr>
              <tr>
                <td>----</td>
                <td></td>
                <td>३ % अपंग कल्याण</td>
                <td>३६००.००</td>
              </tr>
              <tr>
                <td></td>
                <td>------</td>
                <td>ई नि ई निविदा अनामत रक्कम परत</td>
                <td>२०००.००</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>जिल्हा ग्राम निधी</td>
                <td>७१०.००</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>हातपंप दुरुस्ती</td>
                <td>३४००.००</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>१०%महिला बालकल्याण</td>
                <td>१०१९०.००</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>ई ई टेंडरिंग डीजीटल स्वाक्षरी</td>
                <td>५०००.००</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>स्वच्छता व प्रसार प्रसिद्धी</td>
                <td>२०००.००</td>
              </tr>
              <tr>
                <td>एकूण जमा</td>
                <td>४०४२६६</td>
                <td>एकूण खर्च</td>
                <td>३८३०५४</td>
              </tr>
              <tr>
                <td>सु.शि</td>
                <td>२९१८७</td>
                <td>अ.शि</td>
                <td>५०३९९</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>४३३४५३</td>
                <td>एकूण</td>
                <td>४३३४५३</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">दलीतवस्ती सुधार योजना</h2>
        <p className="section-subtitle">सन २०२५-२०२६ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>सिमेंट क्रांकेट नाली बांधकाम मुदरुका खांडेकर ते दिगंबर बन्सोड च्या घरापर्यंत अनुदान जमा</td>
                <td>४९४१७</td>
                <td>सिमेंट क्रांकेट नाली बांधकाम सुनील राउत ते अनमोल डांहटकर च्या घरापर्यंत</td>
                <td>३२९०४९</td>
              </tr>
              <tr>
                <td>सिमेंट क्रांकेट नाली बांधकाम सुनील राउत ते अनमोल डांहटकर च्या घरापर्यंत अनुदान जमा</td>
                <td>१४९३३८</td>
                <td>२ टी डी एस २%</td>
                <td>२९८२</td>
              </tr>
              <tr>
                <td>बँकेचे व्याज</td>
                <td>२६०</td>
                <td>सिमेंट क्रांकेट नाली बांधकाम मुदरुका खांडेकर ते दिगंबर बन्सोड च्या घरापर्यंत</td>
                <td>४९२००</td>
              </tr>
              <tr>
                <td>बँकेतून न वटलेला चेक कॅश बुकला जमा</td>
                <td>३५९८</td>
                <td>कार्यालयीन खर्च</td>
                <td>१६४.०२</td>
              </tr>
              <tr>
                <td>जमा</td>
                <td>२०२६४३.६२</td>
                <td>----</td>
                <td>३८१३९५.०२</td>
              </tr>
              <tr>
                <td>सु.शि,</td>
                <td>२०३३१२.११</td>
                <td>अ.शि</td>
                <td>२४५६०.७१</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>४०५९५५.७३</td>
                <td>एकूण</td>
                <td>४०५९५५.७३</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">१४ वा वित्त आयोग निधी</h2>
        <p className="section-subtitle">सन २०२५-२०२६ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>निरंक</td>
                <td>निरंक</td>
                <td>निरंक</td>
                <td>निरंक</td>
              </tr>
              <tr>
                <td>एकूण जमा</td>
                <td>निरंक</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>सु. शी</td>
                <td>८ २८४९८</td>
                <td>अ.शी</td>
                <td>८ २८४९८</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>२८४९८</td>
                <td>एकूण</td>
                <td>२८४९८</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">ग्राम आरोग्य व स्वच्छता पोषण समिती</h2>
        <p className="section-subtitle">सन २०२५-२०२६ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>जमा</td>
                <td>निरंक</td>
                <td>निरंक</td>
                <td>निरंक</td>
              </tr>
              <tr>
                <td>सु,शि,</td>
                <td>१४८३</td>
                <td>अ,शि,</td>
                <td>१४८३</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>१४८३</td>
                <td>एकूण</td>
                <td>१४८३</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना</h2>
        <p className="section-subtitle">सन २०१७-२०१८ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>रोजगार सेवक मानधन अनुदान</td>
                <td>२४८४००</td>
                <td>कार्यालयीन खर्च</td>
                <td>८३१-९०</td>
              </tr>
              <tr>
                <td>सिमेंट रस्ता बांधकाम अनुदान जमा इशुलाल शेंडे ते ग्यानिराम बगळते च्या घरापर्यंत</td>
                <td>४५५९५०</td>
                <td>सिमेंट क्रांकरेट रस्ता बांधकामावरील खर्च गेंदलाल वरखडे ते गणेश बावणे च्या घरापर्यंत</td>
                <td>२१२-३४८</td>
              </tr>
              <tr>
                <td>सिमेंट रस्ता बांधकाम अनुदान जमा मोतीराम फरकुंडे ते धर्मराज रहांगडाले यांच्या घरापर्यंत</td>
                <td>४६१५५९</td>
                <td>सिमेंट कांकरेट रस्ता बांधकामावरील खर्च ईशुलाल शेंडे ते ग्यानिराम बगळते च्या घरापर्यंत</td>
                <td>४५५९५०</td>
              </tr>
              <tr>
                <td>सिमेंट रस्ता बांधकाम अनुदान जमा रवींद्र कारंजेकर च्या घरापासून</td>
                <td>४६०३५०</td>
                <td>सिमेंट क्रांकरेट रस्ता बांधकामावरील खर्च मोतीराम फरकुंडे ते धर्मराज रहांगडाले घरापर्यंत</td>
                <td>४६१५५८</td>
              </tr>
              <tr>
                <td>सिमेंट रस्ता बांधकाम अनुदान जमा राजेंद्र बनसोड ते विश्रवनाथ राहांगडाले यांच्या घरापर्यंत</td>
                <td>४४३३५१</td>
                <td>सिमेंट कांकरेट रस्ता बांधकामावरील रवींद्र कारंजेकर च्या घरापासून</td>
                <td>४६०३५०</td>
              </tr>
              <tr>
                <td>सिमेंट रस्ता बांधकाम अनुदान जमा रवींद्र कारंजेकर च्या घरापासून</td>
                <td>२१२३४९</td>
                <td>सिमेंट कांकरेट रस्ता बांधकामावरील खर्च सुकचंद राहंगडाले ते छ्नुर राउत च्या घरापर्यंत</td>
                <td>४५७२५२</td>
              </tr>
              <tr>
                <td>सिमेंट रस्ता बांधकाम अनुदान जमा सुकचंद रहांगडाले ते छनूर राउत च्या घरापर्यंत</td>
                <td>४५७२५२</td>
                <td>२ % टी डी एस</td>
                <td>७१४</td>
              </tr>
              <tr>
                <td>व्याज जमा</td>
                <td>५३७०</td>
                <td>रोजगार सेवक मानधन</td>
                <td>२५९६००</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>सिमेंट कांकरेट रस्ता बांधकामावरील खर्च राजेंद्र बनसोड ते विश्वनाथ रहांगडाले यांच्या घरापर्यंत</td>
                <td>४४३१५१</td>
              </tr>
              <tr>
                <td>जमा</td>
                <td>२७४४५७१-००</td>
                <td>खर्च</td>
                <td>२७५१७५४-९०</td>
              </tr>
              <tr>
                <td>सु,शि</td>
                <td>३००८२१-७८</td>
                <td>अ,शि,</td>
                <td>२९३६४७-८८</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>३०४५४०२-७८</td>
                <td>एकूण</td>
                <td>३०४५४०२-७८</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">महात्मा गांधी तंटामुक्त समिती</h2>
        <p className="section-subtitle">सन २०२५-२०२६ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>निरंक</td>
                <td>----</td>
                <td>निरंक</td>
                <td></td>
              </tr>
              <tr>
                <td>-----</td>
                <td>-----</td>
                <td></td>
                <td>-----------</td>
              </tr>
              <tr>
                <td>------</td>
                <td>------</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>सु,शि</td>
                <td>८२५</td>
                <td>अ,शि,</td>
                <td>८२५</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>८२५</td>
                <td>एकूण</td>
                <td>८२५</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">स्वच्छ भारत मिशन</h2>
        <p className="section-subtitle">सन २०२५-२०२६ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>एकूण जमा</td>
                <td>४८२३४९</td>
                <td>एकूण खर्च</td>
                <td>५२५६५६</td>
              </tr>
              <tr>
                <td>सु.शि</td>
                <td>५०३९९</td>
                <td>अ.शि</td>
                <td>१००९२</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>५३२७४८</td>
                <td>एकूण</td>
                <td>५३२७४८</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">१५ वा वित्त आयोग फंड</h2>
        <p className="section-subtitle">सन २०२५-२०२६ चा वार्षिक जमा खर्च गोषवारा</p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>जमा</th>
                <th>रक्कम (रुपये)</th>
                <th>खर्च</th>
                <th>रक्कम (रुपये)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>१) सि</td>
                <td>१६२०६९</td>
                <td>१ )किरकोळ चेक बुक चार्जेश</td>
                <td>३०३</td>
              </tr>
              <tr>
                <td>सिमेंट</td>
                <td>१ ८१०४०</td>
                <td>२) सिमेंट क्रांकेट रस्ता बांधकाम रस्ता (जिवन तूरकर ते कैवल्या खांडेकर )</td>
                <td>८ ८१०००</td>
              </tr>
              <tr>
                <td>बांधकाम रस्ता</td>
                <td>८ ८१०००</td>
                <td>३)सिमेंट क्रांकेट रस्ता बांधकाम रस्ता (सुभाष डाहाटकर ते सोमा बोरकर )</td>
                <td>१६१८८०</td>
              </tr>
              <tr>
                <td>३ )बँकेचे व्याज</td>
                <td>१९४</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>जमा</td>
                <td>२४३३०३</td>
                <td>----</td>
                <td>२४३१८७</td>
              </tr>
              <tr>
                <td>सु.शि,</td>
                <td>९५९१</td>
                <td>अ.शि</td>
                <td>९७०७</td>
              </tr>
              <tr>
                <td>एकूण</td>
                <td>२५२८९४</td>
                <td>एकूण</td>
                <td>२५२८९४</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container schemes-sections">
        <div className="grid">
          <div className="col">
            <h2 className="block-title">योजना</h2>
            <div className="underline" />
            <div className="list-block">
              <h3>1) केंद्र पुरस्कृत योजना</h3>
              <ul className="bullets">
                <li>महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना</li>
                <li>स्वच्छ भारत मिशन योजना</li>
                <li>15 वा वित्त आयोग योजना</li>
                <li>जल जीवन मिशन योजना</li>
              </ul>
            </div>
            <div className="list-block">
              <h3>2) राज्य पुरस्कृत योजना</h3>
              <ul className="bullets">
                <li>जन सुरक्षा योजना</li>
                <li>नवयुवक घटकांच्या वस्तीत विकास करणे</li>
                <li>स्व निधी</li>
                <li>सामान्य फंड</li>
                <li>ग्रामीण पाणी पुरवठा निधी</li>
              </ul>
            </div>
          </div>

          <div className="col">
            <h2 className="block-title">सेवा</h2>
            <div className="underline" />
            <ul className="checks">
              <li>ग्राम पंचायत अंतर्गत सर्व दाखले ऑनलाईन देण्यात येतात.</li>
              <li>शिक्षणाच्या दृष्टीने गावात 1 ते 7 पर्यंत शाळा आहे.</li>
              <li>तालुक्यात जिल्हा परिषदेच्या अंतर्गत गुणवत्तापूर्ण शिक्षण दिले जाते.</li>
              <li>गावातील तंटे निराकरणासाठी तंटामुक्त समितीचे गठन करण्यात आले आहे.</li>
              <li>गावकऱ्यांच्या आरोग्यासाठी दर शनिवार आरोग्य शिबिर घेतले जाते.</li>
              <li>शुद्ध पिण्याचे पाणी मिळावे म्हणून नळ योजनेंतर्गत योजना राबविली जाते.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <h1 style={{ marginTop: '100px' }}>This page is under development, please visit later...</h1> */}
    </div>

  );
};

export default Schemes;
