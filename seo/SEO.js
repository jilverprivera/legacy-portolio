import Head from "next/head";

const Seo = ({ metadata = {} }) => {
  const SEO = {
    title: metadata.title || "Blog | Jilver Pacheco",
    date: metadata.date || new Date().toISOString(),
    slug: metadata.slug || "",
  };
  return (
    <Head>
      <title>{SEO.title}</title>
      <meta property="og:title" content={SEO.title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jilverprivera" />
      <meta name="twitter:title" content={SEO.title} />
      <meta property="article:published_time" content={SEO.date} />
    </Head>
  );
};

export default Seo;
