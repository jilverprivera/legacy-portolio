import Head from "next/head";

import Layout from "../../components/layout";

const title =
  "Contact | Jilver Pacheco - Software developer & Electronic engineer.";

const Contact = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>Contact</Layout>
    </>
  );
};

export default Contact;
