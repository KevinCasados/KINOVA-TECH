import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
  }

  html, body {
    font-family: Arial, sans-serif;
    background: linear-gradient(290deg, #5C083E 8.31%, #080514 88.22%);
    transition: all ease 0.2s;

    @media (max-width: 1280px) {
      background: linear-gradient(290deg, #5C083E 36.31%, #080514 88.22%);
      transition: all ease 0.2s;
    }

    @media (max-width: 920px) {
      background: linear-gradient(288deg, #5C083E 45.11%, #080514 88.22%);
      transition: all ease 0.2s;
    }

    @media (max-width: 620px) {
      background: linear-gradient(288deg, #5C083E 45.11%, #080514 104.42%);
      transition: all ease 0.2s;
    }
  }

  /* Personalización del scrollbar para navegadores WebKit */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #0F1115;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #313036;
    border-radius: 8px; 
  }
 
`;

export default GlobalStyle;