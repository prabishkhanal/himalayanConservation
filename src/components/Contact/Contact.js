import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Our Location',
      details: ['123 Conservation Way', 'Kathmandu, Nepal'],
      link: 'https://maps.google.com'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      details: ['+977 1234567890', '+977 9876543210'],
      link: 'tel:+9771234567890'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['info@himalayanconservation.org', 'support@himalayanconservation.org'],
      link: 'mailto:info@himalayanconservation.org'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      link: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-title text-center">
          <h2>Contact Us</h2>
          <p>Get in Touch with Our Conservation Team</p>
        </div>

        <Row className="contact-info-row">
          {contactInfo.map((info, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="contact-info-box">
                <div className="icon">
                  <i className={info.icon}></i>
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx}>
                    {info.link ? (
                      <a href={info.link} target={info.icon === 'fas fa-map-marker-alt' ? '_blank' : '_self'} rel="noopener noreferrer">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={6}>
            <div className="map-container">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949266!2d85.29111341878174!3d27.70895594440872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2s!4v1611567231520!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <div className="social-connect text-center">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <button
                  className="social-button"
                  onClick={() => window.open('https://facebook.com/HimalayanConservation', '_blank')}
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  className="social-button"
                  onClick={() => window.open('https://twitter.com/HimalayanConserv', '_blank')}
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="social-button"
                  onClick={() => window.open('https://instagram.com/himalayan.conservation', '_blank')}
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </button>
                <button
                  className="social-button"
                  onClick={() => window.open('https://linkedin.com/company/himalayan-conservation', '_blank')}
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
