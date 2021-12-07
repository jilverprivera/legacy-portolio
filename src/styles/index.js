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
        font-family: 'Inter', sans-serif;
    }
    body {
        background-color:  ${({ theme }) => theme.white};
        transition: white-color 0.4s;
        overscroll-behavior-y: none;
    }
      .active{
        font-weight: 700;
    }
   
   .responsive__featuredImage{
       border-top-left-radius:1rem;
       border-top-right-radius:1rem;
        
   }

   .responsive__banner-image{
       border-radius: 2rem;
   }

   .skill-icon{
       width: 7rem;
       height: 7rem;
       margin: 2rem;

   }
`;

export default GLOBAL;
