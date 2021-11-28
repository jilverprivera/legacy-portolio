import { motion } from "framer-motion";
import styled from "styled-components";
import { SIZES } from "../constants";

export const NetworksContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &::before {
        content: "";
        width: 0.2rem;
        height: 15rem;
        background-color: ${({ theme }) => theme.black};
    }
    &::after {
        content: "";
        width: 0.2rem;
        height: 15rem;
        background-color: ${({ theme }) => theme.black};
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NetworkIconLink = styled(motion.a)`
    font-size: ${SIZES.medium};
    color: ${({ theme }) => theme.black};
    margin: 0.5rem 0rem;
    &:first-child {
        margin-top: 1rem;
    }
    &:last-child {
        margin-bottom: 1rem;
    }
`;
