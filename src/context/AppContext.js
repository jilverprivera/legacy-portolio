import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const [professionalView, setProfessionalView] = useState("skills");
    const appState = {
        dark: { darkMode, setDarkMode },
        profile: { professionalView, setProfessionalView },
    };

    return (
        <AppContext.Provider value={appState}>{children}</AppContext.Provider>
    );
};
