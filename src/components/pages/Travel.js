import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaMapMarkerAlt, FaCalendar, FaTicketAlt } from 'react-icons/fa';

const TravelContainer = styled.div`
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

const TravelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TravelCard = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};

  svg {
    color: ${theme.colors.primary};
    margin-right: 0.5rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background: ${props => props.active ? theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`;

const Travel = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Destinations' },
    { id: 'asia', label: 'Asia' },
    { id: 'europe', label: 'Europe' },
    { id: 'americas', label: 'Americas' },
  ];

  const destinations = [
    {
      id: 1,
      title: 'Golden Gate Bridge',
      location: 'San Francisco, USA',
      image: '/images/iconic/golden_gate.jpg',
      description: 'Visit the iconic Golden Gate Bridge and enjoy breathtaking views of the San Francisco Bay.',
      bestTime: 'April to October',
      ticketInfo: 'Free access to the bridge',
      category: 'americas',
    },
    {
      id: 2,
      title: 'Tower Bridge',
      location: 'London, UK',
      image: '/images/iconic/tower_bridge.jpg',
      description: 'Explore the historic Tower Bridge and its exhibition with stunning views of London.',
      bestTime: 'March to September',
      ticketInfo: '£10.60 for adults',
      category: 'europe',
    },
    {
      id: 3,
      title: 'Sydney Harbour Bridge',
      location: 'Sydney, Australia',
      image: '/images/iconic/sydney_harbour.jpg',
      description: 'Experience the Sydney Harbour Bridge with optional bridge climb for panoramic views.',
      bestTime: 'September to November',
      ticketInfo: 'Bridge climb from $248 AUD',
      category: 'asia',
    },
    {
      id: 4,
      title: 'Charles Bridge',
      location: 'Prague, Czech Republic',
      image: '/images/historical/ponte_vecchio.jpg',
      description: 'Walk across the historic Charles Bridge and admire the stunning views of Prague.',
      bestTime: 'May to September',
      ticketInfo: 'Free access to the bridge',
      category: 'europe',
    },
    {
      id: 5,
      title: 'Akashi Kaikyo Bridge',
      location: 'Kobe, Japan',
      image: '/images/modern/millau.jpg',
      description: 'Visit the world\'s longest suspension bridge and enjoy the scenic views of the Akashi Strait.',
      bestTime: 'March to May, September to November',
      ticketInfo: 'Free access to the bridge',
      category: 'asia',
    },
    {
      id: 6,
      title: 'Brooklyn Bridge',
      location: 'New York, USA',
      image: '/images/historical/brooklyn.jpg',
      description: 'Walk across the iconic Brooklyn Bridge and enjoy stunning views of the NYC skyline.',
      bestTime: 'April to October',
      ticketInfo: 'Free access to the bridge',
      category: 'americas',
    },
  ];

  const filteredDestinations = activeFilter === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === activeFilter);

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
    <TravelContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Travel Guide
      </Title>
      <Description
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Plan your bridge visits with our comprehensive travel guide. Find the best times to visit,
        ticket information, and travel tips for each destination.
      </Description>

      <FilterContainer>
        {filters.map(filter => (
          <FilterButton
            key={filter.id}
            active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FilterContainer>

      <TravelGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredDestinations.map(destination => (
          <TravelCard key={destination.id} variants={itemVariants}>
            <CardImage src={destination.image} alt={destination.title} />
            <CardContent>
              <CardTitle>{destination.title}</CardTitle>
              <CardDescription>{destination.description}</CardDescription>
              <InfoList>
                <InfoItem>
                  <FaMapMarkerAlt />
                  {destination.location}
                </InfoItem>
                <InfoItem>
                  <FaCalendar />
                  Best Time: {destination.bestTime}
                </InfoItem>
                <InfoItem>
                  <FaTicketAlt />
                  {destination.ticketInfo}
                </InfoItem>
              </InfoList>
            </CardContent>
          </TravelCard>
        ))}
      </TravelGrid>
    </TravelContainer>
  );
};

export default Travel; 