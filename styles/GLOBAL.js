import { createGlobalStyle } from "styled-components";

const GLOBAL = createGlobalStyle`
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
        font-family: 'Titillium Web', sans-serif;
    }
    
    body {
        background-color: ${({ theme }) => theme.white};
        transition: background-color 0.4s ease-in-out;
        overscroll-behavior-y: none;
    }

   .active-section:{
        background-color: ${({ theme }) => theme.black};
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.75rem;
   }
`;

export default GLOBAL;
