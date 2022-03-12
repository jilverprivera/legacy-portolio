import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../constants";

export const GlobalContainer = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ bg, theme }) => (bg ? theme.white_1 : "transparent")};
  padding: 10rem 0rem;
`;
export const GlobalFlexStartWrapper = styled(motion.section)`
  width: 90%;
  max-width: 130rem;
  margin: 0rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const GlobalAppWrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GlobalTitle = styled.h2`
  font-size: ${SIZES.regular};
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const SectionTitleContainer = styled.div`
  padding: 8rem 0rem;
  background-color: ${({ theme }) => theme.black};
`;
export const SectionWrapper = styled.div`
  width: 90%;
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ComponentHeader = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  flex-direction: row;
`;
export const Title = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: ${SIZES.extraLarge};

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black};
  ::after {
    content: "";
    position: absolute;
    bottom: 1.25rem;
    right: -2rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const ComponentDescription = styled.p`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.white};
`;

export const LinkWrapper = styled.div`
  display: flex;
  border: 1px solid #000;
  align-items: center;
  jusitify-content: center;
  flex-direction: column;
`;
export const DialogMessage = styled.span`
  font-size: ${SIZES.small};
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray};
`;
