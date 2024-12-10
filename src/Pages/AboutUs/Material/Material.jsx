import React from 'react'
import page_hero_img from '../../../Components/Assets/page-hero-img1.jpg';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import runflat_tire1 from '../../../Components/Assets/runflat-img1.jpg'
import runflat_tire2 from '../../../Components/Assets/runflat-img2.jpg'
import runflat_tire3 from '../../../Components/Assets/runflat-img3.jpg'
import runflat_tire4 from '../../../Components/Assets/runflat-img4.jpg'
import runflat_tire5 from '../../../Components/Assets/runflat-img5.png'
import runflat_tire6 from '../../../Components/Assets/runflat-img6.jpg'
import './Materials.css'

const Material = () => {
  return (
    <div>
      <Navbar/>
        <div className="material">
      <div className="material-page-hero-section">
        <img src={page_hero_img} alt="" />
        <strong><h1>Our Material</h1></strong>
        <h3>RunFlat International has developed a unique composite material specifically designed for runflat applications.</h3>
      </div>
      <br /><br />

      <div className="material-page-section1">
        <strong><h3>As a safety product the quality of the material used is paramount to ensure the RunFlat can be relied on when it is needed most.</h3></strong><br />
        <p>Ballistic resistance is created from the quality of the material used and the environment in which it is produced. RunFlat International never compromise in these areas and all our material is produced in-house in our humidity and temperature controlled environment from customised raw materials. This unique RunFlat material offers all the key properties to fulfil its run-flat functions:</p><br />
        <ul>
          <li>Stable structure at all operating temperatures from -40C to over 150C.</li>
          <li>Low coefficient of friction on rubber to reduce heat inside the tyre in deflated mode.</li>
          <li>Homogeneous density (cavity-free) to absorb the ballistic impact.</li>
          <li>Complex structure (not mono-chain) which makes it both light and very robust.</li>
        </ul>
      </div>

      <div className="material-page-gallery-section">
       
        <div className="material-section1">
          <img src={runflat_tire1} alt="" />
        </div>

        <div className="material-section2">
        <div className="video-container">
        <iframe
         title="YouTube Video"
         src="https://www.youtube.com/embed/rZWPznsmrJ8"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
           />
        </div>
        </div>


        <div className="material-section3">
          <img src={runflat_tire2} alt="" /><br />
          <strong><h3>The Real World Effect</h3></strong><br />
          <p>The image below shows our RunFlat system after ballistic testing – the entry (left) and exit (right) holes of three 7.62 NATO bullets shot from 50m (as per FINABEL). The bullets have passed through the material and have not damaged the material or the RunFlat performance.</p>
        </div>

        <div className="material-section4">
          <img src={runflat_tire3} alt="" /><br />
          <p>3 x 7.62mm Bullet Entry</p>
        </div>

        <div className="material-section5">
          <img src={runflat_tire4} alt="" /><br />
          <p>3 x 7.62mm Bullet Exit</p><br />
          <p>In contrast, other run-flat manufacturers use standard nylon or other unsuitable materials which are much less resilient (yet cheaper to manufacture). The below images show the outcome of a material in the same circumstances. Cracks are apparent at all exit holes and one entry hole – the runflat system is cracked before the vehicle is even in motion.</p><br />
          </div>

          <div className="material-section6">
          <img src={runflat_tire5} alt="" /><br />
          <p>3 x 7.62mm Bullet Entry</p>
        </div>
          
        <div className="material-section7">
          <img src={runflat_tire6} alt="" /><br />
          <p>3 x 7.62mm Bullet Exit</p><br />
          <p>A runflat is designed as a safety product, to enable a vehicle to escape a dangerous situation after ballistic attack. Compromising on material quality with an inferior product increases the chances of the runflat being unable to do its job when it is relied upon the most, endangering the vehicle and life of the occupants.</p><br /><br /><br />
        </div>
      
      </div>

      <div className="material-section2">
        <strong><h2>The material we use is of paramount importance ensuring our RunFlat systems can be relied on at critical times.</h2></strong>
      </div>

      </div>



      <Footer/> 
    </div>
  )
}

export default Material
