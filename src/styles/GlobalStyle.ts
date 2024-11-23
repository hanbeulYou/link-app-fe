// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f9fafb;
    color: #333;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
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
