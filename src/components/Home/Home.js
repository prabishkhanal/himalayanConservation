import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-overlay">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col md={8} className="text-center mx-auto">
              <h1 className="display-3 text-white mb-4 animate__animated animate__fadeInDown">
                Himalayan Conservation Initiative
              </h1>
              <p className="lead text-white mb-5 animate__animated animate__fadeInUp">
                Protecting the Sacred Mountains, Preserving Our Heritage
              </p>
              <p className="text-white mb-5 animate__animated animate__fadeInUp">
                Join us in our mission to conserve the Himalayan ecosystem, support local communities, and promote sustainable practices
              </p>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary btn-lg animate__animated animate__fadeInUp"
              >
                Learn More
              </ScrollLink>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Home;
