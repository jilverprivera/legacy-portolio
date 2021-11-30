// <--- IMPORTANT --->
import { networks } from "../../data";
import LogoWhite from "../../../public/icon_white.svg";

// <--- ICONS --->
import { FaHeart } from "react-icons/fa";

// <--- STYLES --->
import {
    FooterContent,
    FooterDescription,
    Icon,
    FooterIconWrapper,
    IconLink,
    FooterWrapper,
    LogoIcon,
    FooterParagraph,
    IconParagraph,
} from "../../styles/layout/footer.style";

const Footer = () => {
    return (
        <FooterContent>
            <FooterWrapper>
                <FooterIconWrapper>
                    {networks.map((data) => (
                        <IconLink key={data.id} href={data.url} target="_blank">
                            <Icon>{data.icon}</Icon>
                        </IconLink>
                    ))}
                </FooterIconWrapper>
                <LogoIcon
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    <LogoWhite />
                </LogoIcon>
                <FooterDescription>
                    <FooterParagraph regular margin="0rem 1rem 0rem">
                        Made with
                    </FooterParagraph>
                    <IconParagraph>
                        <FaHeart />
                    </IconParagraph>
                    <FooterParagraph regular margin="0rem 1rem 0rem">
                        by @Jilverprivera | {new Date().getFullYear()}
                    </FooterParagraph>
                </FooterDescription>
            </FooterWrapper>
        </FooterContent>
    );
};

export default Footer;
