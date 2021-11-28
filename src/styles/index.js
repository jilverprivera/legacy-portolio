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
        font-family: 'Raleway', sans-serif;
    }
    body {
        background-color:  ${({ theme }) => theme.white};
        transition: white-color 0.4s;
    }
      .active{
        font-weight: 700;
    }
   
   .responsive__featuredImage{
       border-top-left-radius:1rem;
       border-top-right-radius:1rem;
        // @media (max-width: 768px) {
        }
   }

   .banner__image{
    //    border: 1px solid #000;
       ;
    //    border-radius: 50%;
   }
`;

export default GLOBAL;
