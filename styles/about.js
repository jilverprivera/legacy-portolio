import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../constants";

export const Content = styled(motion.div)`
  width: 100%;
`;
export const Card = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0rem;
  }
`;

export const EducationCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0rem;
  }
`;
export const EducationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.regular};
  font-weight: 500;
`;

export const ExperienceDate = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  font-weight: 300;
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  font-weight: 500;
  padding-left: 1rem;
  position: relative;
  ::before {
    content: "›";
    position: absolute;
    left: 0rem;
  }
`;
export const CompanyLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-size: ${SIZES.medium};
  font-weight: 600;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    width: 0rem;
    background-color: ${({ theme }) => theme.primary};
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    font-weight: 600;
    ::before {
      content: "";
      position: absolute;
      bottom: 0rem;
      left: 0rem;
      width: 100%;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.primary};
      border-radius: 0.2rem;
    }
`;

export const EducationAcademy = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  font-weight: 400;
`;
export const EducationDate = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  font-weight: 400;
`;
export const EducationLocation = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  font-weight: 400;
`;
export const EducationLink = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: ${SIZES.padding} calc(${SIZES.padding} * 1);
  font-size: ${SIZES.small};
  font-weight: 500;
  border-radius: ${SIZES.borderRadius};
`;
