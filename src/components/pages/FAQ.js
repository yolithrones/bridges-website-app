import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaChevronDown } from 'react-icons/fa';

const FAQContainer = styled.div`
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
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FAQCategory = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${theme.colors.primary};
`;

const AccordionItem = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.medium};
  margin-bottom: 1rem;
  box-shadow: ${theme.shadows.small};
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  padding: 1rem;
  background: ${theme.colors.background};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${theme.colors.backgroundDark};
  }

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.1rem;
    margin: 0;
  }

  svg {
    color: ${theme.colors.primary};
    transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
    transition: transform 0.3s ease;
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 1rem;
  color: ${theme.colors.text};
  line-height: 1.6;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const faqData = {
    general: [
      {
        question: 'What is Bridges.com?',
        answer: 'Bridges.com is a comprehensive platform dedicated to showcasing and educating about the world\'s most incredible bridges. We provide detailed information about bridge engineering, history, and architectural significance.',
      },
      {
        question: 'How can I contribute to the website?',
        answer: 'You can contribute by submitting bridge information, photos, or articles through our contact form. Our team will review your submission and get back to you.',
      },
      {
        question: 'Is the information on Bridges.com accurate?',
        answer: 'Yes, we ensure all information is thoroughly researched and verified by our team of experts. We regularly update our content to maintain accuracy.',
      },
    ],
    technical: [
      {
        question: 'What types of bridges are featured?',
        answer: 'We feature various types of bridges including suspension bridges, arch bridges, beam bridges, cable-stayed bridges, and more. Each bridge is categorized based on its design and construction type.',
      },
      {
        question: 'How are bridges categorized?',
        answer: 'Bridges are categorized based on their structural design, historical period, location, and significance. This helps users easily find and learn about specific types of bridges.',
      },
      {
        question: 'Can I download bridge images?',
        answer: 'Yes, most images on our website are available for download. However, please check the image credits and usage rights before using them.',
      },
    ],
    membership: [
      {
        question: 'Do I need to create an account?',
        answer: 'While you can browse the website without an account, creating one allows you to save favorite bridges, leave comments, and receive updates about new content.',
      },
      {
        question: 'Is membership free?',
        answer: 'Yes, basic membership is completely free. We also offer premium features for those who want to access additional content and features.',
      },
      {
        question: 'How do I reset my password?',
        answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.',
      },
    ],
  };

  const toggleAccordion = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`],
    }));
  };

  const filterFAQs = (faqs) => {
    if (!searchTerm) return faqs;
    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
    <FAQContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </Title>
      <Description
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Find answers to common questions about bridges, our website, and how to get involved.
      </Description>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>

      <FAQGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(faqData).map(([category, faqs]) => (
          <FAQCategory key={category}>
            <CategoryTitle>
              {category.charAt(0).toUpperCase() + category.slice(1)} Questions
            </CategoryTitle>
            {filterFAQs(faqs).map((faq, index) => (
              <AccordionItem
                key={index}
                variants={itemVariants}
              >
                <AccordionHeader
                  isOpen={openItems[`${category}-${index}`]}
                  onClick={() => toggleAccordion(category, index)}
                >
                  <h3>{faq.question}</h3>
                  <FaChevronDown />
                </AccordionHeader>
                <AnimatePresence>
                  {openItems[`${category}-${index}`] && (
                    <AccordionContent
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </AccordionContent>
                  )}
                </AnimatePresence>
              </AccordionItem>
            ))}
          </FAQCategory>
        ))}
      </FAQGrid>
    </FAQContainer>
  );
};

export default FAQ; 