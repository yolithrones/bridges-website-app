import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { bridges } from '../../data/bridges';
import { FaMapMarkerAlt, FaCalendarAlt, FaRuler, FaWeightHanging } from 'react-icons/fa';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.div`
  position: relative;
  height: 500px;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  margin-bottom: 2rem;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Location = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const InfoTitle = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};
`;

const Description = styled.p`
  line-height: 1.6;
  color: ${theme.colors.text};
  margin-bottom: 2rem;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.medium};
  text-decoration: none;
  margin-bottom: 2rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${theme.colors.dark};
  }
`;

const BridgeDetail = () => {
  const { id } = useParams();
  const [bridge, setBridge] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundBridge = bridges.find(b => b.id === parseInt(id));
    setBridge(foundBridge);
  }, [id]);

  if (!bridge) {
    return (
      <DetailContainer>
        <BackButton to="/bridges">← Back to Bridges</BackButton>
        <div>Bridge not found</div>
      </DetailContainer>
    );
  }

  // Add default values for bridge properties to prevent errors
  const {
    name = 'Bridge Name',
    description = 'No description available',
    image = 'https://via.placeholder.com/600x400?text=Bridge+Image',
    city = 'Unknown',
    country = 'Unknown',
    yearCompleted = 'Unknown',
    length = 'Unknown',
    type = ['Unknown'],
    category = 'Unknown',
    continent = 'Unknown',
    status = 'Unknown',
    architect = null,
    historicalSignificance = 'No historical significance information available.',
    gallery = []
  } = bridge;

  return (
    <DetailContainer>
      <BackButton to="/bridges">
        ← Back to Bridges
      </BackButton>

      <HeroSection>
        <HeroImage src={selectedImage || image} alt={name} />
        <HeroOverlay>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </Title>
          <Location
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaMapMarkerAlt />
            {city}, {country}
          </Location>
        </HeroOverlay>
      </HeroSection>

      <ContentGrid>
        <MainContent>
          <Description>{description}</Description>
          
          <InfoTitle>Technical Specifications</InfoTitle>
          <InfoList>
            <InfoItem>
              <FaCalendarAlt />
              Completed: {yearCompleted}
            </InfoItem>
            <InfoItem>
              <FaRuler />
              Length: {length}
            </InfoItem>
            <InfoItem>
              <FaWeightHanging />
              Type: {Array.isArray(type) ? type.join(', ') : type}
            </InfoItem>
          </InfoList>

          {gallery && gallery.length > 0 && (
            <>
              <InfoTitle>Gallery</InfoTitle>
              <ImageGallery>
                {gallery.map((image, index) => (
                  <GalleryImage
                    key={index}
                    src={image}
                    alt={`${name} - Image ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </ImageGallery>
            </>
          )}
        </MainContent>

        <Sidebar>
          <InfoCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InfoTitle>Quick Facts</InfoTitle>
            <InfoList>
              <InfoItem>Category: {category}</InfoItem>
              <InfoItem>Continent: {continent}</InfoItem>
              <InfoItem>Status: {status}</InfoItem>
              {architect && (
                <InfoItem>Architect: {architect}</InfoItem>
              )}
            </InfoList>
          </InfoCard>

          <InfoCard
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoTitle>Historical Significance</InfoTitle>
            <Description>{historicalSignificance}</Description>
          </InfoCard>
        </Sidebar>
      </ContentGrid>
    </DetailContainer>
  );
};

export default BridgeDetail;