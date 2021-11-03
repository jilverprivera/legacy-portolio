import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../constants";

export const IntroductionWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const ProfessionalWrapper = styled(motion.div)`
    margin-top: 3rem;
    width: 100%;
    display: block;
`;

export const SkillCard = styled.div`
    border-radius: 1rem;
    margin: 2rem 0rem;
`;

export const SkillsIconWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

export const SkillIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    .skill__tag {
        opacity: 0;
        transition: opacity 0.4s;
        font-size: 10px;
    }

    &:hover {
        .skill__tag {
            opacity: 1;
        }
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
