import styled from "styled-components";
import { Link } from "react-scroll";

import { SIZES } from "../../constants";

export const FooterContent = styled.footer`
    width: 100%;
    height: 6rem;
    background-color: ${({ theme }) => theme.black};
    @media (max-width: 768px) {
        height: 10rem;
    }
`;

export const FooterWrapper = styled.div`
    max-width: 130rem;
    width: 100%;
    height: 100%;
    margin: 0rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 768px) {
        width: 90%;
        justify-content: center;
        flex-direction: column;
    }
`;

export const LogoIcon = styled(Link)`
    font-size: ${SIZES.semiRegular};
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const FooterIconWrapper = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const IconLink = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.text};
`;

export const Icon = styled.span`
    font-size: ${SIZES.medium};
    margin: 0rem 0.5rem;
    color ${({ theme }) => theme.white};
`;

export const FooterDescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const FooterDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

export const FooterParagraph = styled.p`
    font-size: ${SIZES.regular};
    color: ${({ theme }) => theme.white};
    margin: 0rem 0.5rem;
`;
export const IconParagraph = styled.span`
    font-size: ${SIZES.regular};
    color: ${({ theme }) => theme.white};
`;
