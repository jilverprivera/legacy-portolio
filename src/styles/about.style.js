import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../constants";

export const IntroductionWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 76.8rem) {
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

export const SkillCard = styled.div`
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

export const EducationCard = styled.div`
    position: relative;
    padding: 1rem;
    margin: 2rem 0rem;
    // border: 0.1rem solid #000;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.background_auxiliar};
`;

export const EducationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
`;

export const EducationIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;
    margin-right: 1rem;
    background-color: ${(props) => props.bgColor};
    font-size: ${SIZES.body1};
    color: ${(props) => props.theme.text};
`;

export const ExperienceCard = styled.div`
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid ${(props) => props.theme.background_auxiliar};
`;
