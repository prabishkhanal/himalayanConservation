import React from 'react';
import { Container } from 'react-bootstrap';
import './Legal.css';

const LEP = () => {
  return (
    <div className="legal-page">
      <Container>
        <h1>Limited English Proficiency (LEP) Procedure</h1>
        <div className="legal-content">
          <h2>Purpose</h2>
          <p>This procedure ensures meaningful access to our programs and activities for persons with limited English proficiency.</p>

          <h2>Language Assistance Services</h2>
          <p>We provide the following services:</p>
          <ul>
            <li>Oral interpretation services</li>
            <li>Written translation of vital documents</li>
            <li>Bilingual staff assistance</li>
            <li>Community outreach in multiple languages</li>
          </ul>

          <h2>Available Languages</h2>
          <p>We currently provide services in:</p>
          <ul>
            <li>English</li>
            <li>Nepali</li>
            <li>Hindi</li>
            <li>Tibetan</li>
            <li>Chinese</li>
          </ul>

          <h2>Requesting Language Assistance</h2>
          <p>To request language assistance, please contact:</p>
          <p>Language Access Coordinator<br />
          Phone: [Phone Number]<br />
          Email: language@himalayanconservation.org</p>

          <h2>Staff Training</h2>
          <p>Our staff receives regular training on:</p>
          <ul>
            <li>LEP policies and procedures</li>
            <li>Working with interpreters</li>
            <li>Cultural sensitivity</li>
            <li>Language access resources</li>
          </ul>

          <h2>Monitoring and Updates</h2>
          <p>We regularly review and update our language assistance services based on community needs and feedback.</p>
        </div>
      </Container>
    </div>
  );
};

export default LEP;
