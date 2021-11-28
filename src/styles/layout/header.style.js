import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { SIZES } from "../../constants";

// <----------------------------- HEADER ----------------------------->
export const HeaderContainer = styled(motion.header)`
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 100;
    max-width: 100vw;
    width: 100%;
    transition: all 0.4s;
    background: transparent;
    height: ${({ height }) => height};
    backdrop-filter: blur(${({ blur }) => blur});
    box-shadow: ${({ onShadow }) => onShadow};
`;

export const HeaderContent = styled.nav`
    width: 90%;
    max-width: 130rem;
    height: 100%;
    margin: auto;
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

export const ContentHeader = styled.div`
    display: flex;
    margin-left: 5rem;
    justify-content: center;
    align-items: center;
`;

export const LngButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    font-size: ${SIZES.semiRegular};
    margin-right: 1rem;
    &:hover {
        cursor: pointer;
    }
`;

export const MenuContent = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;
export const HamburgerMenu = styled.span`
    display: block;
    width: 3rem;
    height: ${({ open }) => (open ? "0rem" : "0.4rem")};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.black};
    transition: 0.2s;
    &::before {
        position: absolute;
        content: "";
        width: 3rem;
        height: 0.4rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.black};
        transform: ${({ open }) =>
            open ? "translateY(0rem) rotate(45deg)" : "translateY(1rem);"};
        transition: 0.4s;
    }
    &::after {
        position: absolute;
        content: "";
        width: 3rem;
        height: 0.4rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.black};
        transform: ${({ open }) =>
            open ? "translateY(0rem) rotate(-45deg)" : "translateY(-1rem);"};
        transition: 0.4s;
    }
}
`;

export const DrawerContent = styled(motion.div)`
    position: absolute;
    background-color: ${({ theme }) => theme.white}};
    top: 6rem;
    left: 0rem;
    width: 100%;
    height: calc(100vh - 6.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LinkDrawer = styled(Link)`
    text-decoration: none;
    margin: 1rem 0rem;
    font-size: ${SIZES.semiRegular};
    color: ${({ theme }) => theme.black};
    &:hover {
        cursor: pointer;
    }
`;
