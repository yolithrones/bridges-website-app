import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import Button from '../common/Button';
import { FaStar } from 'react-icons/fa';

const FeedbackContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const FeedbackForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const Title = styled.h2`
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Description = styled.p`
  text-align: center;
  color: ${theme.colors.text};
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${theme.colors.light};
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
  transition: border-color ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${theme.colors.light};
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
  }
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const StarButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${props =>
    props.active ? theme.colors.warning : theme.colors.light};
  cursor: pointer;
  padding: 0.2rem;
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: scale(1.1);
  }
`;

const ErrorMessage = styled(motion.span)`
  color: ${theme.colors.error};
  font-size: 0.9rem;
  margin-top: 0.3rem;
  display: block;
`;

const SuccessMessage = styled(motion.div)`
  background: ${theme.colors.success};
  color: white;
  padding: 1rem;
  border-radius: ${theme.borderRadius.small};
  margin-bottom: 1rem;
  text-align: center;
`;

const CategorySelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${theme.colors.light};
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: border-color ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
  }
`;

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    rating: 0,
    comment: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.category) newErrors.category = 'Please select a category';
    if (formData.rating === 0) newErrors.rating = 'Please provide a rating';
    if (!formData.comment.trim()) newErrors.comment = 'Comment is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Feedback submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        category: '',
        rating: 0,
        comment: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors((prev) => ({ ...prev, rating: '' }));
    }
  };

  return (
    <FeedbackContainer>
      <FeedbackForm onSubmit={handleSubmit}>
        <Title>Share Your Feedback</Title>
        <Description>
          Help us improve by sharing your thoughts about our bridges website.
          Your feedback is valuable to us!
        </Description>

        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thank you for your feedback! We appreciate your input.
          </SuccessMessage>
        )}

        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.name}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
          {errors.email && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.email}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <CategorySelect
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="content">Content Quality</option>
            <option value="design">Website Design</option>
            <option value="navigation">Navigation</option>
            <option value="performance">Performance</option>
            <option value="other">Other</option>
          </CategorySelect>
          {errors.category && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.category}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Rating</Label>
          <RatingContainer>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarButton
                key={star}
                type="button"
                active={star <= (hoverRating || formData.rating)}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaStar />
              </StarButton>
            ))}
          </RatingContainer>
          {errors.rating && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.rating}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="comment">Comments</Label>
          <TextArea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Share your thoughts..."
          />
          {errors.comment && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.comment}
            </ErrorMessage>
          )}
        </FormGroup>

        <Button type="submit" variant="primary" size="large">
          Submit Feedback
        </Button>
      </FeedbackForm>
    </FeedbackContainer>
  );
};

export default Feedback; 