import React from 'react';
import { Container } from 'react-bootstrap';
import './Legal.css';

const TermsOfUse = () => {
  return (
    <div className="legal-page">
      <Container>
        <h1>Terms of Use</h1>
        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the The Himalayan Conservancy website, you accept and agree to be bound by the terms and provisions of this agreement.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the materials on The Himalayan Conservancy's website for personal, non-commercial viewing only.</p>

          <h2>3. Disclaimer</h2>
          <p>The materials on The Himalayan Conservancy's website are provided on an 'as is' basis. The Himalayan Conservancy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall The Himalayan Conservancy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.</p>

          <h2>5. Accuracy of Materials</h2>
          <p>The materials appearing on The Himalayan Conservancy's website could include technical, typographical, or photographic errors. The Himalayan Conservancy does not warrant that any of the materials on its website are accurate, complete, or current.</p>

          <h2>6. Links</h2>
          <p>The Himalayan Conservancy has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Himalayan Conservancy of the site.</p>

          <h2>7. Modifications</h2>
          <p>The Himalayan Conservancy may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>

          <h2>8. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Nepal and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </div>
      </Container>
    </div>
  );
};

export default TermsOfUse;
