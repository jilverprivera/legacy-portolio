import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../constants";

export const Container = styled(motion.section)`
  width: 100%;
  overflow: hidden;
//   border: 1px solid #000;
`;

export const Wrapper = styled.section`
  width: 90%;
  max-width: 125rem;
  min-height: 100vh;
  margin: 8rem auto 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;

export const LocationTitle = styled.p`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.black};
  font-weight: 600;
  margin-bottom: 5rem;
`;
