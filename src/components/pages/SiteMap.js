import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome, FaImages, FaInfoCircle, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';

const SiteMapContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto 0;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
`;

const SiteMapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Section = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled(motion.li)`
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.text};
  text-decoration: none;
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.small};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
  }

  svg {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`;

const SiteMap = () => {
  const siteStructure = {
    main: [
      { path: '/', label: 'Home', icon: <FaHome /> },
    ],
    bridges: [
      { path: '/bridges', label: 'All Bridges', icon: <FaImages /> },
      { path: '/bridges/historical', label: 'Historical Bridges', icon: <FaImages /> },
      { path: '/bridges/modern', label: 'Modern Bridges', icon: <FaImages /> },
      { path: '/bridges/iconic', label: 'Iconic Bridges', icon: <FaImages /> },
    ],
    gallery: [
      { path: '/gallery', label: 'Photo Gallery', icon: <FaImages /> },
      { path: '/gallery/featured', label: 'Featured Photos', icon: <FaImages /> },
      { path: '/gallery/360', label: '360° Views', icon: <FaImages /> },
    ],
    about: [
      { path: '/about', label: 'About Us', icon: <FaInfoCircle /> },
      { path: '/about/team', label: 'Our Team', icon: <FaInfoCircle /> },
      { path: '/about/mission', label: 'Our Mission', icon: <FaInfoCircle /> },
    ],
    contact: [
      { path: '/contact', label: 'Contact Us', icon: <FaEnvelope /> },
      { path: '/contact/feedback', label: 'Feedback', icon: <FaEnvelope /> },
      { path: '/contact/support', label: 'Support', icon: <FaEnvelope /> },
    ],
    help: [
      { path: '/faq', label: 'FAQ', icon: <FaQuestionCircle /> },
      { path: '/help/guides', label: 'User Guides', icon: <FaQuestionCircle /> },
      { path: '/help/resources', label: 'Resources', icon: <FaQuestionCircle /> },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SiteMapContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Site Map
      </Title>
      <Description
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the complete structure of our website and find what you're looking for.
      </Description>

      <SiteMapGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(siteStructure).map(([section, links]) => (
          <Section key={section} variants={itemVariants}>
            <SectionTitle>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </SectionTitle>
            <LinkList>
              {links.map((link, index) => (
                <LinkItem key={index} variants={itemVariants}>
                  <StyledLink to={link.path}>
                    {link.icon}
                    {link.label}
                    <FaChevronRight />
                  </StyledLink>
                </LinkItem>
              ))}
            </LinkList>
          </Section>
        ))}
      </SiteMapGrid>
    </SiteMapContainer>
  );
};

export default SiteMap; 