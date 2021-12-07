import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../constants";

export const BodyContainer = styled.div`
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;
export const Container = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const LocationTitle = styled.p`
  font-size: ${SIZES.regular};
  font-weight: 500;
  margin-bottom: 5rem;
`;
