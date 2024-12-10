import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./Product.css";
import topImage from "../Assets/wheel-img7.jpg"; // Replace with your image path

const Product = () => {
  return (
    <section className="products-section">
      {/* Top Image */}
      <img src={topImage} alt="RunFlat Products" className="products-image" />

      {/* Section Content */}
      <div className="products-content">
        <h2 className="section-title animate-slide-in">RunFlat Products and Strengths</h2>

        <h3 className="products-description animate-fade-in">
          RunFlat systems (also known as RunFlat inserts) are bolted onto wheel rims and support the tyre when flat, allowing the vehicle to continue driving safely for up to 100km following ballistic or terrain-related tyre damage.
        </h3>
        <h3 className="products-description animate-fade-in">
          When the tyre is fully inflated, the RunFlat system has no effect on performance or handling of the vehicle. If the tyre becomes deflated, the RunFlat system prevents full deflection by supporting the tyre and enables the vehicle to continue its journey until its passengers and contents reach a safe place.
        </h3>

        <h3 className="products-description animate-fade-in">
          Our RunFlat inserts provide the following advantages:
        </h3>

        <ul className="advantages-list">
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Quick fitting time
          </li>
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Ultra safe to fit
          </li>
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Lightweight
          </li>
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Recyclable material used
          </li>
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Ballistic resistant material
          </li>
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Reusable system
          </li>
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Safe vehicle handling
          </li>
          <li className="advantage-item">
            <FaChevronRight className="icon" />
            Superior distances covered
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;
