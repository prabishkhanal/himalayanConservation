import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink, Events } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check which section is currently in view
      if (isHomePage) {
        const sections = ['home', 'about', 'projects', 'events', 'news', 'resources', 'library', 'donate'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    // Initialize react-scroll events
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up react-scroll events
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, [isHomePage]);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About Us', to: 'about' },
    { name: 'Our Projects', to: 'projects' },
    { name: 'Events', to: 'events' },
    { name: 'News', to: 'news' },
    { name: 'Resources', to: 'resources' },
    { name: 'Library', to: 'library' },
    { name: 'Donate', to: 'donate' }
  ];

  // Function to determine if a nav item should be active
  const isNavItemActive = (item) => {
    if (item.to === 'about' && (activeSection === 'about' || activeSection === 'team')) {
      return true;
    }
    return activeSection === item.to;
  };

  const renderNavLink = (item) => {
    if (isHomePage) {
      return (
        <Nav.Link
          as={ScrollLink}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-65}
          duration={500}
          className={`nav-link ${isNavItemActive(item) ? 'active' : ''}`}
          activeClass="active"
        >
          {item.name}
        </Nav.Link>
      );
    } else {
      return (
        <Nav.Link
          as={RouterLink}
          to="/"
          className="nav-link"
          onClick={() => {
            setTimeout(() => {
              const element = document.getElementById(item.to);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
          }}
        >
          {item.name}
        </Nav.Link>
      );
    }
  };

  const navbarClasses = [
    'navbar-custom',
    isScrolled ? 'navbar-scrolled' : '',
    isHomePage && !isScrolled ? 'transparent' : ''
  ].filter(Boolean).join(' ');

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={navbarClasses}
    >
      <Container>
        <Navbar.Brand as={RouterLink} to="/">
          The Himalayan Conservancy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(item => (
              <Nav.Item key={item.to}>
                {renderNavLink(item)}
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
