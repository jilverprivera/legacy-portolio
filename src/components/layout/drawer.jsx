import { useTranslation } from "react-i18next";

// <--- COMPONENTS --->
import DrawerLink from "./drawerLink";

// <--- STYLE --->
import { DrawerContent } from "../../styles/layout/drawer.style";

const Drawer = () => {
    const [t] = useTranslation("global");
    return (
        <DrawerContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <DrawerLink name={t("header.home-link")} route="home" />
            <DrawerLink name={t("header.about-link")} route="about" />
            <DrawerLink name={t("header.portfolio-link")} route="portfolio" />
            <DrawerLink name={t("header.contact-link")} route="contact" />
        </DrawerContent>
    );
};
export default Drawer;
