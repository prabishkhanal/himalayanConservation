import React from 'react';
import { Container } from 'react-bootstrap';
import './Legal.css';

const Nondiscrimination = () => {
  return (
    <div className="legal-page">
      <Container>
        <h1>Notice of Nondiscrimination</h1>
        <div className="legal-content">
          <h2>Our Commitment</h2>
          <p>Himalayan Conservation is committed to providing an inclusive and welcoming environment for all members of our staff, volunteers, partners, and the communities we serve.</p>

          <h2>Nondiscrimination Policy</h2>
          <p>We do not discriminate on the basis of:</p>
          <ul>
            <li>Race, color, or national origin</li>
            <li>Religion or creed</li>
            <li>Gender, gender identity, or gender expression</li>
            <li>Sexual orientation</li>
            <li>Age</li>
            <li>Disability</li>
            <li>Veteran status</li>
            <li>Genetic information</li>
            <li>Any other characteristic protected by applicable law</li>
          </ul>

          <h2>Scope of Policy</h2>
          <p>This policy applies to all aspects of our operations, including:</p>
          <ul>
            <li>Employment and hiring practices</li>
            <li>Program participation and benefits</li>
            <li>Volunteer opportunities</li>
            <li>Community engagement</li>
            <li>Partnership selection</li>
          </ul>

          <h2>Reporting Discrimination</h2>
          <p>If you believe you have experienced discrimination in any of our programs or activities, please contact our Ethics Officer at ethics@himalayanconservation.org</p>

          <h2>Legal Compliance</h2>
          <p>This policy complies with all applicable laws and regulations regarding nondiscrimination.</p>
        </div>
      </Container>
    </div>
  );
};

export default Nondiscrimination;
