import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 6rem 0rem;
    }
    ${({ paddingtop }) => paddingtop && css`padding-top: 10rem;`}

    
`;

export const ContentFlex = styled(motion.section)`
    position: relative;
    max-width: 125rem;
    margin: auto;
    display: flex;
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
    // <----- WIDHT ----->
    ${({ width90 }) => width90 && css`width: 90%;`}
    ${({ width100 }) => width100 && css`width: 100%;`}
    
    // <----- ALIGN ITEMS ----->
    ${({ alignstart }) => alignstart && css`align-items: flex-start;`}
    ${({ aligncenter }) => aligncenter && css`align-items: center;`}
    
    // <----- JUSTIFY CONTENT ----->
    ${({ justifycenter }) => justifycenter && css`justify-content: center;`}
    ${({ justifystart }) => justifystart && css`justify-content: flex-start;`}

    // <----- DIRECTION ----->
    ${({ row }) => row && css`flex-direction: row;`}
    ${({ column }) => column && css`flex-direction: column;`}
    
`;

export const ContentGrid = styled(motion.section)`
    position: relative;
    max-width: 125rem;
    margin: auto;
    display: grid;
    row-gap: 3rem;
    column-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    @media (max-width: 768px) {
        display: block;
    }
    // <----- WIDHT ----->
    ${({ width90 }) => width90 && css`width: 90%;`}
    ${({ width100 }) => width100 && css`width: 100%;`}
`;

