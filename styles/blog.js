import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { SIZES } from "../constants";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 130rem;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.black};
  transform: rotate(-90deg);
  text-align: center;
  text-transform: uppercase;
  font-size: ${SIZES.medium};
  font-weight: 700;
`;
export const BlogWrapper = styled(motion.section)`
  grid-column: span 5;
  position: relative;
  width: 90%;
  max-width: 130rem;
  // min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BlogHeader = styled.div`
  grid-column: span 5;
  padding: 5rem 0rem;
  margin: 0rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Date = styled.span`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.gray};
`;
export const Title = styled.h1`
  font-size: ${SIZES.large};
`;

export const TagContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Tag = styled.span`
  font-size: ${SIZES.regular};
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  position: relative;
  ::before {
    content: "|";
    margin: 0rem 1rem;
    color: ;
  }
  &:first-child {
    ::before {
      content: "";
      margin-left: 0rem;
    }
  }
`;
