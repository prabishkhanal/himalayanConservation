import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import projectImg1 from '../../assets/images/img 5.jpg'; // Reusing existing image, replace with actual project images later

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Snow Leopard Conservation',
      category: 'Wildlife Protection',
      description: 'Working to protect the endangered snow leopard population through habitat preservation, anti-poaching measures, and community education programs.',
      image: projectImg1,
      status: 'Ongoing',
      impact: 'Protected over 500 square kilometers of critical snow leopard habitat'
    },
    {
      id: 2,
      title: 'Sustainable Agriculture Initiative',
      category: 'Sustainable Practices',
      description: 'Helping local farmers adopt sustainable agricultural practices that preserve soil health, conserve water, and reduce environmental impact.',
      image: projectImg1,
      status: 'Ongoing',
      impact: 'Trained 200+ farmers in sustainable farming techniques'
    },
    {
      id: 3,
      title: 'Clean Water Access Program',
      category: 'Community Development',
      description: 'Improving access to clean water in remote Himalayan villages through installation of filtration systems and protection of natural water sources.',
      image: projectImg1,
      status: 'Completed',
      impact: 'Provided clean water access to 15 villages and over 5,000 residents'
    },
    {
      id: 4,
      title: 'Himalayan Medicinal Plants Preservation',
      category: 'Biodiversity',
      description: 'Documenting and preserving traditional knowledge of medicinal plants while ensuring sustainable harvesting practices.',
      image: projectImg1,
      status: 'Ongoing',
      impact: 'Documented over 150 medicinal plant species and established 3 conservation nurseries'
    },
    {
      id: 5,
      title: 'Glacier Monitoring Network',
      category: 'Climate Research',
      description: 'Establishing a network of monitoring stations to track glacier retreat and its impact on water resources and ecosystems.',
      image: projectImg1,
      status: 'Ongoing',
      impact: 'Monitoring 12 major glaciers with data spanning 10+ years'
    },
    {
      id: 6,
      title: 'Eco-Tourism Development',
      category: 'Sustainable Economy',
      description: 'Developing responsible tourism practices that benefit local communities while minimizing environmental impact on fragile ecosystems.',
      image: projectImg1,
      status: 'Ongoing',
      impact: 'Trained 50+ local guides and established 5 eco-friendly trekking routes'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="section-title text-center">
          <h2>Our Projects</h2>
          <p>Conservation Initiatives Across the Himalayan Region</p>
        </div>

        <div className="projects-filter mb-5">
          <ul className="filter-list">
            <li className="active">All Projects</li>
            <li>Wildlife Protection</li>
            <li>Sustainable Practices</li>
            <li>Community Development</li>
            <li>Climate Research</li>
          </ul>
        </div>

        <Row>
          {projects.map(project => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card className="project-card">
                <div className="project-image">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
                </div>
                <Card.Body>
                  <div className="project-category">{project.category}</div>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="project-impact">
                    <h5>Impact:</h5>
                    <p>{project.impact}</p>
                  </div>
                  <Button variant="outline-primary" className="mt-3">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="primary" size="lg" className="get-involved-btn">
            Get Involved
          </Button>
          <p className="mt-3">
            Interested in supporting our conservation efforts? 
            <a href="#contact" className="ms-2">Contact us</a> to learn how you can contribute.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
