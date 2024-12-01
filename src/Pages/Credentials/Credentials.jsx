import React from 'react';
import './Credentials.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Hero5 from '../../Components/Hero5/Hero5';
import img_logo1 from '../../Components/Assets/25.jpg'
import img_logo2 from '../../Components/Assets/26.jpg'
import img_logo3 from '../../Components/Assets/27.jpg'
import center_image from '../../Components/Assets/24.jpg'
import india_flag from '../../Components/Assets/india-flag.png'

const Credentials = () => {
  return (
    <div>
      <Navbar />
      <Hero5/>
      <div className="credentials-container">
        <div className="credentials-section1">
        <h1>Credentials</h1>
        <p className="intro-text" style={{background:'darkgreen',color:'white'}}>
        The test of run-flat systems from Runflat Tire Systems proved that their products successfully fulfill the Indian requirements FINABEL 20.A.5" P.T. (India)
        </p>
        </div>
        <div className="credentials-section1">
          <p>Runflat Tire Systems is the leading independent RunFlat supplier in the defence and security sector, having built a reputation on quality and performance.</p>
          <p>Our products are regularly and arduously tested according to military standards such as FINABEL, TUV and American standards (SAEJ 2014) as well as specific standards established by certain countries or manufacturers (including Plasan 300km and Mercedes 150km tests).</p>
        </div>
        <div className="credentials-section2-img">
          <img src={img_logo3} alt="" />
          <img src={img_logo1} alt="" />
          <img src={img_logo2} alt="" />
        </div>
      
        <div className="credentials-section3">
          <p>Our proprietary polymers and patented designs have been developed specifically to meet these requirements and have been supplied globally for over 20 years to vehicle armourers, armies and OEMs.</p><br />
          <p>We have been succesfully trialled with Ministries of Defence and Interiors of India  and renowned vehicle manufacturers (including Mercedes, Toyota, Renault, URO, Mahindra, Ford and Oshkosh).</p><br />
          <p>Products are tested in terms of ballistic performance, control of the vehicle and distance covered with 1, 2 or all flat tyres. Our products are designed and manufactured to comply and exceed FINABEL standards.</p><br />
        </div>
      
        <div className="credentials-section4-img">
          <img src={center_image} alt="" /> <br /><br />
          <p>Runflat Tire Systems have been trialled and approved by Ministries of Defence INDIA</p> <br />
           <img src={india_flag} alt="" />
           
        </div>
           <br/>
           <hr/>
           <br/>
           <br/>
           <br/>
           <br/>

        <div className="credentials-section5">
          <p>RunFlat International provide a tried and tested solution, with products regularly approved by new and existing customers. There are currently thousands of our RunFlat systems currently in operation and use globally, with some systems still being used after 20 years of service.</p><br /><br />
          <p>Due to the nature of our market, trials are often confidential and cannot be shared, however we are occasionally allowed to share certain information including footage, some of which can be seen here.</p><br /><br />
          <p>For more trial footage and information visit our YouTube channel.</p>
        </div>
        <div className="credentials-section6-ytvideos">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/BgtKxVZvtps"
    title="YouTube video 1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/t0EjOwS91rA"
    title="YouTube video 2"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/Mbg-A4QnAmw"
    title="YouTube video 3"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/67oGE2yjTx0"
    title="YouTube video 4"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen> 
    </iframe><br /><br /><br />
     </div>

        <div className="credentials-section7">
          <strong><p style={{background:'darkred',color:'white'}}>The effectiveness of RunFlat International’s tyre insert products in recent conflicts has been praised by customers and has further improved RunFlat International’s reputation around the World….</p></strong>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Credentials;
