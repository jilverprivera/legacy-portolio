import styled, { css } from "styled-components";
import { SIZES } from "../constants";
export const Button = styled.button`
    color: ${(props) => props.theme.text};
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 0.2rem;
    font-weight: 600;
    font-size: ${SIZES.body4};
    &:hover {
        cursor: pointer;
    }

    ${({ marginHorizontal }) =>
        marginHorizontal &&
        css`
            margin: ${(props) => props.margin};
        `}

    ${({ smallButton }) =>
        smallButton &&
        css`
            font-size: ${SIZES.body5};
        `}

    ${({ largeButton }) =>
        largeButton &&
        css`
            padding: 1.5rem 4rem;
            font-size: ${SIZES.body4};
        `}

    ${({ primary }) =>
        primary &&
        css`
            background-color: ${(props) => props.theme.secondary};
            color: ${(props) => props.theme.background_auxiliar};
        `}
`;
