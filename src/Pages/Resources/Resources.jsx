import React from 'react';
import './Resources.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className="resources-container">
        <h1>Resources</h1>
        <p>Welcome to the RunFlat International resource center. Here you can find a range of downloadable materials to learn more about our products, services, and certifications.</p>

        <section className="resource-section">
          <h2>RunFlat International Literature</h2>
          <p>We provide a variety of resources to help you understand our products and services. These include detailed product information, technical specifications, and test reports.</p>
        </section>

        <section className="resource-section">
          <h2>Our Product Range</h2>
          <p>Explore our wide range of run-flat systems designed for defense, security, and commercial applications. Our products are engineered to meet the highest safety and performance standards. Download the full product catalog for detailed specifications and applications.</p>
          <ul>
            <li><a href="/path-to-catalog.pdf" target="_blank">Download Product Catalog</a></li>
          </ul>
        </section>

        <section className="resource-section">
          <h2>Company Profile</h2>
          <p>Our company profile offers an overview of RunFlat International, our mission, vision, values, and our expertise in providing top-tier run-flat systems. It also outlines our commitment to quality and customer satisfaction.</p>
          <ul>
            <li><a href="/path-to-profile.pdf" target="_blank">Download Company Profile</a></li>
          </ul>
        </section>

        <section className="resource-section">
          <h2>Brochures</h2>
          <p>Get a deeper insight into our products, services, and solutions by downloading our brochures. These materials give you an in-depth look at the technical details and benefits of using our run-flat systems in various applications.</p>
          <ul>
            <li><a href="/path-to-brochure.pdf" target="_blank">Download Brochure</a></li>
          </ul>
        </section>

        <section className="resource-section">
          <h2>ISO 9001:2015 Certification</h2>
          <p>RunFlat International is ISO 9001:2015 certified, demonstrating our commitment to maintaining the highest standards in quality management. This certification assures you of our dedication to continual improvement and customer satisfaction.</p>
          <ul>
            <li><a href="/path-to-iso-certificate.pdf" target="_blank">Download ISO 9001:2015 Certificate</a></li>
          </ul>
        </section>

        <section className="resource-section">
          <h2>Warranty Terms</h2>
          <p>Our warranty terms provide peace of mind, ensuring the longevity and reliability of our products. We offer comprehensive support to our customers, ensuring that our run-flat systems continue to perform optimally throughout their lifecycle.</p>
          <ul>
            <li><a href="/path-to-warranty-terms.pdf" target="_blank">Download Warranty Terms</a></li>
          </ul>
        </section>

        <section className="resource-section">
          <h2>Data Sheets</h2>
          <p>Access detailed technical data sheets for our products, which outline the specifications, features, and applications of our run-flat systems. These documents provide essential information to help you understand the full capabilities of our offerings.</p>
          <ul>
            <li><a href="/path-to-datasheet.pdf" target="_blank">Download Data Sheet</a></li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Resources;
