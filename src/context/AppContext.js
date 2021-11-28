import { createContext, useEffect, useState } from "react";
import { useSSR } from "../hooks/useSSR";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("es");

    const [navbarActive, setNavbarActive] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const [openSettings, setOpenSettings] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    const { isRendering } = useSSR();

    useEffect(() => {
        isRendering &&
            (window.onscroll = () => {
                if (window.pageYOffset >= 80) {
                    setNavbarActive(true);
                } else {
                    setNavbarActive(false);
                }
            });
    }, [isRendering]);

    const appState = {
        theme: { darkTheme, setDarkTheme },
        drawer: { openDrawer, setOpenDrawer },
        language: { currentLanguage, setCurrentLanguage },
        settings: { openSettings, setOpenSettings },
        navbarActive,
    };

    return (
        <AppContext.Provider value={appState}>{children}</AppContext.Provider>
    );
};
