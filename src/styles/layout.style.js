import { Link } from "react-scroll";
import styled from "styled-components";
import { SIZES } from "../constants";

// <----------------------------- HEADER ----------------------------->
export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 100;
    max-width: 100vw;
    width: 100%;
    transition: background-color 1s;
    .bg {
        background-color: transparent;
        width: 100%;
        height: 7rem;
        transition: 0.5s;
        color: #000;
    }
    .bg-active {
        width: 100%;
        height: 100%;
        transition: 0.5s;
        height: 6rem;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(1rem);
        box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
    }
`;

export const HeaderContent = styled.nav`
    width: 95%;
    max-width: 130rem;
    height: 100%;

    margin: 0rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const NavListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    margin: 0rem 1rem;
    font-size: ${SIZES.body4};
    color: ${(props) => props.theme.text};
    &:hover {
        cursor: pointer;
    }
`;

export const ThemeSwitch = styled.div`
    position: relative;
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    background-color: ${(props) => props.theme.background_auxiliar};
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
    align-items: center;

    .toggler {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background-color: ${(props) => props.theme.text};
        transition: all 0.4s;
    }
    .toggler-active {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background-color: ${(props) => props.theme.text};
        transform: translateX(2rem);
        transition: all 0.4s;
    }
`;

// <----------------------------- MAIN ----------------------------->

export const Main = styled.main`
    width: 100%;
    margin: 0rem auto;
`;

// <----------------------------- FOOTER ----------------------------->
