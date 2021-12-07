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

export const IntroductionContainer = styled(motion.div)`
  width: 100%;
  margin: 8rem auto 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ShortDescription = styled.p`
  font-size: ${SIZES.extraLarge};
  width: 100%;
  font-weight: 500;
  margin-bottom: 4rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 8rem auto 0rem;


  display: flex;
  align-items: flex-start;
  justify-content: center;
//   border: 1px solid #000;
  .image {
    border-radius: 1rem;
  }
`;
