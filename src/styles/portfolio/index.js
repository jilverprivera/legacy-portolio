import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { SIZES } from "../../constants";

export const ContentFeatured = styled(motion.section)`
    position: relative;
    max-width: 125rem;
    margin: auto;
    display: grid;
    row-gap: 3rem;
    column-gap: 3rem;
    margin: 5rem 0rem;
    place-items: center;
    // border: 1px solid #000;
    grid-template-columns: repeat(auto-fill, minmax(60rem, 1fr));
    @media (max-width: 768px) {
        display: block;
    }
    // <----- WIDHT ----->
    ${({ width90 }) =>
        width90 &&
        css`
            width: 90%;
        `}
    ${({ width100 }) =>
        width100 &&
        css`
            width: 100%;
        `}
`;
export const Card = styled(motion.div)`
    width: 45rem;
    height: 50rem;
    box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    position: relative;
    background-color: ${({ theme }) => theme.white_auxiliar};
    transition: 0.4s;
    &:first-child {
        width: 50rem;
        height: 60rem;
    }
    &:hover {
        background-color: ${({ theme }) => theme.light};
    }
`;

export const LastProjectIcon = styled.span`
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 5rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${SIZES.large};
    z-index: 1;
`;

export const FeaturedData = styled.div`
    width: 100%;
    position: relative;
    padding: 2rem;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin: auto;
`;
export const FeaturedTitle = styled.h3`
    font-size: ${SIZES.extraSmall};
    color: ${({ theme }) => theme.gray};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

export const FeaturedIndex = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    color: ${({ theme }) => theme.white};
    transform: translate(-50%, -50%);
    font-size: 17.5rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
`;

export const ProjectTitle = styled.h2`
    font-size: ${SIZES.medium};
    color: ${({ theme }) => theme.black};
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;



export const Technology = styled.span`
    font-size: ${SIZES.small};
    margin: 0rem 0.5rem;
    &:first-child {
        margin-left: 0rem;
    }
`;

export const FeaturedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1em 0rem;
    z-index: 1;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.black};
    font-size: ${SIZES.medium};
    margin: 0rem 0.5rem;
    cursor: pointer;
    &:first-child {
        margin-left: 0rem;
    }
`;
