import styled from "styled-components";
import { SIZES } from "../constants";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  max-width: 130rem;
  margin: 0rem auto;
  //   padding-top: 7.5rem;
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

export const BoxContainer = styled.div`
  grid-column: span 5;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  width: 108.2rem;
  height: 100%;
`;

export const ProjectInformation = styled.div`
  grid-column: span 2;
  padding-left: 1.5rem;
  display: flex; 
  align-items:flex-start; 
  justify-content: center;
  flex-direction column;
`;
export const ProjectImage = styled.div`
  grid-column: span 3;
  overflow: hidden;
`;

export const ProjectIndex = styled.div`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  margin-bottom: 7rem;
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.large};
  // margin-bottom: 7rem;
  font-weight: 500;
`;
export const Categories = styled.div`
  margin-bottom: 7rem;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  margin-right: 0.5rem;
  position: relative;

  ::after {
    content: "/";
    margin-left: 0.5rem;
  }
  &:last-child {
    ::after {
      content: "";
      margin-left: 0rem;
    }
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.regular};
  font-weight: 400;
`;

export const ArrowLink = styled.span`
  width: 5rem;

  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  font-size: ${SIZES.semiLarge};
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;}
  &:hover{
    cursor: pointer;
  }
`;
export const LinkText = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.regular};
  font-weight: 400;
  margin-right: 1rem;
`;
