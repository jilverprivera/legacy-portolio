import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import Header from "./header";

import { dark, light } from "../../theme";
import { GlobalStyle } from "../../constants";
import { AppContext } from "../../context/AppContext";
import { Main } from "../../styles/layout.style";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
    const { pathname } = useRouter();
    const {
        dark: { darkMode },
        path: { setPathDir },
    } = useContext(AppContext);

    useEffect(() => {
        setPathDir(pathname);
    }, [pathname]);

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
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <ThemeProvider theme={darkMode ? dark : light}>
                <GlobalStyle />
                <Header pathname={pathname} />
                <Main>{children}</Main>
            </ThemeProvider>
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
