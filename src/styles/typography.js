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
    
    ${({ upperCase }) =>
    upperCase &&
        css`
            text-transform: uppercase;
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

export const Title = styled.h2`
    font-size: ${SIZES.title2};
    position: relative;
    margin-bottom: 5rem;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    z-index: 1;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
    }
`;

export const ProfessionalTitle = styled.h2`
    font-size: ${SIZES.mediumTitle};
    font-weight: 600;
    color: ${(props) => props.theme.text};
`;

export const SectionTitle = styled.h2`
    font-size: ${SIZES.title2};
    position: relative;
    // margin-bottom: 5rem;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    z-index: 1;
    width: 100%;
    @media (max-width: 768px) {
        text-align: center;
    }

    ${({ left }) =>
        left &&
        css`
            text-align: left;
        `}
    ${({ center }) =>
        center &&
        css`
            text-align: center;
        `}
     ${({ right }) =>
        right &&
        css`
            text-align: right;
        `}
`;
