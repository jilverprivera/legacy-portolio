import { useTranslation } from "react-i18next";
import Image from "next/image";

import Profile from "../../../assets/profile.webp";
// <--- COMPONENTS --->
import Introduction from "../introduction";

// <--- STYLES --->
import { Container } from "../../styles/global.style";
import Skills from "../skills";

const AboutComponent = () => {
  const [t] = useTranslation("about");
  return (
    <Container id="about">
      <Introduction />
      <Skills />
      {/* <SkillContainer>
        <Skills />
      </SkillContainer>
      <Wrapper>
        <GridContainer>
          <Education />
          <Experience />
        </GridContainer>
      </Wrapper> */}
    </Container>
  );
};

export default AboutComponent;
