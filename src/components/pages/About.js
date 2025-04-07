import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaUsers, FaGlobe, FaHistory, FaAward } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 30px auto 0;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MissionSection = styled.section`
  margin-bottom: 4rem;
  padding: 2rem;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const MissionTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const MissionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const MissionCard = styled(motion.div)`
  padding: 1.5rem;
  background: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};
  text-align: center;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text};
    line-height: 1.6;
  }
`;

const StatsSection = styled.section`
  margin-bottom: 4rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};

  svg {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text};
  }
`;

const TeamSection = styled.section`
  margin-bottom: 4rem;
`;

const TeamTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text};
    margin-bottom: 1rem;
  }
`;

const About = () => {
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

  const stats = [
    {
      icon: <FaGlobe />,
      number: '100+',
      label: 'Bridges Featured',
    },
    {
      icon: <FaUsers />,
      number: '50K+',
      label: 'Monthly Visitors',
    },
    {
      icon: <FaHistory />,
      number: '1000+',
      label: 'Years of History',
    },
    {
      icon: <FaAward />,
      number: '25+',
      label: 'Awards Won',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: '/images/team/john-smith.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Architect',
      image: '/images/team/sarah-johnson.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Technical Director',
      image: '/images/team/michael-chen.jpg',
    },
    {
      name: 'Emily Brown',
      role: 'Content Manager',
      image: '/images/team/emily-brown.jpg',
    },
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Bridges
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the world's most incredible bridges and their fascinating stories.
          We're dedicated to sharing the beauty and engineering marvels of bridges
          from around the globe.
        </Subtitle>
      </HeroSection>

      <MissionSection>
        <MissionTitle>Our Mission</MissionTitle>
        <MissionContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MissionCard variants={itemVariants}>
            <h3>Education</h3>
            <p>
              We aim to educate visitors about bridge engineering, history, and
              architectural significance through detailed information and
              interactive content.
            </p>
          </MissionCard>
          <MissionCard variants={itemVariants}>
            <h3>Inspiration</h3>
            <p>
              Our platform inspires architects, engineers, and bridge enthusiasts
              by showcasing innovative designs and engineering solutions.
            </p>
          </MissionCard>
          <MissionCard variants={itemVariants}>
            <h3>Preservation</h3>
            <p>
              We promote the preservation of historical bridges and raise awareness
              about their cultural and historical importance.
            </p>
          </MissionCard>
        </MissionContent>
      </MissionSection>

      <StatsSection>
        <StatsGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} variants={itemVariants}>
              {stat.icon}
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      <TeamSection>
        <TeamTitle>Our Team</TeamTitle>
        <TeamGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {team.map((member, index) => (
            <TeamMember key={index} variants={itemVariants}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About; 