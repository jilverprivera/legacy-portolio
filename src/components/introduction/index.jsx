import Image from "next/image";
import { useTranslation } from "react-i18next";

import Profile from "../../../assets/profile.webp";

import Location from "../location";

import {
    GridContainer,
    ImageContainer,
    IntroductionContainer,
    ShortDescription,
} from "./styles";
import { Paragraph } from "../../styles/typography";
import { Button } from "../../styles/button.style";

const Introduction = () => {
  const [t] = useTranslation("about");

  return (
    <GridContainer>
      <IntroductionContainer>
        <Location location={t("introduction.section-title")} />
        <ShortDescription>
          {t("introduction.short-description")}
        </ShortDescription>
        <Paragraph regular left>
          {t("introduction.description")}
        </Paragraph>
        <Button smallPadding animated buttonMargin="4rem 0rem 0rem">
          {t("introduction.resume-button")}
        </Button>
      </IntroductionContainer>
      <ImageContainer>
        <Image src={Profile} height="512" width="400" className="image" />
      </ImageContainer>
    </GridContainer>
  );
};

export default Introduction;
