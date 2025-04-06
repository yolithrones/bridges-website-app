import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/themes/theme';

const StyledButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '1rem 2rem' : props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.size === 'large' ? '1.1rem' : props.size === 'small' ? '0.9rem' : '1rem'};
  font-weight: 500;
  border-radius: ${theme.borderRadius.medium};
  background-color: ${props => props.variant === 'outline' ? 'transparent' : theme.colors[props.variant]};
  color: ${props => props.variant === 'outline' ? theme.colors[props.color] : '#fff'};
  border: ${props => props.variant === 'outline' ? `2px solid ${theme.colors[props.color]}` : 'none'};
  transition: all ${theme.transitions.default};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  color = 'primary',
  onClick,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 