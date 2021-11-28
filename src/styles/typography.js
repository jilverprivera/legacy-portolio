import styled, { css } from "styled-components";
import { SIZES } from "../constants";

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.black};
    line-height: 3.5rem;
    @media (max-width: 768px) {
        text-align: center;
    }

    //<---- SIZES ---->
    ${({ extraSmall }) =>
        extraSmall &&
        css`
            font-size: ${SIZES.extraSmall};
        `}
    ${({ small }) =>
        small &&
        css`
            font-size: ${SIZES.small};
        `}
    ${({ regular }) =>
        regular &&
        css`
            font-size: ${SIZES.regular};
        `}
    ${({ medium }) =>
        medium &&
        css`
            font-size: ${SIZES.semiRegular};
        `}
    ${({ large }) =>
        large &&
        css`
            font-size: ${SIZES.large};
        `}
    ${({ extraLarge }) =>
        extraLarge &&
        css`
            font-size: ${SIZES.medium};
        `}
    
    //<---- ALIGN ---->
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

export const Title = styled.h2`
    font-size: ${SIZES.extraLarge};
    position: relative;
    margin-bottom: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.black};
    z-index: 1;
    text-transform: uppercase;
    width: 100%;
    &:before {
        content: "${({ content }) => content}";
        font-size: ${SIZES.extraSmall};
        color: ${({ theme }) => theme.secondary};
        width: 100%;
        position: absolute;
        top: -2rem;
        font-weight: 400;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 0.5rem;
    }

    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
    }

    //<---- ALIGN ---->
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

export const LinearText = styled.p`
    position: absolute;
    top: 0rem;
    right: 7.5rem;
    font-size: ${SIZES.ultraLarge};
    font-weight: 700;
    color: rgba(0, 0, 0, 0.035);
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.2rem;
`;
