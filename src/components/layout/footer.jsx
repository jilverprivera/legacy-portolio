// <--- IMPORTANT --->
import { networks } from "../../data";
import LogoWhite from "../../../public/icon_white.svg";

// <--- ICONS --->
import { FaHeart } from "react-icons/fa";

// <--- STYLES --->
import {
  FooterContainer,
  FooterDescription,
  Icon,
  ResponsiveIcons,
  IconLink,
  FooterWrapper,
  LogoContent,
  FooterParagraph,
  IconParagraph,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ResponsiveIcons>
          {networks.map((data) => (
            <IconLink key={data.id} href={data.url} target="_blank">
              <Icon>{data.icon}</Icon>
            </IconLink>
          ))}
        </ResponsiveIcons>
        <LogoContent
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <LogoWhite />
        </LogoContent>
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
    </FooterContainer>
  );
};

export default Footer;
