// <--- IMPORTANT --->
import { useWebTranslation } from "../../hooks/useWebTranslation";

// <--- STYLES --->
import { LanguageToggler } from "../../styles/layout/main.style";

const Language = () => {
    const { currentLanguage, handleLanguageChange } = useWebTranslation();
    return (
        <LanguageToggler
            onClick={handleLanguageChange}
            whileHover={{ scale: 1.1 }}
        >
            {currentLanguage === "es" ? "[En]" : "[Es]"}
        </LanguageToggler>
    );
};

export default Language;
