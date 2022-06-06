import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../layout";

const title =
  "Blog | Jilver Pacheco - Software developer & Electronic engineer.";

const Blog = ({ post }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <h1>Blog</h1>
        <div style={{ marginTop: "10rem" }}>
          {post
            .sort((a, b) => a.date > b.date)
            .map((post) => (
              <div key={post.slug}>
                <p>{post.date}</p>
                <p>{post.title}</p>
                <p>{post.description}</p>
                <ul>
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link href={`/blog/${post.slug}`} passHref>
                  <a>Ver Post</a>
                </Link>
              </div>
            ))}
        </div>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPost = await getAllFilesMetadata("posts");

  const post = allPost.sort((a, b) => a.date.localeCompare(b.date)).reverse();

  return {
    props: { post },
  };
}
