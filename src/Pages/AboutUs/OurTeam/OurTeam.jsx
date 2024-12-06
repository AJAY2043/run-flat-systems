import React from 'react';
import './OurTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Vivek Japala',
      role: 'Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Vivek has over 15 years of experience in tire manufacturing and innovation.',
      phone: '123-456-7890',
    },
    {
      name: 'Ananya Reddy',
      role: 'Operations Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Ananya oversees the smooth functioning of operations with a focus on quality.',
      phone: '987-654-3210',
    },
    {
      name: 'Ravi Kumar',
      role: 'Lead Engineer',
      image: 'https://via.placeholder.com/150',
      bio: 'Ravi is the brain behind our cutting-edge Runflat Tire Systems technologies.',
      phone: '456-789-1230',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="our-team-container">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-bio">{member.bio}</p>
            <div className="team-member-contact">
              <FontAwesomeIcon icon={faPhone} className="team-member-icon" />
              <span>{member.phone}</span>
            </div>
            <div className="team-member-social">
              <FontAwesomeIcon icon={faBriefcase} className="team-member-icon" />
              <span>LinkedIn</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default OurTeam;
