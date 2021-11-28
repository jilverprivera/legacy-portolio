import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../src/components/layout";
import Banner from "../src/components/projects/initial";
import { AppContext } from "../src/context/AppContext";
import Seo from "../src/seo";

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
            </Layout>
        </>
    );
};

export default Portfolio;
