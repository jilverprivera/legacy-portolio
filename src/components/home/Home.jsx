import { useTranslation } from "react-i18next";
import Image from "next/image";

// <--- IMPORTANT --->
import Profile from "../../../assets/profile.webp";

// <--- COMPONENTS --->
import Professions from "./Profession";
import SocialLinks from "./Networks";

// <--- STYLES --->
import {
  BannerContainer,
  ImageContainer,
  AuthorName,
  ImageRespContainer,
} from "./styles";
import { Paragraph } from "../../styles/typography";
import { Container } from "../../styles/global.style";

const Home = () => {
  const [t] = useTranslation("home");
  return (
    <Container>
      <ImageContainer>
        <Image
          src={Profile}
          alt="profile"
          className="banner__image"
          height="712"
        />
      </ImageContainer>
      <BannerContainer>
        <ImageRespContainer>
          <Image
            src={Profile}
            alt="profile"
            className="responsive__banner-image"
            width="200"
            height="250"
          />
        </ImageRespContainer>
        <Paragraph medium>{t("banner.welcome_message")}</Paragraph>
        <AuthorName>Jilver Pacheco</AuthorName>
        <Professions />
        <SocialLinks />
      </BannerContainer>
    </Container>
  );
};

export default Home;
