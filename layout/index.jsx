import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import SEO from "../seo";
import { THEME } from "../constants";

import { STYLES } from "../styles";
import { Main } from "../styles/layout";
import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({ children, metadata = {}, type }) => {
  const { pathname } = useRouter();
  const isPost = type === "post" ? true : false;
  return (
    <>
      <SEO metadata={metadata} />
      <ThemeProvider theme={THEME}>
        <STYLES />
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Main
            key={pathname}
            post={isPost}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </Main>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;

export async function getStaticProps() {
  return {
    props: { sortedPosts, sortedProjects },
  };
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  metadata: PropTypes.object.isRequired,
};
