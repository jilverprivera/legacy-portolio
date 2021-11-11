import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styled, {css} from "styled-components";
import { SIZES } from "../constants";

// <----------------------------- HEADER ----------------------------->
export const HeaderWrapper = styled(motion.header)`
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

export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 76.8rem) {
        display: none;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    margin: 0rem 1rem;
    font-size: ${SIZES.body4};
    color: ${(props) => props.theme.text};
    &:hover {
        cursor: pointer;
    }

    ${({ drawerType }) =>
        drawerType &&
        css`
            font-size: ${SIZES.body2};
            margin: 1rem;
        `}
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

export const DrawerIcon = styled.div`
@media(min-width: 76.8rem){
     display: none;
}
    width: 3rem;
    height: ${(props) => (props.open ? "0rem" : "0.4rem")};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.text};
    margin-left: 1rem;
    transition: 0.2s;

    &::before {
        position: absolute;
        content: "";
        width: 3rem;
        height: 0.4rem;
        border-radius: 0.5rem;
        background-color: ${(props) => props.theme.text};
        transform: ${(props) =>
            props.open
                ? "translateY(0rem) rotate(45deg)"
                : "translateY(1rem);"};
        transition: 0.4s;
    }
    &::after {
        position: absolute;
        content: "";
        width: 3rem;
        height: 0.4rem;
        border-radius: 0.5rem;
        background-color: ${(props) => props.theme.text};
        transform: ${(props) =>
            props.open
                ? "translateY(0rem) rotate(-45deg)"
                : "translateY(-1rem);"};
        transition: 0.4s;
    }
`;

export const DrawerContent = styled(motion.div)`
    position: absolute;
    background-color: ${(props) => props.theme.background};
    top: 6rem;
    left: 0rem;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

// <----------------------------- MAIN ----------------------------->

export const Main = styled(motion.main)`
    width: 100%;
    margin: 0rem auto;
`;

// <----------------------------- FOOTER ----------------------------->
