import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/themes/theme';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? theme.shadows.small : 'none'};
  transition: all ${theme.transitions.default};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.secondary};
    transition: width ${theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: white;
    padding: 2rem;
    box-shadow: ${theme.shadows.large};
  }
`;

const MobileNavLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid ${theme.colors.light};
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">
          <img src="/logo.svg" alt="Bridges Logo" />
          Bridges
        </Logo>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/historical">Historical</NavLink>
          <NavLink to="/modern">Modern</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/historical" onClick={() => setMobileMenuOpen(false)}>Historical</MobileNavLink>
              <MobileNavLink to="/modern" onClick={() => setMobileMenuOpen(false)}>Modern</MobileNavLink>
              <MobileNavLink to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 