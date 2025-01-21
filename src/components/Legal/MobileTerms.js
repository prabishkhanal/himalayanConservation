import React from 'react';
import { Container } from 'react-bootstrap';
import './Legal.css';

const MobileTerms = () => {
  return (
    <div className="legal-page">
      <Container>
        <h1>Mobile Terms & Conditions</h1>
        <div className="legal-content">
          <h2>1. Mobile Services</h2>
          <p>These terms govern your use of our mobile website and any mobile applications we may develop.</p>

          <h2>2. Text Messaging</h2>
          <p>By providing your mobile number, you agree to receive text messages about our conservation efforts, campaigns, and donation opportunities. Message and data rates may apply.</p>

          <h2>3. Mobile Donations</h2>
          <p>When making donations through our mobile platform:</p>
          <ul>
            <li>All transactions are secured using industry-standard encryption</li>
            <li>You will receive a confirmation message for each donation</li>
            <li>Mobile carrier fees may apply</li>
          </ul>

          <h2>4. Opt-Out Instructions</h2>
          <p>To stop receiving text messages, reply STOP to any message. Reply HELP for assistance.</p>

          <h2>5. Mobile Privacy</h2>
          <p>Our Privacy Policy applies to all mobile services. We do not share your mobile number with third parties for marketing purposes.</p>

          <h2>6. Technical Requirements</h2>
          <p>Our mobile services require a compatible device with internet access. Some features may require location services to be enabled.</p>

          <h2>7. Changes to Mobile Terms</h2>
          <p>We may update these mobile terms at any time. Continued use of our mobile services constitutes acceptance of any changes.</p>
        </div>
      </Container>
    </div>
  );
};

export default MobileTerms;
