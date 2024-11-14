import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const faqData = [
  {
    question: 'What is RunFlat Tire technology?',
    answer: 'RunFlat Tire technology allows you to continue driving for a short distance even after a tire loses air pressure.',
  },
  {
    question: 'How durable are RunFlat tires?',
    answer: 'RunFlat tires are designed for durability and safety, providing a reliable solution for various terrains.',
  },
  {
    question: 'Can I install RunFlat tires on any vehicle?',
    answer: 'RunFlat tires are compatible with most vehicles. However, it is recommended to consult with a professional for specific compatibility.',
  },
  {
    question: 'What is the lifespan of RunFlat tires?',
    answer: 'The lifespan of RunFlat tires depends on driving conditions, but they typically last as long as conventional tires.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-icon">
                {index === activeIndex ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {index === activeIndex && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
