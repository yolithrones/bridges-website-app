import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 600;
    margin-bottom: ${theme.spacing.md};
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    transition: color ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.primary};
    border: none;
    outline: none;
    transition: all ${theme.transitions.default};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea, select {
    font-family: ${theme.fonts.primary};
    font-size: 1rem;
  }

  ::selection {
    background-color: ${theme.colors.secondary};
    color: white;
  }
`;

export default GlobalStyles; 