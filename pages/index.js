import { useContext } from "react";
import { useTranslation } from "react-i18next";
// <--- IMPORTANT --->
import { AppContext } from "../src/context/AppContext";
import Seo from "../src/seo";
// <--- COMPONENTS --->
import Layout from "../src/components/layout";
import Home from "../src/components/home/Home";
import Introduction from "../src/components/introduction";
import Skills from "../src/components/skills";
import Featured from "../src/components/home/Featured";
import Contact from "../src/components/contact";
// <--- HOOKS --->
import { useSkew } from "../src/hooks/useSkew";
import EducationExperience from "../src/components/educationExperience";

const HomePage = () => {
  const { language } = useContext(AppContext);
  const { currentLanguage } = language;

  const [t] = useTranslation("home");
  const { scrollContainer } = useSkew();

  return (
    <>
      <Seo lang={currentLanguage} title={t("web-title")} />
      <Layout>
        <div ref={scrollContainer}>
          <Home />
          <Introduction />
          <Skills />
          <EducationExperience />
          <Featured />
          <Contact />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
