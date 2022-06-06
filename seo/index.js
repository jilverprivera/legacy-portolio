import Head from "next/head";

const SEO = ({ metadata = {} }) => {
  const data = {
    title: metadata.title || "Blog | Jilver Pacheco",
    date: metadata.date || new Date().toISOString(),
    slug: metadata.slug || "",
  };
  return (
    <Head>
      <title>{data.title}</title>
      <meta property="og:title" content={data.title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jilverprivera" />
      <meta name="twitter:title" content={data.title} />
      <meta property="article:published_time" content={data.date} />
    </Head>
  );
};

export default SEO;
