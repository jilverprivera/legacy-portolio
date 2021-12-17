import { useContext } from "react";
import { useTranslation } from "react-i18next";
// <--- IMPORTANT --->
import { AppContext } from "../src/context/AppContext";
import Seo from "../src/seo";
// <--- COMPONENTS --->
import Layout from "../src/components/layout";
import Home from "../src/components/home";
import Skills from "../src/components/skills";
import EducationExperience from "../src/components/educationExperience";
import Portfolio from "../src/components/projects";
import Contact from "../src/components/contact";

const HomePage = () => {
  const { language } = useContext(AppContext);
  const { currentLanguage } = language;
  const [t] = useTranslation("global");
  return (
    <>
      <Seo lang={currentLanguage} title={t("web-title")} />
      <Layout>
        <Home />
        <Skills />
        <EducationExperience />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  );
};

export default HomePage;
