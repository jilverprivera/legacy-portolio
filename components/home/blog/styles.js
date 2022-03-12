import styled from "styled-components";

import { motion } from "framer-motion";
import { SIZES } from "../../../constants";

export const Container = styled(motion.section)`
  width: 90%;
  max-width: 130rem;
  min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  max-width: 120rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  &:first-child {
    margin-top: 0rem;
  }
  &:last-child {
    margin-bottom: 0rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 60rem;
  height: 35rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;

  margin: 0rem auto;
`;
export const InformationWrapper = styled.div`
  width: 60rem;
  position: relative;
  display: flex;
  margin: 0rem 2rem;
  align-items: ${({ right }) => (right ? "flex-start" : "flex-end")};
  justify-content: center;
  flex-direction: column;
`;

export const ProjectIndex = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${SIZES.number};
  color: ${({ theme }) => theme.black};
  opacity: 0.1;
  font-weight: 900;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.2rem;
`;
export const Date = styled.span`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.gray};
  font-weight: 300;
`;

export const ProjectName = styled.h3`
  font-size: ${SIZES.semiLarge};
  color: ${({ theme }) => theme.black};
  margin: 0.5rem 0rem;
`;
export const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Category = styled.span`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.gray};
  font-weight: 300;
  margin-right: 0.5rem;
  ::before {
    content: "/";
    margin-right: 0.5rem;
  }
  &:first-child {
    ::before {
      content: "";
      margin-right: 0rem;
    }
  }
`;
export const Description = styled.p`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.black};
  margin: 0.5rem 0rem;
  line-height: 2.5rem;
  text-align: ${({ right }) => (right ? "right" : "left")};
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Technology = styled.span`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  font-weight: 400;
  margin-right: 0.5rem;
  ::before {
    content: "/";
    margin-right: 0.5rem;
  }
  &:first-child {
    ::before {
      content: "";
      margin-right: 0rem;
    }
  }
`;

export const TextLink = styled.a`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  position: relative;
  border: 1px solid ${({ theme }) => theme.primary};
  transition: 0.25s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.white};
    // border: 1px solid transparent;
    background-color: ${({ theme }) => theme.primary};
  }
`;
