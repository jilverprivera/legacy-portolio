import styled from "styled-components";
// import Link from "next/link";
import { motion } from "framer-motion";

import { SIZES } from "../../constants";

// --- HEADER ---
export const HeaderContainer = styled(motion.header)`
  width: 100%;
  height: 7rem;
  position: fixed;
  top: 0rem;
  left: 0rem;
  z-index: 6000;
  // border: 1px solid #000;
  background-color: ${({ active, theme }) =>
    active ? theme.white : "transparent"};
  transition: 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderWrapper = styled.div`
  max-width: 130rem;
  width: 90%;
  margin: 0rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
// --- DRAWER ---
export const DrawerContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
`;
export const DrawerTitle = styled.span`
  color: ${({ theme }) => theme.gray};
  text-transform: uppercase;
  font-size: ${SIZES.small};
  letter-spacing: 0.3rem;
  font-weight: 700;
`;

export const LinkText = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  font-size: ${SIZES.semiLarge};
  letter-spacing: 0.3rem;
  margin: 1.5rem 0rem;
  font-weight: 700;
`;
export const DrawerBottomMessage = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const DrawerMessage = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: ${SIZES.small};
`;
export const DrawerIcon = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: ${SIZES.small};
  margin: 0rem 0.5rem;
`;
// --- MAIN ---
export const Main = styled(motion.main)`
  width: 100%;
  min-height: 100vh;
`;

// --- FOOTER ---
export const FooterContainer = styled.footer`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.black};
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

// ---- PANELS ----
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
  z-index: 2000;
`;
export const RightPanel = styled(motion.div)`
  position: fixed;
  z-index: 2000;
  top: 6rem;
  right: 0;
  width: 50%;
  height: calc(100vh - 5.5rem);
  background-color: ${({ theme }) => theme.light};
`;

// --- NAVIGATION ---

export const Navigation = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  margin: 0rem 1rem;

  font-size: ${SIZES.regular};
`;
