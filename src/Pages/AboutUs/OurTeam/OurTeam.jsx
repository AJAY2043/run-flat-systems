import React from 'react';
import './OurTeam.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/150',
      bio: 'John has over 15 years of experience in tire manufacturing and innovation.',
    },
    {
      name: 'Jane Smith',
      role: 'Head of Operations',
      image: 'https://via.placeholder.com/150',
      bio: 'Jane oversees the smooth functioning of operations with a focus on quality.',
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Engineer',
      image: 'https://via.placeholder.com/150',
      bio: 'Emily is the brain behind our cutting-edge RUNFLAT tire technologies.',
    },
    {
      name: 'Michael Brown',
      role: 'Marketing Manager',
      image: 'https://via.placeholder.com/150',
      bio: 'Michael ensures our products reach the right audience with impactful campaigns.',
    },
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
