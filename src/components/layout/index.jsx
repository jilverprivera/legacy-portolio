import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
// <--- IMPORTANT --->
import { AppContext } from "../../context/AppContext";
// <--- COMPONENTS --->
import Head from "./Head";
import Header from "./header";
import Navigation from "./Navigation";
import Networks from "./Networks";
import Footer from "./footer";
// <--- STYLES --->
import { Main } from "./styles";
import theme from "../../theme";
import GlobalStyles from "../../styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Navigation />
        <Main>{children}</Main>
        <Networks />
        
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
