import React from 'react';
import './News.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Hero2 from '../../../Components/Hero2/Hero2';

const News = () => {
  const newsArticles = [
    {
      title: 'RUNFLAT Tire Systems Launches New Product',
      date: 'November 17, 2024',
      excerpt: 'RUNFLAT Tire Systems introduces a revolutionary tire solution designed for extreme durability and performance in off-road and armored vehicles.',
    },
    {
      title: 'Expanding to Global Markets',
      date: 'October 25, 2024',
      excerpt: 'Our company is proud to announce the expansion of our tire systems into international markets, bringing superior solutions to a global audience.',
    },
    {
      title: 'Partnership with Leading Automotive Brands',
      date: 'September 12, 2024',
      excerpt: 'RUNFLAT Tire Systems partners with top automotive brands to enhance the safety and reliability of off-road and military vehicles.',
    },
  ];

  return (
    <div className="news-page">
      <Navbar />
      <Hero2/>
      <div className="news-container">
        <h1>Latest News</h1>
        <div className="news-list">
          {newsArticles.map((article, index) => (
            <div className="news-article" key={index}>
              <h2>{article.title}</h2>
              <p className="news-date">{article.date}</p>
              <p className="news-excerpt">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
