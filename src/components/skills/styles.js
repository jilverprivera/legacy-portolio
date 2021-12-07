import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../../constants";

export const SkillContainer = styled.section`
  width: 100%;
//   height: 100vh;
  background-color: ${({ theme }) => theme.white_auxiliar};
//   padding: 8rem auto 4rem;
  border: 1px solid ${({ theme }) => theme.white_auxiliar};
  `;
  export const Wrapper = styled.section`
  width: 100%;
//   border: 1px solid #000;
  max-width: 125rem;
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
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
