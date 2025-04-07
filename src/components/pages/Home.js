import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/themes/theme';
import Hero from '../layout/Hero';
import Button from '../common/Button';
import { FaArrowRight, FaMapMarkerAlt, FaHistory, FaCamera } from 'react-icons/fa';

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${props => props.background || theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${theme.typography.h2.fontSize};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const CTAButton = styled(Button)`
  margin-top: ${theme.spacing.md};
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const ImageCard = styled(motion.div)`
  position: relative;
  height: 200px;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.md};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <HomeContainer>
      <Hero />

      <Section style={{ marginTop: '80px' }}>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Amazing Bridges
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our collection of the world's most incredible bridges, from ancient architectural wonders to modern engineering marvels.
          </SectionDescription>

          <FeatureGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <FeatureCard variants={itemVariants}>
              <FeatureIcon>
                <FaMapMarkerAlt />
              </FeatureIcon>
              <FeatureTitle>Global Collection</FeatureTitle>
              <FeatureDescription>
                Discover bridges from every continent, each with its own unique story and architectural significance.
              </FeatureDescription>
              <CTAButton as={Link} to="/bridges">
                Explore Bridges <FaArrowRight />
              </CTAButton>
            </FeatureCard>

            <FeatureCard variants={itemVariants}>
              <FeatureIcon>
                <FaHistory />
              </FeatureIcon>
              <FeatureTitle>Historical Significance</FeatureTitle>
              <FeatureDescription>
                Learn about the historical importance and cultural impact of these architectural wonders.
              </FeatureDescription>
              <CTAButton as={Link} to="/bridges?category=historical">
                View History <FaArrowRight />
              </CTAButton>
            </FeatureCard>

            <FeatureCard variants={itemVariants}>
              <FeatureIcon>
                <FaCamera />
              </FeatureIcon>
              <FeatureTitle>Photo Gallery</FeatureTitle>
              <FeatureDescription>
                Browse through stunning photographs of bridges from different angles and perspectives.
              </FeatureDescription>
              <CTAButton as={Link} to="/gallery">
                View Gallery <FaArrowRight />
              </CTAButton>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </Section>

      <Section background={theme.colors.light}>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Bridges
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take a look at some of our most iconic bridges from around the world.
          </SectionDescription>

          <ImageGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ImageCard variants={itemVariants}>
              <img src="/images/iconic/golden_gate.jpg" alt="Golden Gate Bridge" />
              <ImageOverlay>
                <h3>Golden Gate Bridge</h3>
                <p>San Francisco, USA</p>
              </ImageOverlay>
            </ImageCard>
            <ImageCard variants={itemVariants}>
              <img src="/images/iconic/tower_bridge.jpg" alt="Tower Bridge" />
              <ImageOverlay>
                <h3>Tower Bridge</h3>
                <p>London, UK</p>
              </ImageOverlay>
            </ImageCard>
            <ImageCard variants={itemVariants}>
              <img src="/images/iconic/sydney_harbour.jpg" alt="Sydney Harbour Bridge" />
              <ImageOverlay>
                <h3>Sydney Harbour Bridge</h3>
                <p>Sydney, Australia</p>
              </ImageOverlay>
            </ImageCard>
          </ImageGrid>
        </Container>
      </Section>
    </HomeContainer>
  );
};

export default Home; 