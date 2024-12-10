import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import page_hero_img from '../../../Components/Assets/page-hero-img2.jpg'
import passort_image from '../../../Components/Assets/passport-image1.jpeg'
import './OurTeam.css'

const OurTeam = () => {
  return (
    <div>
      <Navbar/>
      <div className="ourteam">
      <div className="ourteam-page-hero-section">
          <img src={page_hero_img} alt="" />
          <strong><h1>Our Team</h1></strong>
        </div>
        <br />
        <div className="ourteam-section1">
          <div className="ourteam-section1-member1">
             <strong><h2>VIVEK Japala</h2></strong>
             <p>Tom is Chairman of RunFlat International Ltd, Westley Group Ltd and Westley Plastics Ltd. He graduated from Imperial College with a degree in Metallurgy and is a Chartered Engineer and a Fellow of both The Institute of Cast Metals Engineers and of the Institute of Materials, Minerals and Mining. Tom is Chairman of the board of the Black Country Local Enterprise Partnership and The Cast Metals Federation. Tom was also invited to become a liveryman within The Worshipful Company of Founders and and was appointed a Deputy Lieutenant of the West Midlands in 2017.</p>
             <img src={passort_image} alt="" />
          </div>
          <br /><hr style={{background:'red'}}/><br />
          <div className="ourteam-section1-member2">
          <strong><h2>VIVEK Japala</h2></strong>
          <p>Eric joined the team at RunFlat International in 2011 as a sales director and was promoted to managing director in 2014. Eric graduated at Mines de Nancy in France before moving to the UK and completing his MBA in 2003. He is in charge of international sales and has been instrumental in aiding the company’s development and expansion over the last decade.</p>
          <img src={passort_image} alt="" />
          </div>
          <br /><hr style={{background:'red'}}/><br />
          <div className="ourteam-section1-member3">
          <strong><h2>VIVEK Japala</h2></strong>
          <p>Tom Jnr started working for RunFlat International in 2014, having recently graduated from Cardiff University. He has since worked his way up through the company and is now Operations Director. Alongside working full time, he is currently studying for his MBA at Birmingham University.</p>
          <img src={passort_image} alt="" />
          </div>
          <br /><hr style={{background:'red'}}/><br />
          <div className="ourteam-section1-member4">
          <strong><h2>VIVEK Japala</h2></strong>
          <p>Paul graduated from Cape Peninsula University of Technology in 2004 and gained a great deal of experience in the sales and development of Central Tire Inflation Systems at various companies before joining RunFlat International in 2018. Paul is our Global Business Development Manager and is fundamental for analysing and creating growth strategies for our company.</p>
          <img src={passort_image} alt="" />
          </div>
          <br /><hr style={{background:'red'}}/><br />
        </div>
      </div>
      <Footer/>
      Our Team Page 
    </div>
  )
}

export default OurTeam
