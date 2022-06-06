import { MDXRemote } from "next-mdx-remote";

// import BlogLayout from "../../layout/blog";
import { MDXComponents } from "../../components/mdx";

import { getFileBySlug, getFiles } from "../../lib/mdx";
import Layout from "../../layout";
import { BlogHeader, Date, Tag, TagContent, Title } from "../../styles/blog";

const Post = ({ source, frontmatter }) => {
  return (
    <Layout metadata={frontmatter} type="post">
      <BlogHeader>
        <Date>{frontmatter.date}</Date>
        <Title>{frontmatter.title}</Title>
        <TagContent>
          {frontmatter.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContent>
      </BlogHeader>
      <MDXRemote {...source} components={MDXComponents} />
    </Layout>
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
