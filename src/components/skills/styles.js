import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../../constants";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 125rem;
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
export const SkillGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  @media (max-width: 768px) {
    display: block;
    width: 90%;
    margin: 0rem auto;
  }
`;

export const TechnologiesGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 3rem;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: space-around;
    border: 1px solid #000;
    flex-direction: row;
    margin: 0rem auto;
  }
`;

export const TechnologyBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 1rem 0rem;
  font-size: ${SIZES.medium};
  font-weight: 600;
  color: ${({ selected, theme }) => (selected ? theme.black : theme.gray)};
  transition: 0.4s;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    text-align: center;
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
