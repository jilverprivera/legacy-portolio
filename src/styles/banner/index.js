import styled from "styled-components";
import { Link } from "react-scroll";

import { SIZES } from "../../constants";

export const BannerImage = styled.div`
    position: absolute;
    top: 0rem;
    right: 0rem;
    max-height: 100vh;
    height: 100vh;
    @media (max-width: 768px) {
        display: none;
    }
`;
export const ResponsiveImage = styled.div`
display: none;
@media (max-width: 768px) {
    display: block;
    margin-bottom: 3rem;
}
`
export const BannerContent = styled.div`
    width: 90%;
    position: relative;
    max-width: 120rem;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`;

export const BannerTitle = styled.h1`
    color: ${(props) => props.theme.text};
    font-size: ${SIZES.ultraLarge};
    font-weight: 700;
    @media (max-width: 768px) {
        margin: 2rem 0rem;
        font-size: ${SIZES.extraLarge};
        text-align: center;
    }
`;

export const SubTitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const BannerSubTitle = styled.h2`
    font-size: ${SIZES.semiRegular};
    font-weight: 500;
    color: ${(props) => props.theme.text};
    @media (max-width: 768px) {
        font-size: ${SIZES.medium};
        text-align: center;
    }
`;

export const SocialContainer = styled.div`
    display: none;
    @media (max-width: 768px) {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
`;

export const IconContent = styled.a`
    margin: 0rem 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.black};
    font-size: ${SIZES.large};
`;

export const BannerButton = styled(Link)`
    text-decoration: none;
    font-size: ${SIZES.regular};
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    margin-top: 2rem;
    padding: 1rem 1.75rem;
    border-radius: 0.5rem;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        padding: 1rem 4rem;
    }
`;
