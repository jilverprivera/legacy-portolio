import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%
    }
    *,
    *:before,
    *:after {
        margin: 0rem;
        padding: 0rem;
        box-sizing: inherit;
        font-family: 'Inter', sans-serif;
    }
    body {
        background-color:  ${({ theme }) => theme.background};
        transition: white-color 0.4s;
        overscroll-behavior-y: none;
    }
    .skill-icon{
       width: 6rem;
       height: 6rem;
       margin: 2rem;
       @media (max-width: 768px) {
        width: 5rem;
        height: 5rem;
      }
   }
`;

export default GlobalStyles;
