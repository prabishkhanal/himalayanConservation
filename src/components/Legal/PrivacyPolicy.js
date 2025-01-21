import React from 'react';
import { Container } from 'react-bootstrap';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <Container>
        <h1>Privacy Policy</h1>
        <div className="legal-content">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including when you make a donation, sign up for our newsletter, or contact us for support.</p>

          <h2>2. Use of Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your donations and provide tax receipts</li>
            <li>Send you newsletters and updates about our conservation efforts</li>
            <li>Respond to your questions and comments</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

          <h2>5. Cookies</h2>
          <p>We use cookies to enhance your experience on our website. You can set your browser to refuse cookies, but some features of our website may not function properly.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of communications</li>
          </ul>

          <h2>7. Changes to Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

          <h2>8. Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at privacy@himalayanconservation.org</p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
