import React, { useState } from 'react';
import './News.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const News = () => {
  const [newsData, setNewsData] = useState([
    {
      title: 'Eurosatory 2022',
      date: '17 February, 2022',
      content: 'RunFlat International are delighted to be exhibiting at Eurosatory 2022, which will be held in Paris Nord Villepinte Exhibition Center from 13th – 17th June...',
      id: 1,
    },
    {
      title: 'DSEI – September 2021',
      date: '21 May, 2021',
      content: 'RunFlat International will be exhibiting at DSEI, at ExCel London from 14th – 17th September...',
      id: 2,
    },
    {
      title: 'New Product Launch – RunFlat System',
      date: '10 January, 2023',
      content: 'We are excited to announce the launch of our new RunFlat system designed for military vehicles...',
      id: 3,
    },
    // Add more articles if needed
  ]);

  const loadMoreHandler = () => {
    const newArticles = [
      {
        title: 'Product Update – Military Systems',
        date: '12 February, 2023',
        content: 'RunFlat International has updated its military wheel systems with enhanced durability...',
        id: 4,
      },
      {
        title: 'New Partnership Announcement',
        date: '30 December, 2022',
        content: 'We are thrilled to announce a new partnership with leading defense contractors...',
        id: 5,
      },
    ];
    setNewsData([...newsData, ...newArticles]);
  };

  return (
    <>
    <Navbar/>
    <div className="news-section">
      <div className="news-container">
        {newsData.map((news) => (
          <div key={news.id} className="news-item">
            <h3 className="news-title">{news.title}</h3>
            <span className="news-date">{news.date}</span>
            <p className="news-content">{news.content}</p>
            <a href="/" className="read-more">Read more</a>
          </div>
        ))}
        <button className="load-more-btn" onClick={loadMoreHandler}>
          Load More
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default News;
