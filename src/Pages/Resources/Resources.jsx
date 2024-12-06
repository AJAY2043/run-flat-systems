import React from 'react';
import './Resources.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons'; 

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className="resources-container">
        <div className="resources-section1" style={{background:'darkred',color:'white'}}>
        <h1>Resources</h1>
        <p style={{color:'white'}}>Welcome to the Runflat Tire Systems  resource center. Here you can find a range of downloadable materials to learn more about our products, services, and certifications.</p>
        </div>
        
        <div className="resources-section2">
        <strong><h3>Runflat Tire Systems  Literature</h3></strong>
        
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />          
        <p>Product Range</p><br />
        
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
        <p>Company Profile</p><br />
       
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
         <p>Brochure</p><br />
       
         <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
         <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
         <p>ISO 9001:2005</p><br />
       
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
         <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
         <p>Warranty Terms</p><br /><br />
       
        </div>
        <hr /><br /><br />
        <div className="resources-section3">
        <strong><h3 >Data Sheets</h3></strong>
        
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Beadlock System</p><br />
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Dynamic RunFlat</p><br />
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
           <p>Large Dynamic RunFlat</p><br />
          
           <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
            <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
            <p>static RunFlat</p><br />
            
            <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
            <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
             <p>Single Piece Wheel</p><br /><br />
             
             <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
             <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
              <p>Multi Piece Wheel</p><br /><br />
        
        </div>
        <hr /><br /><br />
        <div className="resources-section3">
        <strong><h3>Fitting & User Guides</h3></strong>
        
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Dynamic RunFlat</p><br />
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Large Dynamic RunFlat</p><br />
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
           <p>Beadlock System</p><br />
           
           <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
           <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
            <p>static RunFlat</p><br />
        </div>
        <hr /><br /><br />
        <div className="resources-section4">
        <strong><h3 >Maintenance and Storage</h3></strong>
        
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Maintenance and Inspection</p><br />
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Storage Guidelines</p><br />
         
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
           <p>Beadlock System</p><br />
         
           <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
            <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
            <p>static RunFlat</p><br />
        
        </div>
        <hr /><br /><br />
        <div className="resources-section5">
        <strong><h3 >FINABEL Standards</h3></strong>
        
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>FINABEL 50km</p><br />
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>FINABEL 100km</p><br />
        
          </div>
        <hr /><br /><br />
        <div className="resources-section6">
        <strong><h3 >Tyre Load & Speed Rating</h3></strong>
       
        <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
            <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Tyre Load & Speed Rating</p><br />
         
          </div>
        <hr /><br /><br />
        <div className="resources-section7">
          <strong><h3 >Test Reports</h3></strong>
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Ballistics Properties</p><br />
          
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
          <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
          <p>Load Test</p><br />
         
          <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
            <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />
           <p>Certificare of Conformity <h6>On Request</h6></p><br />
          
           <FontAwesomeIcon icon={faFilePdf} style={{ color: 'red', marginRight: '8px' }} />
            <FontAwesomeIcon icon={faDownload} style={{ color: 'green' }} />          
            <p>Trail Reports <h6>On Request</h6></p><br />
        
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Resources;
