import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaFilter, FaTimes } from 'react-icons/fa';

const GalleryContainer = styled.div`
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
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  height: 300px;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${theme.shadows.medium};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background: white;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${theme.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Bridges' },
    { id: 'historical', label: 'Historical' },
    { id: 'modern', label: 'Modern' },
    { id: 'iconic', label: 'Iconic' },
  ];

  const images = [
    {
      id: 1,
      src: '/images/bridges/golden-gate.jpg',
      title: 'Golden Gate Bridge',
      location: 'San Francisco, USA',
      category: 'iconic',
    },
    {
      id: 2,
      src: '/images/bridges/tower-bridge.jpg',
      title: 'Tower Bridge',
      location: 'London, UK',
      category: 'historical',
    },
    {
      id: 3,
      src: '/images/bridges/sydney-harbour.jpg',
      title: 'Sydney Harbour Bridge',
      location: 'Sydney, Australia',
      category: 'iconic',
    },
    {
      id: 4,
      src: '/images/bridges/millau-viaduct.jpg',
      title: 'Millau Viaduct',
      location: 'Millau, France',
      category: 'modern',
    },
    {
      id: 5,
      src: '/images/bridges/charles-bridge.jpg',
      title: 'Charles Bridge',
      location: 'Prague, Czech Republic',
      category: 'historical',
    },
    {
      id: 6,
      src: '/images/bridges/akashi-kaikyo.jpg',
      title: 'Akashi Kaikyo Bridge',
      location: 'Kobe, Japan',
      category: 'modern',
    },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(image => image.category === activeFilter);

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
    <GalleryContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bridge Gallery
      </Title>
      <Description
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our collection of stunning bridge photographs from around the world.
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
            <FaFilter />
            {filter.label}
          </FilterButton>
        ))}
      </FilterContainer>

      <GalleryGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredImages.map(image => (
          <GalleryItem
            key={image.id}
            variants={itemVariants}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} />
            <ImageOverlay>
              <h3>{image.title}</h3>
              <p>{image.location}</p>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>

      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <ModalContent
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalImage src={selectedImage.src} alt={selectedImage.title} />
              <CloseButton onClick={() => setSelectedImage(null)}>
                <FaTimes />
              </CloseButton>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery; 