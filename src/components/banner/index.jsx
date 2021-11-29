import { useTranslation } from "react-i18next";
import Image from "next/image";

// <--- COMPONENTS --->
import Profile from "../../../assets/profile.webp";
// <--- COMPONENTS --->
import Professions from "./professions";
import SocialLinks from "./socialLinks";

// <--- STYLES --->
import { Container, ContentFlex } from "../../styles/global.style";
import { BannerButton, BannerImage, BannerTitle, ResponsiveImage } from "../../styles/banner";
import { Paragraph } from "../../styles/typography";

const Banner = () => {
    const [t] = useTranslation("global");
    return (
        <Container id="home">
            <BannerImage>
                <Image
                    src={Profile}
                    alt="profile"
                    className="banner__image"
                    height="712"
                />
            </BannerImage>
            <ContentFlex alignstart justifycenter column width100>
                <ResponsiveImage>
                    <Image
                        src={Profile}
                        alt="profile"
                        className="responsive__banner-image"
                        width="200"
                        height="250"
                    />
                </ResponsiveImage>
                <Paragraph medium>{t("banner.welcome_message")}</Paragraph>
                <BannerTitle>Jilver Pacheco</BannerTitle>
                <Professions />
                <SocialLinks />
                <BannerButton
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    {t(t("banner.button"))}
                </BannerButton>
            </ContentFlex>
        </Container>
    );
};

export default Banner;
