import { Fragment } from "react";
import Head from "next/head";

import Layout from "../../components/layout";
import Information from "../../components/about/Information";
import Experience from "../../components/about/Experience";
import Education from "../../components/about/Education";
import LocalNavigation from "../../components/global/LocalNavigation";

const title =
  "About | Jilver Pacheco - Software developer & Electronic engineer.";

const navigation = [
  { route: "information" },
  // { route: "gallery-carousel" },
  { route: "work-experience" },
  { route: "education" },
  // { route: "testimonials" },
  { route: "contact" },
];
const About = () => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <LocalNavigation arr={navigation} />

        <Information />
        <Experience />
        <Education />
      </Layout>
    </Fragment>
  );
};

export default About;
