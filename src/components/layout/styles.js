import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { SIZES } from "../../constants";

// <------------------------- HEADER ------------------------->
export const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0rem;
  left: 0rem;
  z-index: 10000000;
  max-width: 100vw;
  width: 100%;
  transition: all 0.4s;
  background: transparent;
  height: ${({ height }) => height};
  backdrop-filter: blur(${({ blur }) => blur});
  box-shadow: ${({ shadow }) => shadow};
`;
export const HeaderWrapper = styled.nav`
  width: 90%;
  max-width: 130rem;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const LogoContent = styled.div`
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentHeader = styled.div`
  display: flex;
  margin-left: 5rem;
  justify-content: center;
  align-items: center;
`;
export const HamburgerContent = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Hamburger = styled.span`
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

// <------------------------- PANELS ------------------------->
export const PanelContent = styled(motion.div)`
  width: 100%;
  top: 6rem;
  height: calc(100vh - 6rem);
`;
export const LeftPanel = styled(motion.div)`
  position: fixed;
  top: 6rem;
  left: 0;
  width: 50%;
  height: calc(100vh -5.5rem);
  background-color: ${({ theme }) => theme.light};
  z-index: 100;
`;
export const RightPanel = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: 6rem;
  right: 0;
  width: 50%;
  height: calc(100vh - 5.5rem);
  background-color: ${({ theme }) => theme.light};
`;

// <------------------------- NAVIGATION ------------------------->
export const NavBackdrop = styled(motion.div)`
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const NavContainer = styled(motion.div)`
  background-color: ${({theme}) => theme.white};
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const NavWrapper = styled.div`
  width: 90%;
  max-width: 130rem;
  margin: 3rem auto 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const NavList = styled(motion.ul)`
  overflow: hidden;
`;
export const NavItemContent = styled(motion.li)`
  margin: 1.5rem 0rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    cursor: pointer;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0.5rem 0rem;
  display: flex;
  align-items: left;
  justify-content: center;
  font-size: ${SIZES.large};
  color: ${({ theme }) => theme.white};
  &:hover {
    cursor: pointer;
  }
`;
export const NavText = styled(motion.span)`
  display: block;
  font-size: ${SIZES.medium};
  texte-decoration: none;
  overflow: hidden;
  color: ${({ theme }) => theme.black};

  &:hover {
    cursor: pointer;
  }
`;

// <------------------------- MAIN ------------------------->
export const Main = styled(motion.main)`
  width: 100%;
  min-height: 100vh;
  margin: 0rem auto;
`;

// <------------------------- FOOTER ------------------------->
export const FooterContainer = styled.footer`
  width: 100%;
  height: 6rem;
  //   background-color: ${({ theme }) => theme.black};
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
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    flex-direction: column;
  }
`;
export const ResponsiveIcons = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const IconLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;
export const Icon = styled.span`
    font-size: ${SIZES.medium};
    margin: 0rem 0.5rem;
    color ${({ theme }) => theme.white};
`;
export const FooterDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
export const FooterParagraph = styled.p`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.white};
  margin: 0rem 0.5rem;
`;
export const IconParagraph = styled.span`
  font-size: ${SIZES.small};
  color: #ff1515;
`;

// <------------------------- LANGUAGE ------------------------->
export const LanguageToggler = styled(motion.button)`
//   position: fixed;
//   bottom: 3rem;
//   left: 1rem;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: none;
  outline: noner;
  background-color: ${({ theme }) => theme.light};
  font-size: ${SIZES.regular};
  &:hover {
    cursor: pointer;
  }
`;

// <------------------------- NETWORKS ------------------------->
export const NetworksContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::before {
    content: "";
    width: 0.2rem;
    height: 15rem;
    background-color: ${({ theme }) => theme.black};
  }
  &::after {
    content: "";
    width: 0.2rem;
    height: 15rem;
    background-color: ${({ theme }) => theme.black};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NetworkLink = styled(motion.a)`
  font-size: ${SIZES.medium};
  color: ${({ theme }) => theme.black};
  margin: 0.5rem 0rem;
  &:first-child {
    margin-top: 1rem;
  }
  &:last-child {
    margin-bottom: 1rem;
  }
`;
