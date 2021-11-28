import styled from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../../constants";

// <----------------- INTRODUCTION ----------------->
export const IntroductionContent = styled(motion.div)`
    width: 50%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

// <----------------- SKILLS ----------------->
export const BgSkill = styled(motion.section)`
    width: 100%;
    padding: 3rem 0rem;
    background-color: ${({ theme }) => theme.white_auxiliar}};
    margin-top: 3rem;
    `;

export const SkillContent = styled.div`
    width: 100%;
    max-width: 125rem;
    position: relative;
    margin: 0rem auto;
`;

export const SkillGrid = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
`;

export const SkillCard = styled(motion.div)`
    background-color: ${({ theme }) => theme.white_auxiliar}};
    min-height: 20rem;
    overflow: hidden;
    border-right: 1px solid ${({ theme }) => theme.white};
    &:last-child {
        border-right: none;
    }
`;

export const SkillHeader = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
`;

export const SkillIcon = styled.div`
    font-size: ${SIZES.medium};
    color: ${({ theme }) => theme.secondary};
    margin-right: 1rem;
`;

export const SkillTitle = styled.h2`
    color: ${({ theme }) => theme.black};
    font-size: ${SIZES.regular};
    font-weight: 500;
`;

export const SkillsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: 1rem;
    row-gap: 1rem;
    @media (max-width: 768px) {
        width: 90%;
        margin: 0rem auto;
    }
`;

export const Skill = styled.span`
    font-size: ${SIZES.extraSmall};
    color: ${({ theme }) => theme.black};
    margin: 0rem 1rem;
    &::before {
        content: "▹";
        font-size: ${SIZES.regular};
    }
`;

export const Wrapper = styled(motion.section)`
    width: 100%;
    max-width: 130rem;
    position: relative;
    margin: auto;
    display: grid;
    row-gap: 3rem;
    column-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    @media (max-width: 768px) {
        display: block;
    }
`;

// <----------------------- EDUCATION ----------------------->

export const Content = styled(motion.section)`
    margin: 3rem 0rem;
    width: 100%;
`;

export const TimeLineContainer = styled(motion.div)`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(odd) {
        flex-direction: row-reverse;
    }
    &:nth-child(even) {
        flex-direction: row;
    }
    @media (max-width: 768px) {
        width: 95%;
        margin: auto;
    }
`;

export const Line = styled.div`
    width: 0.5rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    background-color: ${(props) => props.theme.gray};
    transform: translate(-50%, 0%);
    @media (max-width: 768px) {
        left: 2rem;
    }
`;

export const TimeLineContent = styled(motion.div)`
    width: 28rem;
    background ${(props) => props.theme.white_auxiliar}};
    padding: 1rem;
    margin: 1rem 0rem;
    position: relative;
    border-radius: 0.5rem;
    display: flex;
    align-items: ${(props) => props.alignItems};
    justify-content: center;
    flex-direction: column;
    border: 0.2rem solid ${(props) => props.theme.gray};
    color: ${(props) => props.theme.text};
    @media(max-width: 768px) {
        position: relative;
        width: 90%;
        margin: 1rem 2rem 1rem 6rem;
        align-items:flex-start;
    }
 }
 `;

export const TimeLineTitle = styled.h2`
    font-size: ${SIZES.semiRegular};
    font-weight: 500;
`;

export const TimeLineParagraph = styled.p`
font-size: ${SIZES.extraSmall};
font-weight: 600;
margin: 0.5rem 0rem;
`

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
    font-size: ${SIZES.medium};
    background: ${({ background }) => background};
    color: ${(theme) => theme.white_auxiliar}};
    border-radius: 50%;
    border: 0.3rem solid ${({ theme }) => theme.black};
    z-index: 10;
    @media (max-width: 768px) {
        top: 50%;
        left: 2rem;
        width: 4rem;
        height: 4rem;
    }
    `;

// <----------------------- EXPERIENCE ----------------------->

export const ExperienceContent = styled(motion.div)`
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid ${(props) => props.theme.white_auxiliar}};
    @media (max-width: 768px) {
        width: 90%;
        margin: 0rem auto;
        display: block;
    }
    `;
