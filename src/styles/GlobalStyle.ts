// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    overflow-x: hidden; 
    color: #333;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    background-color: #000; 
    overflow-y: auto; 
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
ㄴ
  a {
    text-decoration: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  input, textarea {
    all: unset;
    font: inherit;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: bold;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;

export default GlobalStyle;
