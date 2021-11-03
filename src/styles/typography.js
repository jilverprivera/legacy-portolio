import styled, { css } from "styled-components";
import { SIZES } from "../constants";

export const Paragraph = styled.p`
    color: ${(props) => props.theme.text};
    margin: ${(props) => props.margin};
    font-weight: ${(props) => props.fontWeight};
    text-align: ${(props) => props.textAlign};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
    @media (max-width: 768px) {
        text-align: ${(props) => props.responsiveAlign};
    }

    ${({ small }) =>
        small &&
        css`
            font-size: ${SIZES.body5};
        `}
    ${({ medium }) =>
        medium &&
        css`
            font-size: ${SIZES.body4};
        `}
    ${({ large }) =>
        large &&
        css`
            font-size: ${SIZES.body3};
        `}

        ${({ extraLarge }) =>
        extraLarge &&
        css`
            font-size: ${SIZES.body2};
        `}
`;

export const AuthorName = styled.h1`
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.fontSize};
    text-align: ${(props) => props.textAlign};
    font-weight: 800;
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
    @media (max-width: 768px) {
        font-size: ${(props) => props.responsiveSize};
        text-align: ${(props) => props.responsiveAlign};
    }
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 30px;
    position: relative;
    margin: 20px auto;
    z-index: 1;
    &:before {
        content: "${(props) => props.afterText}";
        font-size: 50px;
        text-transform: uppercase;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translate(-50%, -20%);
        color: #ddd;
        z-index: -1;
    }
`;
