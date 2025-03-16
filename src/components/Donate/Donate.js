import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Donate.css';

const Donate = () => {
  return (
    <section id="donate" className="donate-section">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Support Our Cause</h2>
          <p>Your contribution helps us protect the Himalayan ecosystem</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="donation-options">
              <h3>Choose Your Donation Amount</h3>
              <Row className="mb-4">
                <Col>
                  <Button variant="outline-primary" className="donation-amount">$25</Button>
                </Col>
                <Col>
                  <Button variant="outline-primary" className="donation-amount">$50</Button>
                </Col>
                <Col>
                  <Button variant="outline-primary" className="donation-amount">$100</Button>
                </Col>
                <Col>
                  <Button variant="outline-primary" className="donation-amount">Other</Button>
                </Col>
              </Row>
            </div>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Payment Information</Form.Label>
                <Form.Control type="text" placeholder="Card number" />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" size="lg">
                  Make a Donation
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Donate;
