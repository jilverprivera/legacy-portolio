import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";

import BlogLayout from "../../components/MDX/blog/BlogHeader";
import MDXBlogComponents from "../../components/MDX/blog/MDX";

import { getFileBySlug, getFiles } from "../../lib/mdx";

const Post = ({ source, frontmatter }) => {
  return (
    <>
      <BlogLayout>
        {/* <BlogHeader title={frontmatter.title} date={frontmatter.date} /> */}
        <MDXRemote {...source} components={MDXBlogComponents} />
      </BlogLayout>
    </>
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
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);
  return {
    props: { source, frontmatter: { slug: params.slug, ...frontmatter } },
  };
}
