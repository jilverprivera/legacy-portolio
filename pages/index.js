import { useContext } from "react";
import { useTranslation } from "react-i18next";

// <--- IMPORTANT --->
import { AppContext } from "../src/context/AppContext";
import Seo from "../src/seo";

// <--- COMPONENTS --->
import Layout from "../src/components/layout";
import Banner from "../src/components/banner";
import About from "../src/components/about";
import Portfolio from "../src/components/portfolio";
import Contact from "../src/components/contact";

const Home = () => {
    const {
        language: { currentLanguage },
    } = useContext(AppContext);
    const [t] = useTranslation("global");

    return (
        <>
            <Seo lang={currentLanguage} title={t("web-title")} />
            <Layout>
                <Banner />
                <About />
                <Portfolio/>
                <Contact/>
            </Layout>
        </>
    );
};

export default Home;
