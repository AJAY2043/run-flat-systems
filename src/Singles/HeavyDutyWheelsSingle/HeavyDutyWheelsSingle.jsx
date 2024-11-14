import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../Data/heavyDutyWheels.json';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './HeavyDutyWheelsSingle.css';

const HeavyDutyWheelsSingle = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="single-product-container">
        <div className="single-info">
          <h2>{product.name}</h2>
          <div className="single-info-img">
            <img src={product.image} alt={product.name} />
          </div>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Model:</strong> {product.model}</p>
          <p><strong>Model Number:</strong> {product.model_number}</p>
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Vehicle Fit:</strong> {product.vehicle_fit}</p>
          <p><strong>Year of Manufacture:</strong> {product.year_of_manufacture}</p>
          <p><strong>Lifetime (kms):</strong> {product.lifetime_kms}</p>
          <p><strong>Load Capacity (kg):</strong> {product.load_capacity_kg}</p>
          <p><strong>Diameter:</strong> {product.diameter_inch}"</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeavyDutyWheelsSingle;
