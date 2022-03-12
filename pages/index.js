import Head from "next/head";

import { getAllFilesMetadata } from "../lib/mdx";

import Layout from "../components/layout";
import Banner from "../components/home/banner/Banner";
import Projects from "../components/home/portfolio/Projects";
import Blog from "../components/home/blog/Blog";
import LocalNavigation from "../components/global/LocalNavigation";

const title =
  "Home | Jilver Pacheco - Software developer & Electronic engineer.";

const navigation = [
  { route: "home" },
  { route: "portfolio" },
  { route: "last-writings" },
  { route: "contact" },
];

const HomePage = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <LocalNavigation arr={navigation} />
        <Banner />
        <Projects projects={projects} />
        <Blog />
      </Layout>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const allProjects = await getAllFilesMetadata("projects");
  const projects = allProjects
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse();

  return {
    props: { projects },
  };
}
