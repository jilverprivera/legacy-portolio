import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../../../constants";

export const BlogContainer = styled(motion.main)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10rem auto 0rem;
  min-height: 100vh;
`;

export const BlogHeaderContent = styled.header`
  width: 80%;
  max-width: 120rem;
  margin: 10rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BlogDate = styled.span`
  color: ${({ theme }) => theme.gray};
  margin-bottom: 2rem;
`;
export const BlogTitle = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.large};
`;
