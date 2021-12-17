import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../../constants";

export const CurrentContainer = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  row-gap: 2rem;
  column-gap: 2rem;
  margin-bottom: 4rem;
  //   border: 1px solid #000;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const CurrentImageContainer = styled(motion.div)`
  width: 60rem;
  height: 35rem;
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 4px 4px 20px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    margin: 0rem auto 2rem;
  }
`;

export const CurrentInformationContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin: 1rem 0rem;
`;
export const Technology = styled.span`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.black};
  margin: 0rem 0.5rem;
`;
export const ExternalLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 1;
`;
export const ExternalLink = styled.a`
  text-decoration: none;
  font-size: ${SIZES.medium};
  color: ${({ theme }) => theme.black};
  margin: 0rem 0.5rem;
`;

export const ProjectsContainer = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  place-items: center;
  row-gap: 1.5rem;
  column-gap: 1.5rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ProjectImageContainer = styled(motion.div)`
  width: 30rem;
  height: 17.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 20px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0rem auto 2rem;
  }
`;
