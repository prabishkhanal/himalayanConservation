import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './News.css';
import newsImg1 from '../../assets/images/img 5.jpg';
import newsImg2 from '../../assets/images/img 6.jpg';

const News = () => {
  const newsItems = [
    {
      date: '2025-03-15',
      title: 'New Conservation Initiative Launched',
      description: 'We are excited to announce a new program focused on protecting endangered species in the Himalayas.',
      image: newsImg1
    },
    {
      date: '2025-03-10',
      title: 'Community Workshop Success',
      description: 'Our recent workshop on sustainable farming practices was attended by over 200 participants.',
      image: newsImg2
    }
  ];

  return (
    <section id="news" className="news-section">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Latest News</h2>
          <p>Stay updated with our conservation efforts and achievements</p>
        </div>

        <Row>
          {newsItems.map((news, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="news-card">
                <Card.Img variant="top" src={news.image} alt={news.title} />
                <Card.Body>
                  <div className="news-date">{new Date(news.date).toLocaleDateString()}</div>
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Text>{news.description}</Card.Text>
                  <button className="btn btn-read-more">Read More</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default News;
