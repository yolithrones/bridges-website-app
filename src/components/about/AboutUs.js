import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';
import { FaUsers, FaLightbulb, FaGlobe, FaHeart } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
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
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MissionCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  text-align: center;

  svg {
    font-size: 2.5rem;
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text};
    line-height: 1.6;
  }
`;

const TeamSection = styled.section`
  margin-bottom: 4rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
`;

const MemberImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
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

  ${TeamMember}:hover & img {
    transform: scale(1.1);
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  text-align: center;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
  }

  .bio {
    color: ${theme.colors.text};
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const StatsSection = styled.section`
  background: ${theme.colors.primary};
  color: white;
  padding: 4rem 2rem;
  border-radius: ${theme.borderRadius.large};
  margin-bottom: 4rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: '/images/team/john.jpg',
      bio: 'Passionate about bridges and engineering, John has been exploring the world's most incredible structures for over 20 years.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Content Director',
      image: '/images/team/sarah.jpg',
      bio: 'With a background in architecture and journalism, Sarah brings a unique perspective to our bridge stories.',
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      image: '/images/team/michael.jpg',
      bio: 'Michael ensures our website runs smoothly and provides the best user experience for our visitors.',
    },
  ];

  return (
    <AboutContainer>
      <Hero>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Bridges Website
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are dedicated to showcasing the world's most incredible bridges,
          celebrating their beauty, engineering marvels, and historical
          significance.
        </Subtitle>
      </Hero>

      <MissionSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </Title>
        <MissionGrid>
          <MissionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaUsers />
            <h3>Connect</h3>
            <p>
              Bringing together bridge enthusiasts, engineers, and history lovers
              from around the world.
            </p>
          </MissionCard>
          <MissionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaLightbulb />
            <h3>Educate</h3>
            <p>
              Sharing knowledge about bridge engineering, architecture, and
              historical significance.
            </p>
          </MissionCard>
          <MissionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaGlobe />
            <h3>Explore</h3>
            <p>
              Discovering and showcasing bridges from every continent and
              culture.
            </p>
          </MissionCard>
          <MissionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaHeart />
            <h3>Inspire</h3>
            <p>
              Inspiring future generations to appreciate and preserve these
              architectural wonders.
            </p>
          </MissionCard>
        </MissionGrid>
      </MissionSection>

      <StatsSection>
        <StatsGrid>
          <StatItem
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>1000+</h3>
            <p>Bridges Featured</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>50+</h3>
            <p>Countries Covered</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>10K+</h3>
            <p>Monthly Visitors</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>500+</h3>
            <p>Articles Published</p>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <TeamSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Team
        </Title>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MemberImage>
                <img src={member.image} alt={member.name} />
              </MemberImage>
              <MemberInfo>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p className="bio">{member.bio}</p>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default AboutUs; 