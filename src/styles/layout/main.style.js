import styled from "styled-components";
import { motion } from "framer-motion";

import { SIZES } from "../../constants";

export const Main = styled(motion.main)`
    width: 100%;
    min-height: 100vh;
    margin: 0rem auto;
`;

export const LanguageToggler = styled(motion.button)`
    position: fixed;
    bottom: 3rem;
    left: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: none;
    outline: noner;
    background-color: ${({ theme }) => theme.light};
    font-size: ${SIZES.regular};
    &:hover {
        cursor: pointer;
    }
`;
