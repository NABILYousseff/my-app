// src/theme.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1, h2 {
    font-family: 'Montserrat', serif;
  }
`;

export const theme = {
  colors: {
    primary: '#4CAF50',
    secondary: '#FF9800',
    success: '#4CAF50',
    danger: '#F44336',
    warning: '#FFEB3B',
    info: '#00BCD4',
    light: '#f0f2f5',
    dark: '#212121',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Montserrat', serif",
  }
};
