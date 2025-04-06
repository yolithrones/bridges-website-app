import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const GalleryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  grid-auto-rows: 10px;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.transitions.default};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 1rem;
  color: white;
  opacity: 0;
  transition: opacity ${theme.transitions.default};

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  transition: background ${theme.transitions.default};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

const ImageInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <GalleryContainer>
      <MasonryGrid>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            onClick={() => handleImageClick(image, index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={image.url} alt={image.title} loading="lazy" />
            <Overlay>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Overlay>
          </GalleryItem>
        ))}
      </MasonryGrid>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <LightboxContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleClose}>
                <FaTimes />
              </CloseButton>
              <NavigationButton className="prev" onClick={handlePrevious}>
                <FaArrowLeft />
              </NavigationButton>
              <NavigationButton className="next" onClick={handleNext}>
                <FaArrowRight />
              </NavigationButton>
              <LightboxImage src={selectedImage.url} alt={selectedImage.title} />
              <ImageInfo>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </ImageInfo>
            </LightboxContent>
          </Lightbox>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery; 