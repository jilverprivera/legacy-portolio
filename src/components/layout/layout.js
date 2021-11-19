import React, { useContext } from "react";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import Header from "./header";

import { dark, light } from "../../theme";
import { GlobalStyle } from "../../constants";
import { AppContext } from "../../context/AppContext";
import { Main } from "../../styles/layout.style";
import SocialNetworks from "../socialNetworks";
import Footer from "./footer";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
    const {
        dark: { darkMode },
    } = useContext(AppContext);

    const variants = {
        start: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0 },
        transition: { duration: 0.5 },
    };
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
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin=""
                />
            </Helmet>
            <ThemeProvider theme={darkMode ? dark : light}>
                <GlobalStyle />
                <Header />
                <SocialNetworks />
                <AnimatePresence exitBeforeEnter>
                    <Main
                        variants={variants}
                        initial="start"
                        animate="visible"
                        exit="hidden"
                        transition="transition"
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

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
