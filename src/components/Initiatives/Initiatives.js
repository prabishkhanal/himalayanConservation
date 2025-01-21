import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Initiatives.css';
import img1 from '../../assets/images/img 1.jpg';
import img2 from '../../assets/images/img 2.jpg';
import img3 from '../../assets/images/img 3.jpg';
import img4 from '../../assets/images/img 4.jpg';



const Initiatives = () => {
  const initiatives = [
    {
      title: "Snow Leopard Conservation",
      description: "Protecting the endangered snow leopard population through habitat preservation, anti-poaching measures, and community-based conservation programs.",
      image: img1,
      goals: [
        "Increase snow leopard population by 20% by 2025",
        "Establish protected corridors across 1000 sq km",
        "Train 200 local conservation stewards"
      ],
      icon: "fas fa-cat"
    },
    {
      title: "Forest Restoration",
      description: "Restoring degraded forest ecosystems through native species plantation, sustainable forestry practices, and community engagement.",
      image: img2,
      goals: [
        "Plant 1 million native trees by 2024",
        "Restore 5000 hectares of degraded land",
        "Implement sustainable forestry in 20 communities"
      ],
      icon: "fas fa-tree"
    },
    {
      title: "Clean Water Initiative",
      description: "Protecting Himalayan watersheds and ensuring clean water access for local communities through conservation and sustainable management.",
      image:img3,
      goals: [
        "Protect 100 critical water sources",
        "Implement water conservation in 50 villages",
        "Reduce water pollution by 40%"
      ],
      icon: "fas fa-water"
    },
    {
      title: "Sustainable Tourism",
      description: "Developing eco-friendly tourism practices that benefit local communities while preserving the natural environment.",
      image: img4,
      goals: [
        "Train 500 eco-tourism guides",
        "Establish 20 community-run homestays",
        "Create sustainable trekking routes"
      ],
      icon: "fas fa-hiking"
    }
  ];

  return (
    <section id="initiatives" className="initiatives-section">
      <Container>
        <div className="section-title text-center">
          <h2>Our Initiatives</h2>
          <p>Key Conservation Projects in the Himalayas</p>
        </div>

        <Row>
          {initiatives.map((initiative, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card className="initiative-card">
                <div className="initiative-image">
                  <Card.Img variant="top" src={initiative.image} alt={initiative.title} />
                  <div className="icon-overlay">
                    <i className={initiative.icon}></i>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{initiative.title}</Card.Title>
                  <Card.Text>{initiative.description}</Card.Text>
                  <div className="goals-section">
                    <h5>Key Goals:</h5>
                    <ul>
                      {initiative.goals.map((goal, goalIndex) => (
                        <li key={goalIndex}>
                          <i className="fas fa-check-circle"></i>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <button className="btn btn-learn-more">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="get-involved text-center mt-5">
          <h3>Want to Make a Difference?</h3>
          <p>Join us in our mission to preserve the Himalayan ecosystem for future generations.</p>
          <button className="btn btn-primary btn-lg">
            Get Involved <i className="fas fa-hands-helping ml-2"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Initiatives;
