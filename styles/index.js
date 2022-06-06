import { createGlobalStyle } from "styled-components";

export const STYLES = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%
    }

    *, *:before, *:after {
        margin: 0rem;
        padding: 0rem;
        box-sizing: inherit;
        font-family: 'Cairo', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.white};
        // overscroll-behavior-y: none;
        width: 100%; 
        height: 100vh;
    }

   .active-section {
       ::after{
           content: "";
           background-color: ${({ theme }) => theme.primary};
           position: absolute;
           width: 0.75rem;
           height: 0.5rem;
           border-radius: 0.75rem;
           bottom: -0.25rem;
           left: 50%;
           transform: translateX(-100%);
           transition: 0.2s ease-in-out;

       }
   }
`;
