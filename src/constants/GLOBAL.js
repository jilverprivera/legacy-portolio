import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
        font-family: 'Fira Sans', sans-serif;
    }
    body {
        background-color: ${(props) => props.theme.background};
        transition: background-color 0.4s;
    }
    body::-webkit-scrollbar {
        width: 15px;
        height: 0px;
    }
    body::-webkit-scrollbar-track {
        background-color: #fff;
    }
    body::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #000;
    }
    .active{
        font-weight: 700;
    }
    .active-bg{
        font-weight: 700;
    }
`;
