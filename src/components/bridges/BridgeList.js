import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { theme } from '../../styles/theme';
import BridgeFilters from './BridgeFilters';
import BridgeCard from './BridgeCard';
import { bridges } from '../../data/bridges';

const BridgeListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  margin: 0 auto 2rem;
  text-align: center;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BridgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  color: ${theme.colors.text};
  font-size: 1.2rem;
`;

const BridgeList = () => {
  const { category, type } = useParams();
  const [filteredBridges, setFilteredBridges] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    type: '',
    continent: '',
  });
  const [title, setTitle] = useState('All Bridges');
  const [description, setDescription] = useState('Explore our collection of the world\'s most incredible bridges.');

  useEffect(() => {
    // Set initial filters based on URL parameters
    if (category) {
      setFilters(prev => ({ ...prev, category }));
      setTitle(category.charAt(0).toUpperCase() + category.slice(1) + ' Bridges');
      setDescription(`Discover ${category} bridges from around the world.`);
    } else if (type) {
      setFilters(prev => ({ ...prev, type }));
      setTitle(type.charAt(0).toUpperCase() + type.slice(1) + ' Bridges');
      setDescription(`Explore the ${type} bridges in our collection.`);
    }
  }, [category, type]);

  useEffect(() => {
    let result = [...bridges];

    // Apply filters
    if (filters.category) {
      result = result.filter(bridge => bridge.category === filters.category);
    }
    if (filters.type) {
      result = result.filter(bridge => bridge.type.includes(filters.type));
    }
    if (filters.continent) {
      result = result.filter(bridge => bridge.continent === filters.continent);
    }

    setFilteredBridges(result);
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    // Filters are already applied in the useEffect
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

  // Transform bridge data to match what BridgeCard expects
  const transformedBridges = filteredBridges.map(bridge => ({
    id: bridge.id,
    name: bridge.name,
    description: bridge.description,
    image: bridge.image || 'https://via.placeholder.com/600x400?text=Bridge+Image',
    location: `${bridge.city}, ${bridge.country}`,
    year: bridge.yearCompleted,
    length: bridge.length,
    tags: [
      bridge.category,
      ...bridge.type,
      bridge.continent
    ]
  }));

  return (
    <BridgeListContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </Title>
      <Description
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </Description>

      <ContentGrid>
        <BridgeFilters
          onFilterChange={handleFilterChange}
          onApplyFilters={handleApplyFilters}
          initialFilters={filters}
        />
        
        {transformedBridges.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <BridgeGrid>
              {transformedBridges.map((bridge) => (
                <BridgeCard key={bridge.id} bridge={bridge} />
              ))}
            </BridgeGrid>
          </motion.div>
        ) : (
          <NoResults>
            No bridges found matching your criteria. Try adjusting your filters.
          </NoResults>
        )}
      </ContentGrid>
    </BridgeListContainer>
  );
};

export default BridgeList; 