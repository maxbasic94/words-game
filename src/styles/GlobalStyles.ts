import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #2C2F48;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
