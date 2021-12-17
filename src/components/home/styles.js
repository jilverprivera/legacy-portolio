import { motion } from "framer-motion";
import styled from "styled-components";

// <------------------------- HOME ------------------------->
export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 130rem;
  min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column-reverse;
    margin: 0rem auto;
    // border: 1px solid #000;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 42rem;
  height: 70vh;
  //   border: 1px solid #000;
  overflow: hidden;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    width: 25rem;
    height: 40vh;
  }
`;
export const IntroWrapper = styled(motion.div)`
  width: 65rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto 0rem;
  }
`;
