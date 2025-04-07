import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';
import { theme } from '../../styles/themes/theme';

const CounterContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.text};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.medium};
  background: ${theme.colors.light};
  margin-left: 1rem;

  svg {
    font-size: 1.2rem;
    color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const Count = styled.span`
  font-weight: bold;
  color: ${theme.colors.primary};
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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaEye />
      <Count>{visitorCount.toLocaleString()}</Count>
    </CounterContainer>
  );
};

export default VisitorCounter; 