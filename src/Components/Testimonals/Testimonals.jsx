import React from 'react';
import { FaStar, FaStarHalfAlt, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Testimonals.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    rating: 4.5,
    feedback: 'RunFlat Tires has given me the confidence to drive through any terrain without worries. The durability is unmatched!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 5,
    feedback: 'Excellent quality and customer service! I highly recommend RunFlat Tires for anyone seeking reliability.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    rating: 4,
    feedback: 'Great product! I was impressed with the performance and safety. It’s worth every penny!',
  },
];

const Testimonals = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-quote">
              <FaQuoteLeft className="quote-icon" />
              <p>{testimonial.feedback}</p>
              <FaQuoteRight className="quote-icon" />
            </div>
            <div className="testimonial-info">
              <h3>{testimonial.name}</h3>
              <div className="testimonial-rating">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
                {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="star-icon" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonals;
