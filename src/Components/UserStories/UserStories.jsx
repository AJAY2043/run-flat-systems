import React from 'react';
import { FaUserCircle, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './UserStories.css';

const userStoriesData = [
  {
    id: 1,
    name: 'Emily Johnson',
    story: 'RunFlat Tires transformed my daily commute. Now I drive with peace of mind knowing my tires are reliable and safe.',
    image: '/path/to/emily.jpg',
  },
  {
    id: 2,
    name: 'Michael Brown',
    story: 'I drove over 5,000 miles across rough terrains with RunFlat tires, and they held up amazingly well. Truly a great investment!',
    image: '/path/to/michael.jpg',
  },
  {
    id: 3,
    name: 'Sarah Wilson',
    story: 'RunFlat Tires have been a game-changer. I no longer worry about unexpected tire issues during my long drives.',
    image: '/path/to/sarah.jpg',
  },
];

const UserStories = () => {
  return (
    <section className="user-stories">
      <h2>Our User's Stories</h2>
      <div className="stories-container">
        {userStoriesData.map((story) => (
          <div key={story.id} className="story-card">
            <div className="story-image">
              {story.image ? (
                <img src={story.image} alt={story.name} />
              ) : (
                <FaUserCircle className="default-user-icon" />
              )}
            </div>
            <div className="story-content">
              <FaQuoteLeft className="quote-icon" />
              <p>{story.story}</p>
              <FaQuoteRight className="quote-icon" />
            </div>
            <div className="story-info">
              <h3>{story.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserStories;
