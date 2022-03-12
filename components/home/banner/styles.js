import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-scroll";

import { SIZES } from "../../../constants";

// --- BANNER ---
export const Container = styled(motion.section)`
  width: 90%;
  max-width: 120rem;
  min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;


export const Name = styled.h1`
  font-size: ${SIZES.semiLarge};
  font-weight: 400;
`;
export const Descriptions = styled.h2`
  font-size: 10rem;
  color: #383737;
  font-weight: 400;
  color: ${({ theme }) => theme.black};
`;
export const LinkedBtn = styled(Link)`
  padding: 1rem 2rem;
  // margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: ${SIZES.regular};
  border-radius: 0.25rem;
  &:hover {
    cursor: pointer;
  }
`;
