import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { SIZES } from "../constants";

export const BannerContent = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 3rem 0rem;
    background-color: ${(props) => props.theme.secondary};
`;

export const BannerLink = styled.span`
    padding: 2rem 5rem;
    font-size: ${SIZES.body4};
    color: ${(props) => props.theme.background_auxiliar};
    background-color: ${(props) => props.theme.text};
    //     border: 1px solid #000;
    &:hover {
        cursor: pointer;
    }
`;

// <--------- MULTIFUNCTIONAL COMPONENTS --------->

export const ProjectSkillsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin: ${(props) => props.margin};
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

export const ProjectSkill = styled.span`
    font-size: ${SIZES.body5};
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.text};
    &::before {
        content: "";
        margin: 0rem 0.5rem;
    }
    &:first-child {
        &::before {
            content: "";
            margin: 0rem;
        }
    }
`;

export const FeaturedCard = styled(motion.div)`
    width: 100%;
    margin: 3rem auto;
    position: relative;

    &:nth-child(odd) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        @media (max-width: 768px) {
            display: block;
            border-bottom: 0.1rem solid
                ${(props) => props.theme.background_auxiliar};
        }
    }

    &:nth-child(even) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        @media (max-width: 768px) {
            display: block;
            border-bottom: 0.1rem solid
                ${(props) => props.theme.background_auxiliar};
        }
    }
`;
export const FeaturedImage = styled.div`
    max-width: 60rem;
`;

export const FeaturedData = styled.div`
    width: 40%;
    display: flex;
    align-items: ${(props) => props.childAlign};
    justify-content: center;
    flex-direction: column;
    position: relative;
    @media (max-width: 768px) {
        margin-top: 3rem;
        width: 100%;
    }
`;

export const FeaturedIndex = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${(props) => props.theme.background_auxiliar};
    z-index: -1;
    transform: translate(-50%, -50%);
    font-size: 17.5rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
`;

export const FeaturedTitle = styled.p`
    font-size: ${SIZES.body4};
    color: ${(props) => props.theme.secondary};
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

export const FeaturedProjectName = styled.p`
    font-size: ${SIZES.body2};
    color: ${(props) => props.theme.text};
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

export const Card = styled(motion.div)`
    width: 100%;
    height: 30rem;
    position: relative;
    background-color: ${(props) => props.theme.background_auxiliar};
    border-radius: 0.5rem;
    padding: 2rem;
    @media (max-width: 768px) {
        margin: 2rem 0rem;
    }
`;
export const IndexProject = styled.span`
    position: absolute;
    top: -2rem;
    right: 1rem;
    font-size: ${SIZES.ultraLarge};
    font-weight: 800;
    color: ${(props) => props.theme.background};
`;
export const CardIcon = styled.div`
    height: 7rem;
    color: ${(props) => props.theme.text};
    font-size: ${SIZES.largeTitle};
`;

export const CardTitle = styled.h2`
    height: 5rem;
    font-size: ${SIZES.smallTitle};
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const CardDescription = styled.p`
    height: 11rem;
    font-size: ${SIZES.smallParagraph};
    color: ${(props) => props.theme.text};
    line-height: 2.2rem;
`;

export const StagesContainer = styled.div``;

export const StagesContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0rem auto;
`;

export const StagesCard = styled(motion.div)`
    width: 35rem;
    position: relative;
    margin: 1rem 0rem;
    border-radius: 0.75rem;
    overflow: hidden;
    background-color: ${(props) => props.theme.primary};

    left: calc(34rem * ${(props) => props.cardAlign});

    &:hover {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 100%;
        display: block;
        border: 1px solid #000;
        left: 0rem;
    }
`;

export const StageCardTitle = styled.div`
    position: relative;
    // border: 1px solid #000;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const StageCardContent = styled.div`
    background-color: ${(props) => props.theme.background_auxiliar};
    // padding: 1rem;
    height: ${props => props.contentHeight};
    transition: all 0.4s;
`;

export const StageIndex = styled.span`
position: relative;
top: -0.25rem;
    font-size: ${SIZES.large};
    font-weight: 800;
    margin-right: 1rem;


    color: ${(props) => props.theme.background_auxiliar};
`;
export const StageIcon = styled.span`
    color: ${(props) => props.theme.secondary};
    font-size: ${SIZES.title2};
`;
