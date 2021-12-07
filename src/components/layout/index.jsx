import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
// <--- IMPORTANT --->
import { AppContext } from "../../context/AppContext";
// <--- COMPONENTS --->
import Head from "./Head";
import Header from "./header";
import Navigation from "./Navigation";
import Language from "./language";
import Networks from "./Networks";
import Footer from "./footer";
// <--- STYLES --->
import { Main } from "./styles";
import theme from "../../theme";
import GLOBAL from "../../styles";

const Layout = ({ children }) => {
  const { home, menu } = useContext(AppContext);
  const { setIsHome } = home;
  const { setOpenMenu } = menu;

  const { pathname } = useRouter();
  const ref = useRef();

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GLOBAL />
        <Header />
        <Navigation />
        <Main ref={ref}>{children}</Main>
        <Networks />
        <Language />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
