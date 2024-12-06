import React from 'react';
import './Markets.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import emergency_vehicles from '../../../Components/Assets/img-13.jpg'
import vip_cars from '../../../Components/Assets/vip-cars.jpg'
import off_road_vehicles from '../../../Components/Assets/off-road-vehicles.jpg'
import Cash_in_Transit from '../../../Components/Assets/cash-in-ransit.jpg'
import mass_transit_vehicles from '../../../Components/Assets/mass-transit-vehicles.jpg'
import autonomous_vehicles from '../../../Components/Assets/autonomous-vehicles.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Markets = () => {
  return (
    <div>
      <Navbar />
      <div className="markets-container">
        <div className="market-hero-section">
          <h2>Markets</h2>
          <p>Runflat Tire Systems  is the leading independent RunFlat systems supplier in the defence and security sector.</p>
        </div>
        <div className="market-section1">
          <h3>Runflat Tire Systems  sells products to a wide range of markets and applications. Following our success with the Ministries of Defence and Interiors of many countries (UK, Spain, Germany, India, Pakistan, Thailand, Malaysia..), Runflat Tire Systems  have expanded our product range and are offering into a wide range of applications including:</h3>
        <ul className='market-section1-ul-listitems'>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/> Emergency Vehicles</li>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>VIP Cars</li>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Aid Agency Vehicles</li>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Off road vehicles</li>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>High Value Cargo Carriers</li>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Caravans and Trailers</li>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Anti riot vehicles</li>
          <li><FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '15px',marginLeft:'15px', paddingLeft:'5px', color:'white',background:'red',borderRadius:'5px' }}/>Armoured vehicles</li>
        </ul>
        </div>
        <div className="market-section2-vehicles">
          <div className="vehicle-one"><img src={emergency_vehicles} alt="emergency_vehicles" width='400px' />
          <h3>Security Armoured Vehicles</h3>
          </div>
          <div className="vehicle-two">
            <img src={vip_cars} alt="Military Armoured Vehicles" width='400px' />
            <h3>Military Armoured Vehicles</h3>
          </div>
          <div className="vehicle-three">
            <img src={off_road_vehicles} alt="Off Road Vehicles"  width='400px' />
            <h3>Off Road Vehicles</h3>
          </div>
          <div className="vehicle-four">
            <img src={Cash_in_Transit} alt="Cash in Transit"  width='400px' />
            <h3>Cash in Transit</h3>
          </div>
          <div className="vehicle-five">
            <img src={mass_transit_vehicles} alt="Mass Transit Vehicles"  width='400px' />
            <h3>Mass Transit Vehicles</h3>
          </div>
          <div className="vehicle-six">
            <img src={autonomous_vehicles} alt="Autonomous Vehicles"  width='400px' />
            <h3>Autonomous Vehicles</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Markets;
