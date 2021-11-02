import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ThemeSwitch } from "../styles/layout.style";

export const ThemeToggler = () => {
    const {
        dark: { darkMode, setDarkMode },
    } = useContext(AppContext);

    return (
        <ThemeSwitch onClick={() => setDarkMode(!darkMode)}>
            <div className={darkMode ? "toggler-active" : "toggler"}></div>
        </ThemeSwitch>
    );
};
