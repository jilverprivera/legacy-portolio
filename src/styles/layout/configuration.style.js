import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../../constants";

export const Content = styled(motion.div)`
    position: fixed;
    top: 50%;
    right: 0rem;
    transform: translateY(-50%);
    width: ${({ open }) => open};
    height: 5rem;
    transition: 0.5s;
    background-color: ${({ theme }) => theme.white};
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    // overflow: hidden;
`;

export const ConfigWrapper = styled(motion.div)`
    position: relative;
    margin-left: 5rem;
    width: 5rem;
    height: 10rem;
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom-left-radius: 0.5rem;

    background-color: ${({ theme }) => theme.white};
`;

export const SettingsButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 5rem;
    height: 5rem;
    display: flex;

    align-items: center;
    justify-content: center;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    font-size: ${SIZES.medium};
    border: none;
    outline: none;
    background-color: transparent;
    // border: 1px solid #000;
    &:hover {
        cursor: pointer;
    }
`;

export const LanguageButton = styled.button`
    font-size: ${SIZES.medium};
`;
