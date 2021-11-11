import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";

import { useSSR } from "../../hooks/useSSR";

import { ThemeToggler } from "../themeToggler";
import { SmoothLink } from "../smoothLink";

import {
    HeaderContent,
    HeaderWrapper,
    NavList,
    NavListWrapper,
} from "../../styles/layout.style";
import { CustomDrawer, Drawer } from "./drawer";
import { AppContext } from "../../context/AppContext";
import { AnimatePresence } from "framer-motion";

const Header = () => {
    const [navbarBorder, setNavbarBorder] = useState(false);

    const { isRendering } = useSSR();

    const {
        drawer: { openDrawer },
        path: { pathDir },
    } = useContext(AppContext);

    useEffect(() => {
        isRendering &&
            (window.onscroll = () => {
                if (window.pageYOffset >= 70) {
                    setNavbarBorder(true);
                } else {
                    setNavbarBorder(false);
                }
            });
    }, [isRendering]);

    return (
        <HeaderWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={navbarBorder ? "bg-active" : "bg"}>
                <HeaderContent>
                    <h1>Jilver pacheco</h1>
                    <NavListWrapper>
                        {pathDir === "/" ? (
                            <NavList>
                                <SmoothLink name="Home" route="home" />
                                <SmoothLink name="About" route="about" />
                                <SmoothLink
                                    name="Portfolio"
                                    route="portfolio"
                                />
                                <SmoothLink name="Contact" route="contact" />
                            </NavList>
                        ) : (
                            <Link href="/">
                                <span>Back Home</span>
                            </Link>
                        )}
                        <ThemeToggler />
                        <CustomDrawer />
                        <AnimatePresence exitBeforeEnter>
                            {openDrawer && <Drawer />}
                        </AnimatePresence>
                    </NavListWrapper>
                </HeaderContent>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
