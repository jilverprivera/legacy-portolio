import { MDXRemote } from "next-mdx-remote";

import BlogLayout from "../../layout/blog";
import MDXComponents from "../../components/MDX/mdx";

import { getFileBySlug, getFiles } from "../../lib/mdx";

const Post = ({ source, frontmatter }) => {
  return (
    <BlogLayout metadata={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
    </BlogLayout>
  );
};

export default Post;

export async function getStaticPaths() {
  const post = await getFiles("posts");
  const paths = post.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);
  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  };
}

// export async function getStaticPaths() {
//   const projects = await getFiles("projects");
//   const paths = projects.map((project) => ({
//     params: {
//       slug: project.replace(/\.mdx/, ""),
//     },
//   }));
//   return {
//     paths,
//     fallback: true, // false or 'blocking'
//   };
// }
