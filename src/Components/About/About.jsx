import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./About.css"; // CSS file for styling

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h3 className="about-heading animate-top">
          RunFlat International is the leading independent RunFlat systems and military wheel supplier in the defence and security sector, having built a reputation on quality, performance and customer care.
        </h3>
        <h3 className="about-heading animate-top">
          Designed primarily for the armoured vehicle market, we offer a complete range of wheels and RunFlat systems to suit all vehicle applications. When the RunFlat system is fitted, up to 100km can be achieved with deflated tyres following ballistic ...amage.
        </h3>
        <h3 className="about-heading animate-top">
          Our products are well proven and regularly tested according to military standards such as FINABEL 20.A.5 (50km) and FINABEL A.20.A (100km), as well as specific standards established by certain countries or manufacturers.
        </h3>
        <ul className="about-list">
          <li className="about-list-item">
            <FaChevronRight className="icon" />
            Emergency Vehicles
          </li>
          <li className="about-list-item">
            <FaChevronRight className="icon" />
            High Value Cargo Carriers
          </li>
          <li className="about-list-item">
            <FaChevronRight className="icon" />
           VIP Cars
          </li>
          <li className="about-list-item">
            <FaChevronRight className="icon" />
            Aid Agency Vehicles
          </li>
          <li className="about-list-item">
            <FaChevronRight className="icon" />
            Buses, Trucks, Trailers etc
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
