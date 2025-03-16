import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './Library.css';

const Library = () => {
  const libraryCategories = [
    {
      title: 'Research Papers',
      items: [
        { title: 'Himalayan Biodiversity Study', year: 2024, author: 'Dr. Sharma' },
        { title: 'Climate Change Impacts', year: 2023, author: 'Dr. Wang' }
      ]
    },
    {
      title: 'Educational Materials',
      items: [
        { title: 'Conservation Handbook', year: 2022, author: 'Himalayan Conservancy' },
        { title: 'Sustainable Practices Guide', year: 2021, author: 'Green Initiative' }
      ]
    }
  ];

  return (
    <section id="library" className="library-section">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Library</h2>
          <p>Explore our collection of conservation resources</p>
        </div>

        <Accordion defaultActiveKey="0">
          {libraryCategories.map((category, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{category.title}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  {category.items.map((item, itemIndex) => (
                    <Col md={6} key={itemIndex} className="mb-3">
                      <div className="library-item">
                        <h5>{item.title}</h5>
                        <div className="library-meta">
                          <span>{item.year}</span>
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default Library;
