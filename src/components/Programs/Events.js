import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Events.css';

const Events = () => {
  const events = [
    {
      date: '2025-04-15',
      title: 'Himalayan Cleanup Drive',
      description: 'Join us for a massive cleanup initiative across popular trekking routes in the Himalayas.',
      location: 'Kathmandu, Nepal',
      image: 'event1.jpg'
    },
    {
      date: '2025-05-22',
      title: 'Wildlife Conservation Workshop',
      description: 'Learn about endangered Himalayan species and conservation strategies from leading experts.',
      location: 'Darjeeling, India',
      image: 'event2.jpg'
    },
    {
      date: '2025-06-10',
      title: 'Sustainable Tourism Conference',
      description: 'Explore innovative approaches to eco-tourism in the Himalayan region.',
      location: 'Thimphu, Bhutan',
      image: 'event3.jpg'
    },
    {
      date: '2025-07-05',
      title: 'Tree Planting Festival',
      description: 'Participate in our annual reforestation event to help restore Himalayan forests.',
      location: 'Pokhara, Nepal',
      image: 'event4.jpg'
    }
  ];

  return (
    <section id="events" className="events-section">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Upcoming Events</h2>
          <p>Join us in our conservation efforts through these exciting events</p>
        </div>

        <Row>
          {events.map((event, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div className="event-card">
                <div className="event-date">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{event.location}</span>
                  </div>
                  <Button variant="outline-primary" className="mt-3">
                    Learn More
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="primary" size="lg">
            View All Events
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Events;
