import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [openDrawer, setopenDrawer] = useState(false);
    const [pathDir, setPathDir] = useState(null);

    const [professionalView, setProfessionalView] = useState("skills");
    const appState = {
        path: { pathDir, setPathDir },
        dark: { darkMode, setDarkMode },
        drawer: { openDrawer, setopenDrawer },
        profile: { professionalView, setProfessionalView },
    };

    console.log(openDrawer);
    return (
        <AppContext.Provider value={appState}>{children}</AppContext.Provider>
    );
};
