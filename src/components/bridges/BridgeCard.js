import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaMapMarkerAlt, FaCalendarAlt, FaRuler } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: transform ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.67%; // 3:2 aspect ratio
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.default};
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

const Description = styled.p`
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.light};
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  svg {
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
  }

  span {
    font-size: 0.9rem;
    color: ${theme.colors.text};
  }

  strong {
    font-size: 1rem;
    color: ${theme.colors.primary};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: ${theme.colors.light};
  color: ${theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: 500;
`;

const BridgeCard = ({ bridge }) => {
  // Add default values for bridge properties to prevent errors
  const {
    name = 'Bridge Name',
    description = 'No description available',
    image = 'https://via.placeholder.com/600x400?text=Bridge+Image',
    location = 'Unknown',
    year = 'Unknown',
    length = 'Unknown',
    tags = []
  } = bridge || {};

  return (
    <Card
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <img src={image} alt={name} loading="lazy" />
      </ImageContainer>
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Stats>
          <Stat>
            <FaMapMarkerAlt />
            <span>Location</span>
            <strong>{location}</strong>
          </Stat>
          <Stat>
            <FaCalendarAlt />
            <span>Built</span>
            <strong>{year}</strong>
          </Stat>
          <Stat>
            <FaRuler />
            <span>Length</span>
            <strong>{length}</strong>
          </Stat>
        </Stats>
        <Tags>
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))
          ) : (
            <Tag>No tags available</Tag>
          )}
        </Tags>
      </Content>
    </Card>
  );
};

export default BridgeCard; 