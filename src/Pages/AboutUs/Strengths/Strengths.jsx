import React from 'react'
import page_hero_img from '../../../Components/Assets/page-hero-img2.jpg'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import './Strengths.css'

const Strengths = () => {
  return (
    <div>
     <Navbar/>

     <div className="strengths">
      
      <div className="Strengths-page-hero-section1">
        <img src={page_hero_img} alt="" />
        <h2>RunFlat International has been growing year-on-year by offering products which technically differentiate with the competition on criteria established with our customers</h2>
      </div>
      
      <div className="strength-page-section1">
          
          <div className="page-section1">
            <strong><h3>Easy Fit</h3></strong>
            <p>Easy to fit in less than 10 minutes without special and expensive tools or presses. This allows in-theatre changes. Our RunFlat systems are also particularly safe to fit as it is not necessary to insert fingers inside the tyre during assembly.</p>
          </div>

          <div className="page-section2">
            <strong><h3>Lighter</h3></strong>
            <p>Lighter due to their design and our proprietary material. Our Static systems typically offer more than 20% weight saving over rubber products. For further weight savings, heavy multi-piece wheels and rubber products may be replaced by Dynamic Systems on single-piece wheels.</p>
          </div>

          <div className="page-section3">
            <strong><h3>Reuseable</h3></strong>
            <p>Can be fitted on the same or another wheel rim whether it has been operated in run flat mode or not. Only a visual inspection is necessary to detect severe damage which may have been caused by a bomb blast or shooting.</p>
          </div>

          <div className="page-section4">
            <strong><h3>Antiballistics</h3></strong>
            <p>Proprietary composite material has been specifically designed to offer exceptional antiballistic resistance. The material flexes, absorbs the energy of the bullet and partially heals back, even at freezing temperatures.</p>
          </div>

          <div className="page-section5">
            <strong><h3>Performance</h3></strong>
            <p>Comparative tests carried out consistently highlight a clear advantage for our products over the competition in terms of the quality of the vehicle handling and the distance covered in run flat mode on and off road.</p>
          </div>

          <div className="page-section6">
            <strong><h3>Long Life</h3></strong>
            <p>If the RunFlat system is not used in deflated mode the system does not need to be changed regularly, in fact it can remain fitted for the lifetime of the vehicle without issue and can be removed and refitted during tyre changes.</p>
          </div>
      </div>

      <div className="Strengths-page-hero-section2" style={{background:'red'}}>
        <strong><h2>Our products are market leading and continually give our customers the confidence needed when purchasing such an important vehicle component!</h2></strong>
      </div>

     </div>
   <Footer/>
    </div>
  )
}

export default Strengths
