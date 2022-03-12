import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../../lib/mdx";

const Post = ({ source, frontmatter }) => {
  return <MDXRemote {...source} />;
};

export default Post;

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("projects", params.slug);
  return {
    props: { source, frontmatter: { slug: params.slug, ...frontmatter } },
  };
}

export async function getStaticPaths() {
  const projects = await getFiles("projects");
  const paths = projects.map((project) => ({
    params: {
      slug: project.replace(/\.mdx/, ""),
    },
  }));
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
