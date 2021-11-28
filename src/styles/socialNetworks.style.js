import styled from "styled-components";
import { SIZES } from "../constants";

export const SocialContent = styled.div`
     position: fixed;
     top: 50%;
     left 0;
     transform: translateY(-50%);
z-index: 100;
`;

export const NetworkLink = styled.a`
    text-decoration: none;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NetworkWrapper = styled.div`
    width: ${(props) => props.width};
    margin: 1rem 0rem;
    padding: 1rem 2rem 1rem 0.5rem;
    font-size: ${SIZES.extraSmall};
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    transition: width 0.4s;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    color: #fff;
    background: ${(props) => props.background};
    &:hover {
        cursor: pointer;
    }
`;

export const NetworkIcon = styled.span`
    font-size: ${SIZES.regular};
    margin-right: 1rem;
`;
