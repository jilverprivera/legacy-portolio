import React, { useEffect, useState } from "react";

import { useSSR } from "../../hooks/useSSR";

import { ThemeToggler } from "../themeToggler";
import { SmoothLink } from "../smoothLink";

import {
    HeaderContent,
    HeaderWrapper,
    NavListWrapper,
} from "../../styles/layout.style";

const Header = () => {
    const [navbarBorder, setNavbarBorder] = useState(false);
    const { isRendering } = useSSR();

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
        <HeaderWrapper>
            <div className={navbarBorder ? "bg-active" : "bg"}>
                <HeaderContent>
                    <h1>Jilver pacheco</h1>
                    <NavListWrapper>
                        <SmoothLink name="Home" route="home" />
                        <SmoothLink name="About me" route="about" />
                        <SmoothLink name="Portfolio" route="portfolio" />
                        <SmoothLink name="Contact" route="contact" />
                        <ThemeToggler />
                    </NavListWrapper>
                </HeaderContent>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
