import React from 'react';
import './OurTeam.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';


const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Vivek Japala',
      role: 'Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Vivek has over 15 years of experience in tire manufacturing and innovation.',
    },
    {
      name: 'Vivek Japala',
      role: 'Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Vivek oversees the smooth functioning of operations with a focus on quality.',
    },
    {
      name: 'Vivek Japala',
      role: 'Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Vivek is the brain behind our cutting-edge RUNFLAT tire technologies.',
    }
     ];

  return (
    <div className="our-team-container">
      <Navbar />
      <div className="team-hero">
        <h1>Meet Our Team</h1>
        <p>
          At RUNFLAT Tire Systems, our team is our greatest asset. Together, we innovate,
          create, and deliver industry-leading tire solutions.
        </p>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
