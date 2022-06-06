import { getAllFilesMetadata } from "../lib/mdx";

import Layout from "../layout";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";

import { Container } from "../styles/layout";
import Banner from "../components/Banner";
import About from "../components/About";

const HomePage = ({ posts, projects }) => {
  return (
    <Layout
      metadata={{
        title:
          "Jilver Pacheco Rivera - Software Developer & Electronic Engineer.",
      }}
    >
      <Container id="banner">
        <Banner />
      </Container>

      <Container id="about">
        <About />
      </Container>

      <Container id="portfolio">
        <Portfolio projects={projects} />
      </Container>

      {/* <Container id="blog">
        <Blog posts={posts} />
      </Container> */}
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  const allProjects = await getAllFilesMetadata("projects");
  const allPosts = await getAllFilesMetadata("posts");

  const projects = allProjects
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse()
    .slice(0, 6);

  const posts = allPosts
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse()
    .slice(0, 4);

  return {
    props: { posts, projects },
  };
}
