import React from 'react'; 
import './Materials.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import img_20 from '../../../Components/Assets/img-20.jpg';
import img_21 from '../../../Components/Assets/img-21.jpg';
import img_22 from '../../../Components/Assets/img-22.jpg';
import img_23 from '../../../Components/Assets/img-23.jpg';
import img_24 from '../../../Components/Assets/img-24.png';
import img_25 from '../../../Components/Assets/img-25.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Material = () => {
  return (
    <div>
      <Navbar />
      <div className="our-material-container">
        <div className="material-hero-section">
          <h3>Our Materials</h3>
          <p>Explore the materials used in our premium tire technology</p>
        </div>

        <div className="material-cards-container">
          <div className="material-card">
            <img src={img_20} alt="Material 1" className="material-img" />
            <div className="material-card-content">
              <h4>Advanced Rubber</h4>
              <p>Our advanced rubber formula ensures better durability and performance.</p>
              {/* <button className="read-more-btn">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button> */}
            </div>
          </div>

          <div className="material-card">
            <img src={img_21} alt="Material 2" className="material-img" />
            <div className="material-card-content">
              <h4>Carbon Black</h4>
              <p>Improves the longevity and abrasion resistance of the tires.</p>
              {/* <button className="read-more-btn">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button> */}
            </div>
          </div>

          <div className="material-card">
            <img src={img_22} alt="Material 3" className="material-img" />
            <div className="material-card-content">
              <h4>Silica Compounds</h4>
              <p>Increases tire traction and fuel efficiency.</p>
              {/* <button className="read-more-btn">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button> */}
            </div>
          </div>

          <div className="material-card">
            <img src={img_23} alt="Material 4" className="material-img" />
            <div className="material-card-content">
              <h4>Kevlar Reinforcement</h4>
              <p>Enhances tire strength and resistance to punctures.</p>
              {/* <button className="read-more-btn">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button> */}
            </div>
          </div>

          <div className="material-card">
            <img src={img_24} alt="Material 5" className="material-img" />
            <div className="material-card-content">
              <h4>Natural Rubber</h4>
              <p>Ensures comfort and smoothness for your ride.</p>
              {/* <button className="read-more-btn">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button> */}
            </div>
          </div>

          <div className="material-card">
            <img src={img_25} alt="Material 6" className="material-img" />
            <div className="material-card-content">
              <h4>Reinforced Steel</h4>
              <p>Offers better load-bearing capacity and safety.</p>
              {/* <button className="read-more-btn">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Material;








// import React from 'react'; 
// import './Materials.css';
// import Navbar from '../../../Components/Navbar/Navbar';
// import Footer from '../../../Components/Footer/Footer';
// // import thumbnail_img from '../../../Components/Assets/3.jpg'
// import img_20 from '../../../Components/Assets/img-20.jpg'
// import img_21 from '../../../Components/Assets/img-21.jpg'
// import img_22 from '../../../Components/Assets/img-22.jpg'
// import img_23 from '../../../Components/Assets/img-23.jpg'
// import img_24 from '../../../Components/Assets/img-24.png'
// import img_25 from '../../../Components/Assets/img-25.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const Material = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="our-material-container">
//         <div className="materal-hero-section">
//           <h3>Our Material</h3>
//           <p>RunFlat Tires Systems has developed a unique composite material specifically designed for runflat applications.</p>
//           </div>
//           <div className="material-section1">
//             <strong><h3>As a safety product the quality of the material used is paramount to ensure the RunFlat can be relied on when it is needed most.</h3></strong>
//                     <p>Ballistic resistance is created from the quality of the material used and the environment in which it is produced.Runflat Tire Systems never compromise in these areas and all our material is produced in-house in our humidity and temperature controlled environment from customised raw materials. This unique RunFlat material offers all the key properties to fulfil its run-flat functions:</p>
//                     <ul>
//                       <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Stable structure at all operating temperatures from -40C to over 150C.</li>
//                       <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Low coefficient of friction on rubber to reduce heat inside the tyre in deflated mode.</li>
//                       <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Homogeneous density (cavity-free) to absorb the ballistic impact.</li>
//                       <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Complex structure (not mono-chain) which makes it both light and very robust.</li>
//                     </ul>
         
//           </div>
//           <div className="materials-secion-gallery1">
//             <img src={img_20} alt="" />
//             <img src={img_21} alt="" />
//             <h3>The Real World Effect</h3>
//             <li>The image below shows our RunFlat system after ballistic testing – the entry (left) and exit (right) holes of three 7.62 NATO bullets shot from 50m (as per FINABEL). The bullets have passed through the material and have not damaged the material or the RunFlat performance.</li>
//             <img src={img_22} alt="" />
//             <p>3 x 7.62mm Bullet Entry</p>
//             <img src={img_23} alt="" />
//             <h4>3 x 7.62mm Bullet Exit</h4>
//             <li>In contrast, other run-flat manufacturers use standard nylon or other unsuitable materials which are much less resilient (yet cheaper to manufacture). The below images show the outcome of a material in the same circumstances. Cracks are apparent at all exit holes and one entry hole – the runflat system is cracked before the vehicle is even in motion.</li>
//             <img src={img_24} alt="" />
//             <p>3 x 7.62mm Bullet Entry</p>
//             <img src={img_25} alt="" />
//             <p>3 x 7.62mm Bullet Exit</p>
//             <li>A runflat is designed as a safety product, to enable a vehicle to escape a dangerous situation after ballistic attack. Compromising on material quality with an inferior product increases the chances of the runflat being unable to do its job when it is relied upon the most, endangering the vehicle and life of the occupants.</li>
//           </div>
//           <div className="material-section3">
//             <h2>The material we use is of paramount importance ensuring our RunFlat systems can be relied on at critical times.</h2>
//           </div>
//                 </div>
//       <Footer />
//     </div>
//   );
// };

// export default Material;


