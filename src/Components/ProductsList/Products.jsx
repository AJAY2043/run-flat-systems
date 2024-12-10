import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Products.css';

// Import product images
import product_img1 from '../Assets/wheel-img6.jpg';
import product_img2 from '../Assets/wheel-img5.jpg';
import product_img3 from '../Assets/wheel-img4.jpg';
import product_img4 from '../Assets/wheel-img3.jpg';
import product_img5 from '../Assets/wheel-img2.jpg';
import product_img6 from '../Assets/wheel-img1.jpg';
import product_img7 from '../Assets/tire-img1.jpg';
import product_img8 from '../Assets/tire-img2.jpg';
import product_img9 from '../Assets/tire-img3.jpg';

const Products = () => {
  const products = [
    { img: product_img1, name: 'Dynamic RunFlat 1', discrption: 'The Dynamic RunFlat system is designed for single piece wheels and is therefore suitable to be fitted on the vast majority of cars, SUV’s and trailers.' },
    { img: product_img2, name: 'Static RunFlat System', discrption: 'The Static RunFlat system is designed for multiple piece demountable wheels and is primarily designed for military applications on and off-road.' },
    { img: product_img3, name: 'Beadlock System', discrption: 'The Beadlock is designed for multiple piece wheels to increase the mobility of a wheeled vehicle operating in soft terrains such as sand, mud and snow.' },
    { img: product_img4, name: 'Security Wheels', discrption: 'The single piece wheels are designed for the high loads experienced in armoured vehicles and are available in both steel and aluminium. Designs and availability for the vast majority of cars, SUV’s, trucks and trailers.'},
    { img: product_img5, name: 'Military Wheels', discrption: 'The multi piece wheels are designed for loads up to 5000kgs and are available in both steel and aluminium. Designs are available as bolt together or three piece wheels and designed primarily for military applications on and off-road.' },
    { img: product_img6, name: 'Automotive Wheels', discrption: 'RunFlat International is a specialist in the design and production of cast and forged aluminium wheels for vehicle manufacturers (OEMs) and other specialist applications.' },
    { img: product_img7, name: 'Complete Wheels', discrption: 'Complete fitted wheel solutions available for single piece and multi piece wheels. By offering a finished solution the customer can be confident that the RunFlat system has been fitted correctly and the whole assembly can be supplied, balanced and inflated ready to bolt onto the vehicle.' },
    { img: product_img8, name: 'Military Vehicle Tyres', discrption: 'A wide range of military tyres available from key manufacturers including Michelin, Continental, Pirelli and Goodyear.' },
    { img: product_img9, name: 'Tyre Studding', discrption: 'Tyre studding is available for all tyre sizes and applications, providing superior vehicle handling in icy conditions.' },
  ];

  return (
    <section className="products-section">
      <div className="container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-wrapper">
              <img src={product.img} alt={product.name} className="product-image" width={350} height={350}/>
              <div className="hover-overlay">
                <FaArrowRight className="arrow-icon" style={{color:'red'}} />
              </div>
            </div>
            <h2 className="product-title">{product.name}</h2>
            
            <p className="product-description">{product.discrption}</p>
            <Link to="/contactus">
              <button className="product-button">
                More <FaArrowRight className="button-arrow" />
              </button>
            </Link>
          </div>
        ))}
      </div>
      <h3 style={{paddingTop:'100px'}}>Our RunFlat systems are regularly and arduously tested to military standards such as Finabel, NATO, and American Standards as well as specific standards established by certain countries or manufactures.
      </h3>
    </section>
  );
};

export default Products;
