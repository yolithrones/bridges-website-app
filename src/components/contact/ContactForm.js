import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import Button from '../common/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${theme.colors.primary};
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: ${theme.colors.secondary};
  }

  div {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }

    p {
      margin: 0;
      color: ${theme.colors.text};
    }
  }
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <ContactContainer>
      <ContactInfo>
        <h2>Get in Touch</h2>
        <p>
          Have questions about bridges? Want to share your favorite bridge story?
          We'd love to hear from you! Fill out the form and we'll get back to you
          as soon as possible.
        </p>

        <InfoItem
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaEnvelope />
          <div>
            <h3>Email</h3>
            <p>info@bridgeswebsite.com</p>
          </div>
        </InfoItem>

        <InfoItem
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FaPhone />
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </InfoItem>

        <InfoItem
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaMapMarkerAlt />
          <div>
            <h3>Location</h3>
            <p>123 Bridge Street, Engineering City, EC 12345</p>
          </div>
        </InfoItem>
      </ContactInfo>

      <Form onSubmit={handleSubmit}>
        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thank you for your message! We'll get back to you soon.
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
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          {errors.subject && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.subject}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
          />
          {errors.message && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <Button type="submit" variant="primary" size="large">
          Send Message
        </Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm; 