import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
// <--- IMPORTANT --->
import Profile from "../../../assets/profile.webp";
import { AppContext } from "../../context/AppContext";

// <--- STYLES --->
import { Container } from "../../styles";
import { Wrapper, ImageContainer, IntroWrapper } from "./styles";
import { Button } from "../../styles/button.style";
import {
  Description,
  ShortDescription,
  WelcomeMessage,
} from "../../styles/typography";

const Home = () => {
  const [t] = useTranslation("home");

  const {
    language: { currentLanguage },
  } = useContext(AppContext);

  return (
    <Container id="home">
      <Wrapper>
        <IntroWrapper>
          <WelcomeMessage>{t("introduction.hello")}</WelcomeMessage>
          <ShortDescription>
            {t("introduction.short-description")}
          </ShortDescription>
          <Description>{t("introduction.description")}</Description>
          <a
            href={
              currentLanguage === "es" ? `/resume_es.pdf` : `/resume_en.pdf`
            }
            download
          >
            <Button smallPadding animated buttonMargin="3rem 0rem 0rem">
              {t("introduction.resume-button")}
            </Button>
          </a>
        </IntroWrapper>
        <ImageContainer>
          <Image
            src={Profile}
            alt="profile"
            className="banner__image"
            layout="fill"
          />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
