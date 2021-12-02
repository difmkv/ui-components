import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    src: url(${({ theme }) => theme.fonts.body.fontSource}) format('truetype');
    font-family: ${({ theme }) => theme.fonts.body.fontFamily};
  } 

  @font-face {
    src: url(${({ theme }) => theme.fonts.title.fontSource});
    font-family: ${({ theme }) => theme.fonts.title.fontFamily};
  }

  @font-face {
    src: url(${({ theme }) => theme.fonts.subtitle.fontSource});
    font-family: ${({ theme }) => theme.fonts.subtitle.fontFamily};
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body.fontFamily}
  }
  
  h1, h3 {
    font-family: ${({ theme }) => `${theme.fonts.title.fontFamily}`};
  }
  
  h2 {
    font-family: ${({ theme }) => `${theme.fonts.subtitle.fontFamily}`};
  }
`;
