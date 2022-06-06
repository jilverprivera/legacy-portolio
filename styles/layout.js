import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../constants";
import { Link as NavLink } from "react-scroll";

// ---- CONTAINER ---- //
export const Main = styled(motion.main)`
  width: ${({ post }) => (post ? "60%" : "100%")};
  margin: 0rem auto;
  min-height: 100vh;
`;

// ---- CONTAINER ---- //
export const Container = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme, alternative }) =>
    alternative ? theme.primary : theme.white};
`;
export const Wrapper = styled(motion.section)`
  position: relative;
  width: 90%;
  max-width: ${({ full }) => (full ? "100%" : "130rem")};
  min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  align-items: ${({ alignstart }) => (alignstart ? "flex-start" : "center")};
  justify-content: ${({ justifystart }) =>
    justifystart ? "flex-start" : "center"};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;
export const WrapperGrid = styled.section`
  width: 100%;
  max-width: 152.2rem;
  min-height: 100vh;
  margin: 0rem auto;
  padding: calc(5 * ${SIZES.margin}) 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(65rem, 1fr));
`;

// ---- HEADER ---- //
export const HeaderContainer = styled(motion.header)`
  width: 100%;
  height: 7rem;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.25rem);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 130rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const LocalNav = styled(NavLink)`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const NavItem = styled.span`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  font-weight: ${({ currentPath }) => (currentPath ? "600" : "400")};
  margin: 0rem 1rem;
  &:first-child {
    margin-left: 0rem;
  }
  ::after {
    content: "";
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    bottom: -0.5rem;
    transition: all 0.2s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ currentPath, theme }) =>
      currentPath ? theme.secondary : "transparent"};
  }
`;

// ---- DROPDOWN ---- //
export const DropdownContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  // background-color: ${({ theme }) => theme.white};
  &:hover {
    cursor: pointer;
  }
`;
export const DropdownText = styled.span`
  position: relative;
  text-transform: uppercase;
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  font-weight: ${({ clicked }) => (clicked ? "600" : "400")};
  margin: 0rem 0.5rem;
`;
export const DropdownIconText = styled.div`
  transition: all 0.2s ease-in-out;
  transform: ${({ isPress }) => (isPress ? "rotate(-180deg)" : "rotate(0deg)")};
`;
export const DropdownWrapper = styled(motion.div)`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  padding: calc(${SIZES.padding} * 2);
  border-radius: ${SIZES.borderRadius};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
`;
export const DropdownItem = styled(motion.a)`
  position: relative;
  text-decoration: none;
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  font-weight: ${({ currentPath }) => (currentPath ? "600" : "400")};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  margin: 0.5rem 0rem;
`;
export const DropdownIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${({ bgColor }) => bgColor};
  color: ${({ iconColor }) => iconColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  margin-right: 1rem;
`;
export const MenuBackground = styled.nav`
  width: 7rem;
  height: 7rem;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({ theme, isOpen }) => theme.black};
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HamburgerContent = styled.div`
  width: 4rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Hamburger = styled.div`
  width: 3.5rem;
  height: ${({ isOpen }) => (isOpen ? "0rem" : "0.5rem")};
  transition: all 0.1s ease-in-out;
  border-radius: 0.125rem;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.gray : theme.white};
  ::before {
    content: "";
    position: absolute;
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg)" : "translateY(-1rem)"};
    width: 3.5rem;
    height: 0.5rem;
    border-radius: 0.125rem;
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.gray : theme.white};
    transition: all 0.4s ease-in-out;
  }
  ::after {
    content: "";
    position: absolute;
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg)" : "translateY(1rem)"};
    transition: all 0.4s ease-in-out;
    width: 3.5rem;
    height: 0.5rem;
    border-radius: 0.125rem;
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.gray : theme.white};
  }
`;

// ---- MENU ---- //
export const MenuContainer = styled(motion.div)`
  width: 50%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.75rem);
  position: fixed;
  top: 0;
  right: 0;
  padding: 10rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 1000;
`;
export const LinkContent = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
`;
export const LinkNumber = styled.span`
  font-size: ${SIZES.small};
`;
export const LinkText = styled.span`
  font-size: ${SIZES.large};
  margin-left: ${SIZES.margin};
  text-transform: uppercase;
  font-weight: 600;
`;

// ---- FOOTER ---- //
export const FooterContainer = styled.div`
  width: 100%;
  height: 50vh;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: calc(50vh - 10rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NetworkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FooterNetworkContent = styled.a`
  margin: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
export const FooterIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.medium};
  &:hover {
    color: ${({ iconColor }) => iconColor};
    background: ${({ bgColor }) => bgColor};
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
