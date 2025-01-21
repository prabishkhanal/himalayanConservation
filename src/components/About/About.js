import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import img5 from '../../assets/images/img 5.jpg';

const About = () => {
  const stats = [
    { number: '25+', text: 'Years of Conservation' },
    { number: '100+', text: 'Conservation Projects' },
    { number: '50K+', text: 'Community Members' },
    { number: '1000+', text: 'Volunteers' }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-title text-center">
          <h2>About Us</h2>
          <p>Dedicated to Preserving the Himalayan Ecosystem</p>
        </div>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <h3>Our Mission</h3>
              <p>
                The Himalayan Conservation Initiative is dedicated to preserving the rich biodiversity 
                and cultural heritage of the Himalayan region. We work tirelessly to protect endangered 
                species, restore critical habitats, and promote sustainable practices among local communities.
              </p>
              
              <h3>Our Vision</h3>
              <p>
                We envision a future where the Himalayan ecosystem thrives in harmony with human 
                communities, where traditional knowledge is preserved and valued, and where sustainable 
                practices ensure the region's natural heritage for generations to come.
              </p>

              <div className="key-points">
                <Row>
                  <Col md={6}>
                    <div className="point">
                      <i className="fas fa-leaf"></i>
                      <h4>Biodiversity Protection</h4>
                      <p>Preserving the unique flora and fauna of the Himalayas</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="point">
                      <i className="fas fa-hands-helping"></i>
                      <h4>Community Partnership</h4>
                      <p>Working with local communities for sustainable conservation</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="point">
                      <i className="fas fa-tree"></i>
                      <h4>Habitat Restoration</h4>
                      <p>Restoring and protecting critical wildlife habitats</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="point">
                      <i className="fas fa-book-reader"></i>
                      <h4>Education & Research</h4>
                      <p>Advancing conservation through research and education</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-image">
              <img src={img5} alt="Himalayan landscape" className="img-fluid rounded shadow" />
              <div className="stats-container">
                <Row>
                  {stats.map((stat, index) => (
                    <Col md={6} key={index}>
                      <div className="stat-item">
                        <h3>{stat.number}</h3>
                        <p>{stat.text}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
