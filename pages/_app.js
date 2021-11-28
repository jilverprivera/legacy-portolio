import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import { AppProvider } from "../src/context/AppContext";
// ES
import global_es from "../translations/es/global.json";
import about_es from "../translations/es/about.json";
import portfolio_es from "../translations/es/portfolio.json";
import contact_es from "../translations/es/contact.json";

// EN
import global_en from "../translations/en/global.json";
import about_en from "../translations/en/about.json";
import portfolio_en from "../translations/en/portfolio.json";
import contact_en from "../translations/en/contact.json";

const MyApp = ({ Component, pageProps }) => {
    i18next.init({
        interpolation: { escapeValue: false },
        lng: "es",
        resources: {
            es: {
                global: global_es,
                about: about_es,
                portfolio: portfolio_es,
                contact: contact_es,
            },
            en: {
                global: global_en,
                about: about_en,
                portfolio: portfolio_en,
                contact: contact_en,
            },
        },
    });
    return (
        <AppProvider>
            <I18nextProvider i18n={i18next}>
                <Component {...pageProps} />
            </I18nextProvider>
        </AppProvider>
    );
};

export default MyApp;
