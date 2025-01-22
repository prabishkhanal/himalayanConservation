import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink, Events  } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Programs', to: 'programs' },
    { name: 'About Us', to: 'about' },
    { name: 'Initiatives', to: 'initiatives' },
    { name: 'Our Team', to: 'team' },
    { name: 'Contact', to: 'contact' }
  ];

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
          className="nav-link"
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
          Himalayan Conservation
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
