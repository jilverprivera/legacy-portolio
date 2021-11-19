import { createContext, useEffect, useState } from "react";
import { useSSR } from "../hooks/useSSR";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [navbarActive, setNavbarActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [openDrawer, setopenDrawer] = useState(false);

    const { isRendering } = useSSR();

    useEffect(() => {
        isRendering &&
            (window.onscroll = () => {
                if (window.pageYOffset >= 80) {
                    console.log(window.pageYOffset);
                    setNavbarActive(true);
                } else {
                    setNavbarActive(false);
                }
            });
    }, [isRendering]);

    const [professionalView, setProfessionalView] = useState("skills");
    const appState = {
        dark: { darkMode, setDarkMode },
        drawer: { openDrawer, setopenDrawer },
        profile: { professionalView, setProfessionalView },
        navbarActive,
    };

    return (
        <AppContext.Provider value={appState}>{children}</AppContext.Provider>
    );
};
