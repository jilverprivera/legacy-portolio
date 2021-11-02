import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import Header from "./header";

import { dark, light } from "../../theme";
import { GlobalStyle } from "../../constants";
import { AppContext } from "../../context/AppContext";

const Layout = ({ children }) => {
    const {
        dark: { darkMode },
    } = useContext(AppContext);
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;800&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <ThemeProvider theme={darkMode ? dark : light}>
                <GlobalStyle />
                <Header />
                <main>{children}</main>
            </ThemeProvider>
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
