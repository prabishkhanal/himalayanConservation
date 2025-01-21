import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      icon: 'fas fa-mountain',
      title: 'Ecosystem Protection',
      description: 'Safeguarding the diverse Himalayan ecosystems through research-based conservation programs and biodiversity monitoring.'
    },
    {
      icon: 'fas fa-users',
      title: 'Community Empowerment',
      description: 'Partnering with local communities to preserve traditional knowledge and promote sustainable livelihood practices.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Reforestation Initiatives',
      description: 'Leading reforestation projects to restore Himalayan forests and protect endangered plant species.'
    },
    {
      icon: 'fas fa-paw',
      title: 'Wildlife Conservation',
      description: 'Protecting endangered Himalayan species through habitat preservation and anti-poaching initiatives.'
    }
  ];

  return (
    <section id="programs" className="programs-section">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Conservation Programs</h2>
          <p>Making a lasting impact through targeted conservation initiatives</p>
        </div>

        <Row>
          {programs.map((program, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div className="program-card">
                <div className="icon-wrapper">
                  <i className={program.icon}></i>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Programs;
