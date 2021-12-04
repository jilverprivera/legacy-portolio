import { useContext } from "react";
import { useTranslation } from "react-i18next";

import Seo from "../src/seo";
import { AppContext } from "../src/context/AppContext";

import Layout from "../src/components/layout";
import Banner from "../src/components/portfolio/projects/banner";
import Projects from "../src/components/portfolio/projects/projects";

const Portfolio = () => {
  const {
    language: { currentLanguage },
  } = useContext(AppContext);
  const [t] = useTranslation("global");
  return (
    <>
      <Seo lang={currentLanguage} title={t("web-title")} />
      <Layout>
        <Banner />
        <Projects />
      </Layout>
    </>
  );
};

export default Portfolio;
