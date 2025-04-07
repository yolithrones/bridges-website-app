import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import VisitorCounter from '../../components/common/VisitorCounter';


const HeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  margin-left: 50px;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: ${theme.colors.primary};
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <VisitorCounter/>
        <Logo to="/">Bridges of the World</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bridges">Bridges</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/travel">Travel</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
          <MobileNavLink to="/bridges" onClick={toggleMobileMenu}>Bridges</MobileNavLink>
          <MobileNavLink to="/gallery" onClick={toggleMobileMenu}>Gallery</MobileNavLink>
          <MobileNavLink to="/travel" onClick={toggleMobileMenu}>Travel</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMobileMenu}>About</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header; 