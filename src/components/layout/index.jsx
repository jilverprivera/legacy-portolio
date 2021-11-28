import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";

// <--- COMPONENTS --->
import Header from "./header";
import Footer from "./footer";
import Networks from "../networks";
import Language from "./language";

// <--- STYLES --->
import theme from "../../theme";
import GLOBAL from "../../styles";
import { Main } from "../../styles/layout/main.style";

// <--- VARIANTS --->
import { LayoutVariants } from "../../constants";

const Layout = ({ children }) => {
    const { pathanme } = useRouter();
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
                    link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <ThemeProvider theme={theme}>
                <GLOBAL />
                <Header />
                <Networks />
                <Language />
                <AnimatePresence exitBeforeEnter>
                    <Main
                        key={pathanme}
                        variants={LayoutVariants}
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
