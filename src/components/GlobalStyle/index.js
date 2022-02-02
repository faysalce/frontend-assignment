import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap');

  * {
    text-decoration: none;
    margin:0;
    padding:0;
    box-sizing: border-box;
::before, ::after{
  box-sizing: border-box;

}
  }
  body {
   
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Inter', sans-serif;
    font-size:1rem;
    font-weight:400;
    color:#111;
    
  }
  h1, h2, h3, h4, h5, h6{
    font-weight:500;
  }
`;
