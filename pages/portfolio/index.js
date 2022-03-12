import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import Head from "next/head"

import Layout from "../../components/layout";

const title =
  "Portfolio | Jilver Pacheco - Software developer & Electronic engineer.";

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        {projects.map((project) => (
          <div key={project.slug}>
            <p>{project.title}</p>
            <p>{project.date}</p>
            <Link href={`/portfolio/${project.slug}`} passHref>
              <a>Ver Post</a>
            </Link>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const allProjects = await getAllFilesMetadata("projects");
  const projects = allProjects
    .sort((a, b) => a.date.localeCompare(b.date))
    .reverse();

  return {
    props: { projects },
  };
}