import React from 'react';
import { Container } from 'react-bootstrap';
import './Legal.css';

const DMCA = () => {
  return (
    <div className="legal-page">
      <Container>
        <h1>DMCA Policy</h1>
        <div className="legal-content">
          <h2>Digital Millennium Copyright Act Notice</h2>
          <p>Himalayan Conservation respects the intellectual property rights of others and expects its users to do the same.</p>

          <h2>Reporting Copyright Infringement</h2>
          <p>To file a copyright infringement notification with us, you will need to send a written communication that includes:</p>
          <ul>
            <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright interest</li>
            <li>A description of the copyrighted work that you claim has been infringed</li>
            <li>A description of where the material you claim is infringing is located on the site</li>
            <li>Your address, telephone number, and email address</li>
            <li>A statement by you that you have a good faith belief that the disputed use is not authorized</li>
            <li>A statement by you that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf</li>
          </ul>

          <h2>Counter-Notification</h2>
          <p>If you believe your content was wrongly removed, you may file a counter-notification containing:</p>
          <ul>
            <li>Your physical or electronic signature</li>
            <li>Identification of the removed content and its original location</li>
            <li>A statement under penalty of perjury that you have a good faith belief the content was wrongly removed</li>
            <li>Your name, address, and phone number</li>
            <li>Your consent to local federal court jurisdiction</li>
          </ul>

          <h2>Contact Information</h2>
          <p>Send DMCA notices to:</p>
          <p>Copyright Agent<br />
          Himalayan Conservation<br />
          [Address]<br />
          Email: copyright@himalayanconservation.org</p>
        </div>
      </Container>
    </div>
  );
};

export default DMCA;
