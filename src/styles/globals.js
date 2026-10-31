import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: ${(props) => props.theme.header.desktop};

    @media ${(props) => props.theme.breakpoints.md} {
      scroll-padding-top: ${(props) => props.theme.header.mobile};
    }
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    line-height: 1.65;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 1.0625rem;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  :focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 3px;
    border-radius: 4px;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, *::before, *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
