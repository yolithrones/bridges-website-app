import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const TickerContainer = styled.div`
  background-color: ${theme.colors.secondary};
  color: white;
  padding: 0.5rem 0;
  overflow: hidden;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 999;
`;

const TickerContent = styled(motion.div)`
  display: flex;
  gap: 2rem;
  white-space: nowrap;
`;

const TickerItem = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const Ticker = () => {
  const tickerItems = [
    "Welcome to Bridges of the World!",
    "Discover the most beautiful bridges across the globe",
    "New bridge added: Golden Gate Bridge, San Francisco",
    "Explore travel guides for bridge visits",
    "Join our community of bridge enthusiasts"
  ];

  return (
    <TickerContainer>
      <TickerContent
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {tickerItems.map((item, index) => (
          <TickerItem key={index}>{item}</TickerItem>
        ))}
      </TickerContent>
    </TickerContainer>
  );
};

export default Ticker; 