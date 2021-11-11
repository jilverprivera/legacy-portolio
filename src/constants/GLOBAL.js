import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
        background-color: ${(props) => props.theme.background};
        transition: background-color 0.4s;
    }
    body::-webkit-scrollbar {
        width: 1.2rem;
        height: 0rem;
    }
    body::-webkit-scrollbar-track {
        background-color: #fff;
    }
    body::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: #000;
    }
    .active{
        font-weight: 700;
    }
    .active-bg{
        font-weight: 700;
    }
`;
