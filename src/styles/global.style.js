import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
    padding: ${(props) => props.padding};
    display: flex;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    // border: 1px solid #000;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 3rem 0rem;
    }
`;

export const WrapperFlex = styled(motion.div)`
    width: 90%;
    position: relative;
    max-width: 130rem;
    //     min-height: 100vh;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const WrapperGrid = styled(motion.div)`
    width: 90%;
    max-width: 130rem;
    // padding: 6rem 0rem;
    margin: auto;
    position: relative;
    display: grid;
    row-gap: ${(props) => props.rowGap};
    column-gap: ${(props) => props.columnGap};
    grid-template-columns: repeat(
        auto-fill,
        minmax(${(props) => props.columnWidth}, 1fr)
    );
    align-content: center;
    @media (max-width: 768px) {
        display: block;
    }
`;
