import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../../constants";

export const GridContainer = styled(motion.section)`
  position: relative;
  max-width: 125rem;
  width: 100%;
  margin: auto;
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  @media (max-width: 768px) {
    display: block;
    width: 90%;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 125rem;
  margin: 8rem auto 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

//Introduction
export const IntroductionContainer = styled(motion.div)`
  width: 100%;
  margin: 8rem auto 4rem;
  //   min-height:100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  //   margin: 8rem auto 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  .image {
    border-radius: 1rem;
  }
`;

export const ShortDescription = styled.p`
  font-size: ${SIZES.extraLarge};
  width: 100%;
  font-weight: 500;
  margin-bottom: 4rem;
`;

export const LocationTitle = styled.p`
  font-size: ${SIZES.regular};
  font-weight: 500;
  margin-bottom: 5rem;
`;

//Skills
export const SkillContainer = styled.section`
  width: 100%;
  min-height: 100vh;
//   padding: 3rem 0rem;
  background-color: ${({ theme }) => theme.white_auxiliar};
  margin-top: 3rem;
`;

export const SkillGrid = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const TechnologiesGroup = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const TechnologyBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 1rem 0rem;
  font-size: ${SIZES.large};
  font-weight: 600;
  color: ${({ selected }) => selected};
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(motion.span)`
  background-color: transparent;
`;

export const TechnologiesWrapper = styled(motion.div)`
  //   border: 1px solid #000;
`;
export const TechnologiesContent = styled(motion.div)`
  //   border: 1px solid #000;
`;

export const Content = styled(motion.section)`
  margin: 3rem 0rem;
  width: 100%;
`;

export const TimeLineContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  &:nth-child(even) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
  }
`;

export const Line = styled.div`
  width: 0.5rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  background-color: ${({ theme }) => theme.gray};
  transform: translate(-50%, 0%);
  @media (max-width: 768px) {
    left: 2rem;
  }
`;

export const TimeLineContent = styled(motion.div)`
    width: 28rem;
    background ${({ theme }) => theme.white_auxiliar}};
    padding: 1rem;
    margin: 1rem 0rem;
    position: relative;
    border-radius: 0.5rem;
    display: flex;
    align-items: ${({ align }) => align};
    justify-content: center;
    flex-direction: column;
    border: 0.2rem solid ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.black};
    @media(max-width: 768px) {
        position: relative;
        width: 90%;
        margin: 1rem 2rem 1rem 6rem;
        align-items:flex-start;
    }
 }
 `;

export const TimeLineTitle = styled.h2`
  font-size: ${SIZES.semiRegular};
  font-weight: 500;
`;

export const TimeLineParagraph = styled.p`
  font-size: ${SIZES.extraSmall};
  font-weight: 600;
  margin: 0.5rem 0rem;
`;

export const TimeLineIcon = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${SIZES.medium};
    background: ${({ background }) => background};
    color: ${(theme) => theme.white_auxiliar}};
    border-radius: 50%;
    border: 0.3rem solid ${({ theme }) => theme.black};
    z-index: 10;
    @media (max-width: 768px) {
        top: 50%;
        left: 2rem;
        width: 4rem;
        height: 4rem;
    }
    `;

export const ExperienceContent = styled(motion.div)`
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.white_auxiliar};
  @media (max-width: 768px) {
    width: 90%;
    margin: 0rem auto;
    display: block;
  }
`;
