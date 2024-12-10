import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import page_hero_img from '../../../Components/Assets/page-hero-img1.jpg'
import company_image1 from '../../../Components/Assets/company-img1.jpg'
import company_image2 from '../../../Components/Assets/company-img2.jpg'
import company_iso_imag from '../../../Components/Assets/iso-img.jpg'
import './Company.css'

const Company = () => {
  return (
    <div>
      <Navbar/>
      <div className="company">
        <div className="company-page-hero-section">
          <img src={page_hero_img} alt="" />
          <h3>Proud of its 200-year-old heritage, RunFlat International also has all the attributes of a small business: responsiveness, focused expertise and ease to do business with.</h3>
        </div>

        <br /><br />

        <div className="company-page-section1">
          <h2>Our History and Heritage</h2><br />
          <p>RunFlat International was established in 2001 as a subsidiary of its parent company Westley Plastics using its leading edge polymer technology to exclusively develop run-flat tyre insert systems.</p><br />
          <p>RunFlat International originates from Westley Group, a European leading non-ferrous foundry and engineering group since the beginning of the 19th century in the cradle of the industrial revolution.</p><br />
          <p>Westley Plastics was started in the 1960’s, developing polymer technologies to replace heavier, more expensive and less wear-resistant metal products.</p><br />
          <p>RunFlat International is a subsidiary and partner of Westley Plastics which specialises exclusively in run-flat systems. Our composite material has been developed and is processed specifically for run-flat applications while our products are subject to multiple patents.</p><br />
          <p>Recently Wheels International was established to work in parallel with RunFlat International and specialise in lightweight, high load military/security alloy and steel wheels manufactured in Europe.</p><br />
        </div>
        
        <br />
        
        <div className="company-page-section2">
          <h2>Operational Excellence</h2>
          <p>RunFlat International has full ISO 9001:2015 certification. Operational excellence is achieved through state of the art machinery, polymerisation expertise and regularly audited quality standards.</p>
          <p>All our products are manufactured in house from raw chemicals through to complete fitted wheel assemblies. Controlling the process from start to finish ensures full process control and quality can be guaranteed.</p>
          <p>Extensive industry experience and a regular global customer base mean our products are well proven throughout the world, with many products still in use after 20 years.</p>
        </div>
        <div className="company-page-gallery-section">
          <img src={company_image1} alt="" width='400'/>
          <br />
          <img src={company_image2} alt="" width='400'/>
          <br />
          <img src={company_iso_imag} alt="" />
        </div>
        <br />
        <div className="company-page-section3">
          <h3>RunFlat International offers the flexibility and fast responsiveness of a small business whilst relying on operational excellence.</h3><br />
          <strong><h3>This results in outstanding customer service and impeccable product quality.</h3></strong>
        </div>


      </div>
      <Footer/> 
    </div>
  )
}

export default Company
