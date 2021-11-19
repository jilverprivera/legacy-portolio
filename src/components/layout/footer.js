import React from "react";
import { FaHeart } from "react-icons/fa";
import { socialData } from "../../data";
import {
    FooterContent,
    FooterDescription,
    FooterDescriptionWrapper,
    FooterIcon,
    FooterIconWrapper,
    FooterLink,
    FooterWrapper,
} from "../../styles/layout.style";

import { Paragraph } from "../../styles/typography";
const Footer = () => {
    return (
        <FooterContent>
            <FooterWrapper>
                <FooterIconWrapper>
                    {socialData.map((data) => (
                        <FooterLink
                            key={data.id}
                            href={data.url}
                            target="_blank"
                        >
                            <FooterIcon>{data.icon}</FooterIcon>
                        </FooterLink>
                    ))}
                </FooterIconWrapper>
                <FooterDescriptionWrapper>
                    <p>Jilver Pacheco</p>
                    <FooterDescription>
                        <Paragraph large margin="0rem 1rem 0rem">
                            Made with
                        </Paragraph>
                        <FooterIcon>
                            <FaHeart />
                        </FooterIcon>
                        <Paragraph large margin="0rem 1rem 0rem">
                            by @Jilverprivera | {new Date().getFullYear()}
                        </Paragraph>
                    </FooterDescription>
                </FooterDescriptionWrapper>
            </FooterWrapper>
        </FooterContent>
    );
};

export default Footer;
