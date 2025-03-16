import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import './Resources.css';
import img1 from '../../assets/images/img 1.jpg';
import img2 from '../../assets/images/img 2.jpg';
import img3 from '../../assets/images/img 3.jpg';
import img4 from '../../assets/images/img 4.jpg';

const Resources = () => {
  const resourceCategories = [
    {
      id: 1,
      title: "Educational Materials",
      description: "Access free educational resources about Himalayan biodiversity, ecosystems, and conservation challenges.",
      image: img1,
      resources: [
        {
          title: "Himalayan Biodiversity Guide",
          type: "PDF",
          description: "Comprehensive guide to the unique biodiversity of the Himalayan region",
          link: "#"
        },
        {
          title: "Climate Change in the Himalayas",
          type: "Research Paper",
          description: "Analysis of climate change impacts on Himalayan ecosystems",
          link: "#"
        },
        {
          title: "Conservation Teaching Materials",
          type: "Lesson Plans",
          description: "K-12 educational materials about Himalayan conservation",
          link: "#"
        }
      ],
      icon: "fas fa-book"
    },
    {
      id: 2,
      title: "Research Publications",
      description: "Scientific research and publications from our conservation scientists and partner organizations.",
      image: img2,
      resources: [
        {
          title: "Snow Leopard Population Dynamics",
          type: "Journal Article",
          description: "Recent findings on snow leopard population trends in Nepal",
          link: "#"
        },
        {
          title: "Forest Restoration Techniques",
          type: "White Paper",
          description: "Best practices for native species reforestation in high-altitude regions",
          link: "#"
        },
        {
          title: "Water Resource Management",
          type: "Case Study",
          description: "Community-based watershed management success stories",
          link: "#"
        }
      ],
      icon: "fas fa-microscope"
    },
    {
      id: 3,
      title: "Community Resources",
      description: "Tools and resources for communities engaged in conservation and sustainable development.",
      image: img3,
      resources: [
        {
          title: "Sustainable Agriculture Handbook",
          type: "Guide",
          description: "Techniques for sustainable farming in mountain ecosystems",
          link: "#"
        },
        {
          title: "Eco-Tourism Development Toolkit",
          type: "Toolkit",
          description: "Resources for communities developing sustainable tourism initiatives",
          link: "#"
        },
        {
          title: "Conservation Grant Writing Guide",
          type: "Template",
          description: "Templates and tips for community conservation grant applications",
          link: "#"
        }
      ],
      icon: "fas fa-users"
    },
    {
      id: 4,
      title: "Multimedia Library",
      description: "Videos, photos, and interactive media showcasing our conservation work and the beauty of the Himalayas.",
      image: img4,
      resources: [
        {
          title: "Himalayan Wildlife Documentary Series",
          type: "Video",
          description: "Award-winning documentary series on Himalayan wildlife",
          link: "#"
        },
        {
          title: "Conservation Photography Collection",
          type: "Photo Gallery",
          description: "High-resolution images of landscapes, wildlife, and conservation activities",
          link: "#"
        },
        {
          title: "Voices from the Mountains",
          type: "Audio Series",
          description: "Interviews with local community members and conservation leaders",
          link: "#"
        }
      ],
      icon: "fas fa-photo-video"
    }
  ];

  const faqs = [
    {
      question: "How can I access your educational resources?",
      answer: "All our educational resources are freely available on our website. Simply browse the Educational Materials section and click on the resource you're interested in. Some resources may require creating a free account to download."
    },
    {
      question: "Can I use your materials for my classroom or educational program?",
      answer: "Yes! Our educational resources are designed to be used in classrooms, community programs, and other educational settings. We provide these materials under a Creative Commons license that allows for educational use with attribution."
    },
    {
      question: "How can I contribute to your research efforts?",
      answer: "There are several ways to contribute to our research. You can participate in our citizen science programs, volunteer for field research projects, or if you're a researcher, collaborate with our science team on joint studies. Contact our research department for more information."
    },
    {
      question: "Do you offer resources in languages other than English?",
      answer: "Yes, many of our resources are available in multiple languages, including Nepali, Hindi, Tibetan, and Chinese. We're continually working to translate our materials into more local languages to better serve Himalayan communities."
    },
    {
      question: "How can I stay updated on new resources?",
      answer: "Subscribe to our monthly newsletter to receive updates on new resources, research publications, and multimedia content. You can also follow us on social media for regular updates."
    }
  ];

  return (
    <section id="resources" className="resources-section">
      <Container>
        <div className="section-title text-center">
          <h2>Resources</h2>
          <p>Knowledge and Tools for Conservation</p>
        </div>

        <Row>
          {resourceCategories.map((category) => (
            <Col lg={6} className="mb-4" key={category.id}>
              <Card className="resource-card">
                <div className="resource-image">
                  <Card.Img variant="top" src={category.image} alt={category.title} />
                  <div className="icon-overlay">
                    <i className={category.icon}></i>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <div className="resources-list">
                    <h5>Available Resources:</h5>
                    <ul>
                      {category.resources.map((resource, index) => (
                        <li key={index}>
                          <div className="resource-item">
                            <div className="resource-info">
                              <h6>{resource.title}</h6>
                              <span className="resource-type">{resource.type}</span>
                              <p>{resource.description}</p>
                            </div>
                            <a href={resource.link} className="resource-download">
                              <i className="fas fa-download"></i>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <button className="btn btn-view-all">
                    View All Resources <i className="fas fa-arrow-right"></i>
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="faq-section mt-5">
          <div className="section-title text-center mb-5">
            <h3>Frequently Asked Questions</h3>
            <p>Common questions about our resources</p>
          </div>
          
          <Accordion defaultActiveKey="0" className="faq-accordion">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <span className="faq-question">{faq.question}</span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq-answer">{faq.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div className="resource-request text-center mt-5">
          <h3>Can't Find What You're Looking For?</h3>
          <p>Our team is here to help you find the resources you need for your conservation efforts.</p>
          <button className="btn btn-primary btn-lg">
            Request Resources <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Resources;
