import styled, { css } from "styled-components";
import { SIZES } from "../constants";

export const Button = styled.button`
    border: none;
    outline: none;
    background-color ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border-radius: 0.5rem;
    font-size: ${SIZES.regular};
    margin: ${(props) => props.buttonMargin};
    &:hover{
        cursor: pointer;
    }
    ${({ animated }) =>
        animated &&
        css`
            transition: 0.4s;
            &:hover {
                transform: scale(1.05);
            }
        `}
    ${({ smallPadding }) =>
        smallPadding &&
        css`
            padding: 1.2rem 2rem;
        `}
    ${({ largePadding }) =>
        largePadding &&
        css`
            padding: 1.5rem 3rem;
        `}
    ${({ responsive }) =>
        responsive &&
        css`
            display: block;
        `}
    
`;

export const LanguageButton = styled.button`
    position: absolute;
    bottom: ;
`;

export const AppConfigButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${SIZES.medium};
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.white_auxiliar};
    border: 1px solid #000;
    &:hover {
        cursor: pointer;
    }
`;
