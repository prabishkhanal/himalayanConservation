import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './Legal.css';

const FAQ = () => {
  const faqs = [
    {
      question: "How can I get involved with Himalayan Conservation?",
      answer: "There are several ways to get involved: volunteer for our programs, make a donation, participate in our events, or spread awareness about our cause through social media."
    },
    {
      question: "Where does my donation go?",
      answer: "85% of donations go directly to conservation programs, including wildlife protection, reforestation, and community development. The remaining 15% covers administrative costs and fundraising efforts."
    },
    {
      question: "Can I volunteer from outside Nepal?",
      answer: "Yes! We offer both remote and on-site volunteering opportunities. Remote volunteers can help with research, social media, fundraising, and awareness campaigns."
    },
    {
      question: "How do you work with local communities?",
      answer: "We partner with local communities through education programs, sustainable livelihood initiatives, and traditional knowledge preservation projects. Local communities are key stakeholders in our conservation efforts."
    },
    {
      question: "What are your main conservation priorities?",
      answer: "Our main priorities include protecting endangered species, restoring forest ecosystems, promoting sustainable tourism, and empowering local communities through conservation-based initiatives."
    },
    {
      question: "How can I report wildlife crimes?",
      answer: "You can report wildlife crimes through our confidential hotline or email. All reports are treated with strict confidentiality and shared with relevant authorities."
    },
    {
      question: "Do you offer educational programs?",
      answer: "Yes, we provide environmental education programs for schools, universities, and community groups. We also offer specialized training in conservation techniques and sustainable practices."
    },
    {
      question: "How can I stay updated about your work?",
      answer: "Subscribe to our newsletter, follow us on social media, or become a member to receive regular updates about our conservation efforts and upcoming events."
    }
  ];

  return (
    <div className="legal-page">
      <Container>
        <h1>Frequently Asked Questions</h1>
        <div className="legal-content">
          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="mt-5">
            <h2>Still Have Questions?</h2>
            <p>Contact us at:</p>
            <p>Email: info@himalayanconservation.org<br />
            Phone: [Phone Number]<br />
            Hours: Monday-Friday, 9:00 AM - 5:00 PM (Nepal Time)</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
