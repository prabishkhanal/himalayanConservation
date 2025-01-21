import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <ScrollLink
          key={item.to}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          activeClass="active"
        >
          {item.name}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          key={item.to}
          to={`/#${item.to}`}
          className="nav-link"
        >
          {item.name}
        </RouterLink>
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
        <RouterLink to="/" className="navbar-brand">
          Himalayan Conservation
        </RouterLink>
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
