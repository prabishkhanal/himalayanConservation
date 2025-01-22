import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About Us', to: 'about' },
    { name: 'Programs', to: 'programs' },
    { name: 'Initiatives', to: 'initiatives' },
    { name: 'Team', to: 'team' },
    { name: 'Contact', to: 'contact' }
  ];

  const initiatives = [
    'Snow Leopard Conservation',
    'Forest Restoration',
    'Clean Water Initiative',
    'Sustainable Tourism',
    'Wildlife Protection',
    'Community Development'
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://facebook.com/himalayanconservation' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/himalayancons' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/himalayanconservation' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/himalayan-conservation' }
  ];

  const legalLinks = [
    { name: 'Terms of Use', path: '/terms-of-use' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Charitable Disclosures', path: '/charitable-disclosures' },
    { name: 'Mobile Terms', path: '/mobile-terms' },
    { name: 'Nondiscrimination', path: '/nondiscrimination' },
    { name: 'LEP Procedure', path: '/lep' },
    { name: 'DMCA', path: '/dmca' },
    { name: 'FAQ', path: '/faq' }
  ];

  const renderQuickLink = (item) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="footer-link"
        >
          {item.name}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to="/"
          className="footer-link"
          onClick={() => {
            setTimeout(() => {
              const element = document.getElementById(item.to);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
        >
          {item.name}
        </RouterLink>
      );
    }
  };

  const renderInitiativeLink = (initiative) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to="initiatives"
          spy={true}
          smooth={true}
          duration={500}
          className="footer-link"
        >
          <i className="fas fa-chevron-right"></i> {initiative}
        </ScrollLink>
      );
    }
    return (
      <RouterLink to="/#initiatives" className="footer-link">
        <i className="fas fa-chevron-right"></i> {initiative}
      </RouterLink>
    );
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="footer-info">
                <h3>Himalayan Conservation</h3>
                <p className="about-text">
                  Dedicated to preserving the rich biodiversity and cultural heritage 
                  of the Himalayan region through sustainable conservation practices 
                  and community engagement.
                </p>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  {quickLinks.map((link) => (
                    <li key={link.to}>
                      {renderQuickLink(link)}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="footer-links">
                <h4>Our Initiatives</h4>
                <ul>
                  {initiatives.map((initiative, index) => (
                    <li key={index}>{renderInitiativeLink(initiative)}</li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="footer-newsletter">
                <h4>Newsletter</h4>
                <p>
                  Subscribe to our newsletter to receive updates about our conservation 
                  efforts and upcoming events.
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <button type="submit" className="btn btn-subscribe">
                    Subscribe <i className="fas fa-paper-plane"></i>
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row className="py-3">
            <Col className="text-center">
              <div className="legal-links">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <RouterLink to={link.path} className="footer-link">
                      {link.name}
                    </RouterLink>
                    {index < legalLinks.length - 1 && <span className="separator">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <div className="copyright">
                &copy; {currentYear} <strong>Himalayan Conservation</strong>. All Rights Reserved
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
