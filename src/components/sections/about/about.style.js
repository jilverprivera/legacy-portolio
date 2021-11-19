import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../../../constants";

export const IntroductionWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%;
        margin: 0rem auto;
    }
`;

export const ProfessionalWrapper = styled(motion.div)`
    margin-top: 3rem;
    width: 100%;
    display: block;
`;

export const SkillWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
`;

export const SkillCard = styled(motion.div)`
    background-color: ${(props) => props.theme.background_auxiliar};
    border-radius: 1rem;
    min-height: 20rem;
    overflow: hidden;
`;

export const SkillTitleWrapper = styled.div`
    background-color: ${(props) => props.background};
    width: 100%;
    height: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

export const SkillIcon = styled.div`
    font-size: ${SIZES.body2};
    color: ${(props) => props.theme.text};
`;
export const SkillTitle = styled.h2`
    color: ${(props) => props.theme.text};
`;
export const TitleIcon = styled.span`
    position: absolute;
    bottom: -4rem;
    left: 50%;
    font-size: 5rem;
    transform: translateX(-50%);
    color: ${(props) => props.background};
`;

export const SkillContent = styled.div`
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    grid-column: 1rem;
    row-gap: 1rem;
`;

export const SkillText = styled.span`
    font-size: ${SIZES.body5};
    color: ${(props) => props.theme.text};
    margin: 0rem 1rem;
    &::before {
        content: "▹";
        font-size: ${SIZES.body3};
    }
`;

export const ExperienceCard = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // row-gap: 1rem;
    // column-gap: 1rem;
    border-bottom: 0.2rem solid ${(props) => props.theme.background_auxiliar};
    @media (max-width: 768px) {
        border: 1px solid #000;
        display: block;
    }
`;

export const ExperienceDate = styled.span`
    position: relative;
    font-size: ${SIZES.body4};
    grid-column: span 5;
    margin: 1rem 0rem;
    // border: 1px solid #000;
    &::after {
        position: absolute;
        bottom: 0rem;
        left: 0rem;
        content: "";
        width: 100%;
        height: 0.3rem;
        border-radius: 0.5rem;
    }
`;

export const ExperienceIcon = styled.span`
    font-size: ${SIZES.medium};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &::after {
        content: "▹";
        top: 0.85rem;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: ${SIZES.large};
        left: 0rem;
        width: 100px;
        height: 0.4rem;
        background-color: ${(props) => props.theme.text};
    }
`;

export const ExperienceInformation = styled.div`
    grid-column: span 4;
    // border: 1px solid #000;
`;

// <----------------------- TIMELINE ----------------------->

export const TimeLineContent = styled(motion.div)`
    width: 100%;
    position: relative;
    &:nth-child(odd) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        @media (max-width: 768px) {
            display: block;
            margin: 1.5rem 0rem;
        }
    }

    &:nth-child(even) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        @media (max-width: 768px) {
            display: block;
            //   width: 80%;
            margin: 1.5rem 0rem;
        }
    }
`;

export const TimeLineCard = styled.div`
     min-width: 25rem;
     background ${(props) => props.theme.background_auxiliar};
     padding: 1rem;
     position: relative;
     border-radius: 0.5rem;
     display: flex;
     align-items: ${(props) => props.alignItems};
     justify-content: center;
     flex-direction: column;

     color: ${(props) => props.theme.text};
     @media(max-width: 768px) {
          width: 100%;
          margin: auto;
          align-items:flex-start;
     }
   
 }
`;

export const TimeLineTitle = styled.h2`
    font-size: ${SIZES.title4};
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        position: relative;
        top: 0.75rem;
        margin-left: 5rem;
        margin-bottom: 3rem;
    }
`;

export const TimeLineIcon = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${SIZES.body2};
    background: ${(props) => props.background};
    color: ${(props) => props.theme.background_auxiliar};
    border-radius: 50%;
    border: 0.3rem solid ${(props) => props.theme.text};
    z-index: 10;

    &::after {
        content: "";
        position: absolute;
        background-color: #ddd;
        left: ${(props) => props.leftChild};
        width: 100%;
        height: 0.3rem;
        border-radius: 0.5rem;
    }
    @media (max-width: 768px) {
        top: 3rem;
        left: 3rem;
        &::after {
            content: "";
            width: 0rem;
            height: 0rem;
        }
    }
`;

export const TimeLineDate = styled.span``;

export const TabItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const TabButton = styled.button`
    position: relative;
    color: ${(props) => props.theme.text};
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 0.2rem;
    font-weight: 600;
    
    font-size: ${SIZES.body4};
    margin: 0rem 1rem;
    padding: 0rem 1rem 1rem;
    &:hover {
        cursor: pointer;
    }

    &:: after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        width: ${(props) => props.activeWidth};
        height: 0.25rem;
        background: ${props => props.theme.primary};
        border-radius: 5rem;
        transition: 0.4s;
    }
`;
