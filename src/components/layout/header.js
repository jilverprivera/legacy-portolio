import { useContext } from "react";

import { ThemeToggler } from "../themeToggler";
import { SmoothLink } from "../smoothLink";

import {
    HeaderContent,
    HeaderContainer,
    NavList,
} from "../../styles/layout.style";
import { Drawer } from "./drawer";
import { AppContext } from "../../context/AppContext";
import { AnimatePresence } from "framer-motion";

const Header = () => {
    const {
        drawer: { openDrawer },
        navbarActive,
    } = useContext(AppContext);

    return (
        <HeaderContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            background={
                navbarActive ? "rgba(255, 255, 255, 0.3)" : "transparent"
            }
            height={navbarActive ? "6rem" : "7rem"}
            blur={navbarActive ? "1rem" : null}
        >
            <HeaderContent>
                <h1>Jilver pacheco</h1>
                <NavList>
                    <SmoothLink name="Home" route="home" />
                    <SmoothLink name="About" route="about" />
                    <SmoothLink name="Portfolio" route="portfolio" />
                    <SmoothLink name="Contact" route="contact" />
                    <ThemeToggler />
                </NavList>
            </HeaderContent>
            <AnimatePresence exitBeforeEnter>
                {openDrawer && <Drawer />}
            </AnimatePresence>
        </HeaderContainer>
    );
};

export default Header;
