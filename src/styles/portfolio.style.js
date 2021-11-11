import Link from "next/link";
import styled, { css } from "styled-components";
import { SIZES } from "../constants";

export const StagesContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-content: center;
    row-gap: 1rem;
    column-gap: 1rem;
    margin-bottom: 5rem;
//     border: 1px solid #000;
`;

export const StagesCard = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 6rem;
    overflow: hidden;
//     border: 1px solid #000;
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 1;
        transform: translateY(80%);
        transition: 0.4s;
    }
    .description_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        transform: translateY(150%);
        transition: 0.4s;
    }

    &:hover {
        .header {
            transform: translateY(-150%);
            opacity: 0;
        }
        .description_wrapper {
            transform: translateY(-30%);
            opacity: 1;
        }
    }
`;

export const StageNumber = styled.span`
    font-size: ${SIZES.body1};
    color: ${(props) => props.theme.secondary};
`;
export const StageIcon = styled.span`
    color: ${(props) => props.theme.secondary};
    font-size: ${SIZES.title2};
`;

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

export const PortfolioCard = styled.div`
    width: 100%;
    height: 30rem;
    background-color: ${(props) => props.theme.background_auxiliar};
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.1),
        -0.2rem -0.2rem 3.5rem rgba(255, 255, 255, 1);
`;

export const FeaturedCard = styled.div`
    width: 100%;
    margin: 3rem auto;
    position: relative;

    //     border: 1px solid #000;
    &:nth-child(odd) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        @media (max-width: 76.8rem) {
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
        @media (max-width: 76.8rem) {
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
    //     max-width: 40rem;
    display: flex;
    align-items: ${(props) => props.childAlign};
    justify-content: center;
    flex-direction: column;
    position: relative;
    @media (max-width: 76.8rem) {
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
    @media (max-width: 76.8rem) {
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
    @media (max-width: 76.8rem) {
        width: 100%;
        text-align: center;
    }
`;

export const FeaturedSkillsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 76.8rem) {
     width: 100%;
     // text-align: center;
 }
`;

export const FeaturedSkills = styled.span`
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
