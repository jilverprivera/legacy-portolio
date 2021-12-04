import { useContext } from "react";
import { useTranslation } from "react-i18next";

import Seo from "../src/seo";
import { AppContext } from "../src/context/AppContext";

import Layout from "../src/components/layout";
import { Container, ContentGrid } from "../src/styles/global.style";
import Introduction from "../src/components/about/introduction";
import Skills from "../src/components/about/skills";
import Education from "../src/components/about/education";
import Experience from "../src/components/about/experience";

const About = () => {
  const {
    language: { currentLanguage },
  } = useContext(AppContext);
  const [t] = useTranslation("global");
  return (
    <>
      <Seo lang={currentLanguage} title={t("web-title")} />
      <Layout>
        <Container id="about" paddingtop>
          <Introduction />
          <Skills />

          <ContentGrid width100>
            <Education />
            <Experience />
          </ContentGrid>
        </Container>
      </Layout>
    </>
  );
};

export default About;
