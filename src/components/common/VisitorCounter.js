import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';
import { theme } from '../../styles/themes/theme';

const CounterContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.medium};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${theme.shadows.medium};
  z-index: 1000;

  svg {
    font-size: 1.2rem;
  }
`;

const Count = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get the stored count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    const initialCount = storedCount ? parseInt(storedCount) : 0;
    
    // Increment the count
    const newCount = initialCount + 1;
    
    // Update state and localStorage
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return (
    <CounterContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaEye />
      <Count>{visitorCount.toLocaleString()}</Count>
    </CounterContainer>
  );
};

export default VisitorCounter; 