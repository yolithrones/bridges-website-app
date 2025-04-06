import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import Button from '../common/Button';

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeroBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  cursor: pointer;

  span {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <HeroSection>
      <HeroBackground style={{ y }}>
        <img
          src="/images/hero-bridge.jpg"
          alt="Beautiful Bridge"
          loading="eager"
        />
      </HeroBackground>

      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the World's Most Incredible Bridges
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From ancient marvels to modern engineering feats, explore the beauty and
          innovation of bridges across the globe.
        </Subtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary" size="large">
            Explore Bridges
          </Button>
          <Button variant="outline" size="large" color="light">
            Learn More
          </Button>
        </ButtonGroup>
      </HeroContent>

      <ScrollIndicator
        style={{ opacity }}
        onClick={scrollToContent}
        whileHover={{ y: 5 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          ↓
        </motion.div>
        <span>Scroll to explore</span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 