import { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

// <--- IMPORTANT --->
import { AppContext } from "../src/context/AppContext";
import Seo from "../src/seo";

// <--- COMPONENTS --->
import Layout from "../src/components/layout";
import Services from "../src/components/home/services";
import Banner from "../src/components/home/banner";
import Featured from "../src/components/home/featured";

import LoaderMap from "../src/components/contact/loaderMap";

const Home = () => {
  const {
    language: { currentLanguage },
  } = useContext(AppContext);
  const [t] = useTranslation("global");

  const Map = dynamic(() => import("../src/components/contact/map"), {
    loading: () => <LoaderMap />,
    ssr: false,
  });
  return (
    <>
      <Seo lang={currentLanguage} title={t("web-title")} />
      <Layout>
        <Banner />
        <Services />
        <Featured />
        {/* <Map /> */}
      </Layout>
    </>
  );
};

export default Home;
