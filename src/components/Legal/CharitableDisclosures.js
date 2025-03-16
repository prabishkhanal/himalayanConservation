import React from 'react';
import { Container } from 'react-bootstrap';
import './Legal.css';

const CharitableDisclosures = () => {
  return (
    <div className="legal-page">
      <Container>
        <h1>Charitable Solicitation Disclosures</h1>
        <div className="legal-content">
          <h2>Registration Information</h2>
          <p>The Himalayan Conservancy is a registered non-profit organization in Nepal. Our registration number is [Registration Number].</p>

          <h2>Financial Information</h2>
          <p>We are committed to transparency in our financial operations. Our annual reports and financial statements are available upon request.</p>

          <h2>Use of Donations</h2>
          <p>Approximately 85% of all donations go directly to conservation programs. The remaining 15% is used for administrative costs and fundraising efforts.</p>

          <h2>State-Specific Disclosures</h2>
          <p>Financial and additional information about our organization is available upon request.</p>

          <h2>Contact Information</h2>
          <p>For additional information about our charitable solicitation practices, please contact:</p>
          <p>The Himalayan Conservancy<br />
          [Address]<br />
          Phone: [Phone Number]<br />
          Email: info@himalayanconservation.org</p>
        </div>
      </Container>
    </div>
  );
};

export default CharitableDisclosures;
