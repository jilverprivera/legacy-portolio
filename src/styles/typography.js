import styled, { css } from "styled-components";
import { SIZES } from "../constants";

export const Paragraph = styled.p`
    color: ${(props) => props.theme.text};
    margin: ${(props) => props.margin};
    font-weight: ${(props) => props.fontWeight};
    text-align: ${(props) => props.textAlign};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
    @media (max-width: 76.8rem) {
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
`;

export const SectionTitle = styled.h2`
    font-size: ${SIZES.title2};
    position: relative;
    margin-bottom: 5rem;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    z-index: 1;
    margin-left: 7rem;
    //     border: 1px solid #000;
    //     width: 100%;
//     &:before {
//         content: " ";
//         width: 7rem;
//         height: 0.5rem;
//         font-size: 7rem;
//         position: absolute;
//         top: 50%;
//         left: 0%;
//         background-color: #ddd;
//         transform: translate(-110%, -50%);
//         color: #ddd;
//         z-index: -1;
//     }

//     &:after {
//         content: " ";
//         width: 20rem;
//         height: 0.5rem;
//         font-size: 7rem;
//         position: absolute;
//         top: 50%;
//         right: 0%;
//         background-color: #ddd;
//         transform: translate(110%, -50%);
//         color: #ddd;
//         z-index: -1;
//     }
    @media (max-width: 76.8rem) {
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
