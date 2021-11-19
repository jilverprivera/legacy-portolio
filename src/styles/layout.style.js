import { Link as NavHashLink } from "react-scroll";
// import Link from "next/link"
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { SIZES } from "../constants";

// <----------------------------- HEADER ----------------------------->
export const HeaderContainer = styled(motion.header)`
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 100;
    max-width: 100vw;
    width: 100%;
    transition: all 0.4s;
    background: ${(props) => props.background};
    height: ${(props) => props.height};
    backdrop-filter: blur(${(props) => props.blur});
`;

export const HeaderContent = styled.nav`
    width: 90%;
    max-width: 130rem;
    height: 100%;
    margin: 0rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    margin-left: 5rem;
    flex-direction: row;
    align-items: center;
`;

export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(NavHashLink)`
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

export const PageLink = styled.span`
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

export const DrawerIcon = styled.div`
    width: 3rem;
    height: ${(props) => (props.open ? "0rem" : "0.4rem")};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.text};
    margin-left: 1rem;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
    }

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
    background-color: ${(props) => props.theme.background_auxiliar};
    top: 6rem;
    left: 0rem;
    width: 100%;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    //     border: 1px solid rgba(0, 0, 0, 1);
`;

// <----------------------------- MAIN ----------------------------->

export const Main = styled(motion.main)`
    width: 100%;
    min-height: 100vh;
    margin: 0rem auto;
`;

// <----------------------------- FOOTER ----------------------------->
export const FooterContent = styled.footer`
    width: 100%;
    height: 6rem;
    background-color: #ddd;
    @media (max-width: 768px) {
        height: 10rem;
    }
`;

export const FooterWrapper = styled.div`
    max-width: 130rem;
    width: 100%;
    height: 100%;
    margin: 0rem auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const FooterIconWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
        //     margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.text};
`;

export const FooterIcon = styled.span`
    font-size: ${SIZES.body2};
    margin: 0rem 0.5rem;
`;

export const FooterDescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const FooterDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;
