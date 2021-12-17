import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../../constants";

export const GridContainer = styled(motion.section)`
  position: relative;
  max-width: 130rem;
  width: 100%;
  margin: auto;
  display: grid;
  row-gap: 5rem;
  column-gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  @media (max-width: 768px) {
    display: block;
    width: 90%;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 125rem;
//   border: 1px solid #000;
  margin: 8rem auto 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
export const Content = styled(motion.section)`
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
  width: 26rem;
  background ${({ theme }) => theme.white}};
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
