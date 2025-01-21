import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Team.css';
import ppl1 from '../../assets/people/ppl1.jpg';
import ppl2 from '../../assets/people/ppl2.jpg';
import ppl3 from '../../assets/people/ppl3.jpg';
import ppl4 from '../../assets/people/ppl4.jpg';
const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      bio: "With over 15 years of experience in conservation biology, Dr. Johnson leads our strategic initiatives and partnerships across the Himalayan region.",
      image: ppl1,
      expertise: ["Conservation Biology", "Strategic Planning", "International Relations"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "Raj Sharma",
      role: "Field Operations Director",
      bio: "A native of Nepal with 12 years of experience in wildlife conservation and community engagement in the Himalayas.",
      image: ppl2,
      expertise: ["Wildlife Conservation", "Community Engagement", "Project Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "raj@example.com"
      }
    },
    {
      name: "Dr. Ming Chen",
      role: "Research Lead",
      bio: "Specializing in high-altitude ecosystems, Dr. Chen brings valuable expertise in climate change impacts on Himalayan biodiversity.",
      image: ppl3,
      expertise: ["Climate Science", "Ecosystem Analysis", "Research Methods"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ming@example.com"
      }
    },
    {
      name: "Lisa Patel",
      role: "Community Outreach Manager",
      bio: "With a background in social work and environmental education, Lisa bridges the gap between conservation goals and community needs.",
      image: ppl4,
      expertise: ["Community Development", "Environmental Education", "Stakeholder Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@example.com"
      }
    },
    {
      name: "Tom Anderson",
      role: "Conservation Technology Specialist",
      bio: "Tom implements innovative technological solutions for wildlife monitoring and data collection across our conservation projects.",
      image: ppl1,
      expertise: ["Wildlife Monitoring", "GIS Mapping", "Data Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "tom@example.com"
      }
    },
    {
      name: "Dr. Amita Rai",
      role: "Policy Advisor",
      bio: "A former government consultant, Dr. Rai helps shape conservation policies and build relationships with governmental bodies.",
      image: ppl2,
      expertise: ["Environmental Policy", "Government Relations", "Conservation Law"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amita@example.com"
      }
    }
  ];

  return (
    <section id="team" className="team-section">
      <Container>
        <div className="section-title text-center">
          <h2>Our Team</h2>
          <p>Dedicated Professionals Working for Conservation</p>
        </div>

        <Row>
          {teamMembers.map((member, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <div className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-links">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`mailto:${member.social.email}`}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                  <div className="expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="join-team text-center mt-5">
          <h3>Join Our Team</h3>
          <p>Passionate about conservation? We're always looking for dedicated individuals to join our mission.</p>
          <button className="btn btn-primary btn-lg">
            View Opportunities <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Team;
