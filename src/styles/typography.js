import styled, { css } from "styled-components";
import { SIZES } from "../constants";

// <---- HOME ---->
export const WelcomeMessage = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.medium};
  @media (max-width: 768px) {
    margin-top: 2rem;
    text-align: center;
  }
`;
export const ShortDescription = styled.p`
  font-size: ${SIZES.large};
  width: 100%;
  font-weight: 500;
  margin: 4rem 0rem;
  color: ${({ theme }) => theme.black};
  @media (max-width: 768px) {
    margin: 2rem 0rem;
    text-align: center;
  }
`;
export const Description = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.black};
  line-height: 3rem;
  font-size: ${SIZES.regular};
  @media (max-width: 768px) {
    text-align: center;
  }
`;

// <---- PROJECTS ---->
export const CurrentCategory = styled.h2`
  color: ${({ theme }) => theme.black};
  font-size: ${SIZES.small};
  text-transform: uppercase;
  font-weight: 600;
`;
export const CurrentName = styled.h2`
  color: ${({ theme }) => theme.black};
  margin: 1.5rem 0rem;
  font-size: ${SIZES.medium};
  font-weight: 600;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.black};
  line-height: 3rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  //<---- SIZES ---->
  ${({ small }) =>
    small &&
    css`
      font-size: ${SIZES.small};
    `}
  ${({ regular }) =>
    regular &&
    css`
      font-size: ${SIZES.regular};
    `}
    ${({ medium }) =>
    medium &&
    css`
      font-size: ${SIZES.semiRegular};
    `}
    ${({ large }) =>
    large &&
    css`
      font-size: ${SIZES.large};
    `}
    ${({ extraLarge }) =>
    extraLarge &&
    css`
      font-size: ${SIZES.medium};
    `}
    
    //<---- ALIGN ---->
    ${({ left }) =>
    left &&
    css`
      text-align: left;
    `}
    ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
    ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}
`;

export const Title = styled.h2`
  font-size: ${SIZES.large};
  position: relative;
  margin-bottom: 3rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.25rem;
  color: ${({ theme }) => theme.white};
  z-index: 1;
  text-transform: uppercase;
  width: 100%;
  &:before {
    content: "${({ content }) => content}";
    font-size: ${SIZES.extraSmall};
    color: ${({ theme }) => theme.secondary};
    width: 100%;
    position: absolute;
    top: -2rem;
    font-weight: 400;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 0.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  //<---- ALIGN ---->
  ${({ left }) =>
    left &&
    css`
      text-align: left;
    `}
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
    ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}
`;

export const LinearText = styled.p`
  position: absolute;
  top: 0rem;
  right: 7.5rem;
  font-size: ${SIZES.ultraLarge};
  font-weight: 700;
  color: rgba(0, 0, 0, 0.035);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.2rem;
`;

export const LittleTitle = styled.h2`
  text-align: center;
  font-size: ${SIZES.regular};
  text-transform: uppercase;
  margin-bottom: 3rem;
  letter-spacing: 0.3rem;
`;
