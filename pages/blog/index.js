import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";

const title =
  "Blog | Jilver Pacheco - Software developer & Electronic engineer.";

const Blog = ({ post }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <div style={{ marginTop: "10rem" }}>
          {post
            .sort((a, b) => a.date > b.date)
            .map((post) => (
              <div key={post.slug}>
                <p>{post.title}</p>
                <p>{post.date}</p>
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
