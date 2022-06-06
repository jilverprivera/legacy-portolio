import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { SIZES } from "../constants";

// ---- PROJECTS ---- //
export const ProjectGrid = styled.section`
  width: 100%;
  max-width: 152.2rem;
  // min-height: 100vh;
  margin: 0rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50.2rem, 1fr));
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 36rem;
  z-index: 1000;
`;
export const ProjectContainer = styled.div`
  width: 100%;
  height: 36rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  transition: all 0.2s ease-in-out;
  background-color: ${({ isHover }) =>
    isHover ? "rgba(0, 0, 0, 0.6)" : "transparent"};
  opacity: ${({ isHover }) => (isHover ? "1" : "0")};
  z-index: 1000;
  padding: 3rem;
`;
export const ProjectIndex = styled.span`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${SIZES.megaLarge};
  font-weight: 700;
  color: rgba(255, 255, 255, 0.25);
`;

export const ProjectDate = styled.span`
  font-size: ${SIZES.small};
  font-weight: 400;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.gray};
`;

export const ProjectTitle = styled.h3`
  font-size: ${SIZES.large};
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;

export const Category = styled.span`
  font-size: ${SIZES.small};
  font-weight: 300;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.white};
  position: relative;
  margin-right: 0.5rem;
  ::after {
    content: "/";
    margin-left: 0.5rem;
  }
  &:last-child {
    ::after {
      content: "";
      margin-right: 0rem;
    }
  }
`;

// ----BLOG ---- //
export const BlogWrapper = styled(motion.section)`
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

export const PostWrapper = styled.div`
  width: 110rem;
  // border-bottom: 0.1rem solid ${({ theme }) => theme.gray};
  // padding-bottom: 1rem;
  margin: 1.5rem 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &:first-child {
    margin-top: 0rem;
  }
`;
export const PostDate = styled.span`
  font-size: ${SIZES.small};
  font-weight: 400;
  color: ${({ theme }) => theme.gray};
`;

export const PostURL = styled.a`
  text-decoration: none;
`;
export const PostTitle = styled.h3`
  font-size: ${SIZES.semiLarge};
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

export const PostTags = styled.span`
  font-size: ${SIZES.regular};
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  position: relative;
  margin-right: 0.5rem;
  ::after {
    content: "/";
    margin-left: 0.5rem;
  }
  &:last-child {
    ::after {
      content: "";
      margin-right: 0rem;
    }
  }
`;

export const PostDescription = styled.p`
  font-size: ${SIZES.regular};
  font-weight: 400;

  color: ${({ theme }) => theme.gray};
`;
