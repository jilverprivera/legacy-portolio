import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
// <--- IMPORTANT --->
import { AppContext } from "../../context/AppContext";
// <--- COMPONENTS --->
import NavItem from "./NavItem";
// <--- STYLES --->
import { NavContainer, NavList } from "./styles";
// <--- VARIANTS --->
import { NavigationVariants } from "../../constants/VARIANTS";

const Navigation = () => {
  const { menu } = useContext(AppContext);
  const { openMenu } = menu;

  const [t] = useTranslation("global");
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {openMenu && (
        <>
          <NavContainer
            variants={NavigationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <NavList>
              <NavItem name={t("header.home-link")} path={`/`} />
              <NavItem name={t("header.about-link")} path={`/about`} />
              <NavItem name={t("header.portfolio-link")} path={`/portfolio`} />
              <NavItem name={t("header.contact-link")} path={`/contact`} />
            </NavList>
          </NavContainer>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
