import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaPlane, FaBus, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const TravelContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const AdGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const AdCard = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  overflow: hidden;
`;

const AdHeader = styled.div`
  background: ${theme.colors.primary};
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const AdContent = styled.div`
  padding: 1.5rem;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${theme.colors.text};
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primary}20;
  }
`;

const SearchButton = styled(motion.button)`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`;

const PopularDestinations = styled.div`
  margin-top: 2rem;
`;

const DestinationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const Destination = styled(motion.div)`
  background: ${theme.colors.background};
  padding: 1rem;
  border-radius: ${theme.borderRadius.medium};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.primary}20;
  }

  svg {
    color: ${theme.colors.primary};
  }
`;

const TravelAds = () => {
  const popularDestinations = [
    'San Francisco',
    'London',
    'Paris',
    'Tokyo',
    'Sydney',
    'New York',
  ];

  return (
    <TravelContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Travel to Bridge Destinations
      </Title>

      <AdGrid>
        <AdCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AdHeader>
            <FaPlane />
            <h3>Find Flights</h3>
          </AdHeader>
          <AdContent>
            <SearchForm>
              <FormGroup>
                <Label>From</Label>
                <Input type="text" placeholder="Departure City" />
              </FormGroup>
              <FormGroup>
                <Label>To</Label>
                <Input type="text" placeholder="Destination City" />
              </FormGroup>
              <FormGroup>
                <Label>Date</Label>
                <Input type="date" />
              </FormGroup>
              <SearchButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Search Flights
              </SearchButton>
            </SearchForm>
          </AdContent>
        </AdCard>

        <AdCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AdHeader>
            <FaBus />
            <h3>Find Buses</h3>
          </AdHeader>
          <AdContent>
            <SearchForm>
              <FormGroup>
                <Label>From</Label>
                <Input type="text" placeholder="Departure City" />
              </FormGroup>
              <FormGroup>
                <Label>To</Label>
                <Input type="text" placeholder="Destination City" />
              </FormGroup>
              <FormGroup>
                <Label>Date</Label>
                <Input type="date" />
              </FormGroup>
              <SearchButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Search Buses
              </SearchButton>
            </SearchForm>
          </AdContent>
        </AdCard>
      </AdGrid>

      <PopularDestinations>
        <h3>Popular Bridge Destinations</h3>
        <DestinationList>
          {popularDestinations.map((destination, index) => (
            <Destination
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaMapMarkerAlt />
              {destination}
            </Destination>
          ))}
        </DestinationList>
      </PopularDestinations>
    </TravelContainer>
  );
};

export default TravelAds; 