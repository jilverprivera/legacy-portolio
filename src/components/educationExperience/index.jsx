import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../../styles/global.style";
import Location from "../location";
import Education from "./education";
import Experience from "./experience";
import { GridContainer, Wrapper } from "./styles";

const EducationExperience = () => {
    const [t] = useTranslation("about");
  return (
    <Container>
      <Wrapper>
        <Location location={t("education-experience.section-title")}/>

        <GridContainer>
          <Education />
          <Experience />
        </GridContainer>
      </Wrapper>
    </Container>
  );
};

export default EducationExperience;
