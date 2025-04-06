import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Button from '../common/Button';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: ${theme.colors.secondary};
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.8rem;

    a {
      color: ${theme.colors.light};
      text-decoration: none;
      transition: color ${theme.transitions.default};

      &:hover {
        color: ${theme.colors.secondary};
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  input {
    flex: 1;
    padding: 0.8rem;
    border: none;
    border-radius: ${theme.borderRadius.small};
    background: rgba(255, 255, 255, 0.1);
    color: white;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.light};
  font-size: 0.9rem;
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p>
            Discover the world's most incredible bridges, from ancient marvels to
            modern engineering feats. Join us in exploring these architectural
            wonders.
          </p>
          <SocialLinks>
            <SocialIcon
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li>
              <a href="/historical">Historical Bridges</a>
            </li>
            <li>
              <a href="/modern">Modern Bridges</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Categories</h3>
          <FooterLinks>
            <li>
              <a href="/longest">Longest Bridges</a>
            </li>
            <li>
              <a href="/tallest">Tallest Bridges</a>
            </li>
            <li>
              <a href="/oldest">Oldest Bridges</a>
            </li>
            <li>
              <a href="/iconic">Iconic Bridges</a>
            </li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates and featured bridges.</p>
          <NewsletterForm onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" variant="secondary" size="small">
              Subscribe
            </Button>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Bridges Website. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 