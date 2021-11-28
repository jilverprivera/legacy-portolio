import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";

export const useWebTranslation = () => {
    const { language } = useContext(AppContext);
    const { currentLanguage, setCurrentLanguage } = language;

    const [t, i18n] = useTranslation();

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    const handleLanguageChange = () => {
        currentLanguage === "en"
            ? i18n.changeLanguage("es")
            : i18n.changeLanguage("en");
    };
    return { currentLanguage, handleLanguageChange };
};
