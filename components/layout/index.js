import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { AppContext } from "../../context";

import Header from "./Header";
import Drawer from "./Drawer";

import { THEME } from "../../constants";

import { Main } from "./styles";
import GLOBAL from "../../styles/GLOBAL";
import { AnimatePresence } from "framer-motion";
import Panels from "./PanelTransition";
import { ScrollIndicator } from "./ScrollIndicator";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { openDrawer } = useContext(AppContext);
  return (
    <ThemeProvider theme={THEME}>
      <GLOBAL />
      <Header />
      <ScrollIndicator />
      <AnimatePresence exitBeforeEnter>
        {openDrawer && (
          <>
            <Drawer />
            <Panels />
          </>
        )}
      </AnimatePresence>
      <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
