import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaMapMarkerAlt } from 'react-icons/fa';

const TickerContainer = styled.div`
  background: ${theme.colors.primary};
  color: white;
  padding: 0.5rem 0;
  overflow: hidden;
  position: relative;
`;

const TickerContent = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const Ticker = () => {
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    // Get user's location using browser's geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Convert coordinates to a simple location string
          const lat = position.coords.latitude.toFixed(2);
          const lon = position.coords.longitude.toFixed(2);
          setCurrentLocation(`Lat: ${lat}°N, Lon: ${lon}°E`);
        },
        (error) => {
          // If geolocation fails, show a default message
          setCurrentLocation('Location unavailable');
        }
      );
    } else {
      setCurrentLocation('Geolocation not supported');
    }
  }, []);

  const tickerVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <TickerContainer>
      <TickerContent variants={tickerVariants} animate="animate">
        <LocationInfo>
          <FaMapMarkerAlt />
          {currentLocation || 'Loading location...'}
        </LocationInfo>
        <span>•</span>
        <span>Welcome to Bridges Around the World!</span>
        <span>•</span>
        <span>Discover the most amazing bridges on Earth</span>
        <span>•</span>
        <span>Explore historical and modern architectural wonders</span>
        <span>•</span>
        <span>Learn about bridge engineering and design</span>
        <span>•</span>
        <span>Share your bridge experiences with us</span>
        <span>•</span>
      </TickerContent>
    </TickerContainer>
  );
};

export default Ticker; 