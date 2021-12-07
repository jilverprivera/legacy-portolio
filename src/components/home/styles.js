import { motion } from "framer-motion";
import styled from "styled-components";

import { SIZES } from "../../constants";

// <------------------------- HOME ------------------------->
export const BannerContainer = styled.div`
  width: 90%;
  position: relative;
  max-width: 120rem;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  max-height: 100vh;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImageRespContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 3rem;
  }
`;
export const AuthorName = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: ${SIZES.ultraLarge};
  font-weight: 700;
  @media (max-width: 768px) {
    margin: 2rem 0rem;
    font-size: ${SIZES.extraLarge};
    text-align: center;
  }
`;
export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Subtitle = styled.h2`
  font-size: ${SIZES.semiRegular};
  font-weight: 500;
  color: ${(props) => props.theme.text};
  @media (max-width: 768px) {
    font-size: ${SIZES.medium};
    text-align: center;
  }
`;
export const NetworksContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;
export const IconLink = styled.a`
  margin: 0rem 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.black};
  font-size: ${SIZES.large};
`;

// <------------------------- SERVICES ------------------------->
export const ServicesContainer = styled.section`
  width: 100%;
  max-width: 125rem;
  margin: 8rem auto 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const MessageContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Message = styled.p`
  font-size: ${SIZES.large};
  font-weight: 600;
  text-align: center;
`;
export const ServicesCardContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-right: 0.1rem solid #000000;

  &:last-child {
    border-right: none;
  }
`;
export const IconTitle = styled.span`
  font-size: ${SIZES.medium};
`;

// <------------------------- FEATURED ------------------------->
export const FeaturedContainer = styled.div`
  width: 100%;
  max-width: 125rem;
  min-height: 100vh;
  margin: 0rem auto 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  @media (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;
export const FeaturedContent = styled.section`
  width: 100%;
  display: grid;
  row-gap: 1rem;
  column-gap: 0rem;
  margin: 5rem auto;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(60rem, 1fr));
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Card = styled(motion.div)`
  width: 60rem;
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0rem auto 2rem;
  }
`;
export const BackgroundFeatured = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const CardIndex = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.1);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.2rem;
`;
export const CardCategory = styled.p`
  font-size: ${SIZES.extraSmall};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;
export const CardTitle = styled.h2`
  font-size: ${SIZES.large};
  letter-spacing: 0.1rem;
  margin-bottom: 0.5rem;
`;
export const CardDescription = styled.p`
  width: 90%;
  margin: 0rem auto;
  font-size: ${SIZES.regular};
  line-height: 3rem;
  text-align: center;
`;
export const TechnologiesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 1rem auto;
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
