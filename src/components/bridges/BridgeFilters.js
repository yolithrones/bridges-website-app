import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import {
  bridgeCategories,
  bridgeTypes,
  continents,
} from '../../data/bridges';

const FiltersContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  margin-bottom: 2rem;
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.label`
  display: block;
  color: ${theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${theme.colors.light};
  border-radius: ${theme.borderRadius.medium};
  background: white;
  color: ${theme.colors.text};
  font-size: 1rem;
  transition: all ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primary}20;
  }
`;

const FilterButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.dark};
  }
`;

const BridgeFilters = ({ onFilterChange, onApplyFilters, initialFilters = {} }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <FiltersContainer>
      <FilterGroup>
        <FilterLabel>Category</FilterLabel>
        <FilterSelect 
          name="category" 
          onChange={handleChange}
          value={initialFilters.category || ''}
        >
          <option value="">All Categories</option>
          {Object.entries(bridgeCategories).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel>Type</FilterLabel>
        <FilterSelect 
          name="type" 
          onChange={handleChange}
          value={initialFilters.type || ''}
        >
          <option value="">All Types</option>
          {Object.entries(bridgeTypes).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel>Continent</FilterLabel>
        <FilterSelect 
          name="continent" 
          onChange={handleChange}
          value={initialFilters.continent || ''}
        >
          <option value="">All Continents</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterButton
        onClick={onApplyFilters}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Apply Filters
      </FilterButton>
    </FiltersContainer>
  );
};

export default BridgeFilters; 