import React from 'react';
import './News.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Hero2 from '../../../Components/Hero2/Hero2';
import background_img from '../../../Components/Assets/26.jpg';

const News = () => {
  const newsArticles = [
    {
      title: 'Eurosatory 2022',
      author: 'By Tom Westley',
      date: '17 February, 2022',
      excerpt: 'RunFlat International are delighted to be exhibiting at Eurosatory 2022, which will be held in Paris Nord Villepinte Exhibition Center from 13th – 17th June. Eurosatory is an international exhibition dedicated to the land and airland defence and security sectors. World number 1 in its category today, it is the unmissable event for all the players of these two sectors. Please do come and meet us at our stand (Hall 5A – K657) to discuss our complete range of wheels and RunFlats.',
    },
    {
      title: 'DSEI – September 2021',
      author: 'By Tom Westley',
      date: '21 May, 2021',
      excerpt: 'RunFlat International will be exhibiting at DSEI, at ExCel London from 14th – 17th September 2021. DSEI is one of the largest defense and security exhibitions globally, attracting thousands of professionals from the defense industry. Visit our booth to learn more about our innovative tire solutions for the defense sector.',
    },
    {
      title: 'RUNFLAT Tire Systems Launches New Product',
      date: 'November 17, 2024',
      excerpt: 'RUNFLAT Tire Systems introduces a revolutionary tire solution designed for extreme durability and performance in off-road and armored vehicles.',
    },
    {
      title: 'Expanding to Global Markets',
      date: 'October 25, 2024',
      excerpt: 'Our company is proud to announce the expansion of our tire systems into international markets, bringing superior solutions to a global customer base.',
    }
  ];

  return (
    <div className="news-page">
      <Navbar />
      <Hero2 backgroundImage={background_img} />
      <div className="news-container">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-article">
            <h2>{article.title}</h2>
            <p className="author-date">{article.author ? article.author : ''} | {article.date}</p>
            <p className="excerpt">{article.excerpt}</p>
            {/* <a href="#" className="read-more">Read more</a> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default News;
