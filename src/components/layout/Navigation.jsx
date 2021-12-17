import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
// <--- IMPORTANT --->
import { AppContext } from "../../context/AppContext";
// <--- COMPONENTS --->
import NavItem from "./NavItem";
import Language from "./language";
// <--- STYLES --->
import { NavBackdrop, NavContainer, NavList, NavWrapper } from "./styles";
// <--- VARIANTS --->
import {
  NavigationVariants,
  NavigationWrapper,
} from "../../constants/VARIANTS";

const Navigation = () => {
  const { menu } = useContext(AppContext);
  const { openMenu } = menu;

  const [t] = useTranslation("global");
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {openMenu && (
        <>
          <NavBackdrop
            variants={NavigationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <NavContainer
              variants={NavigationWrapper}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NavWrapper>
                <NavList>
                  <NavItem name={t("header.home-link")} path="home" />
                  <NavItem name={t("header.skill-link")} path="skills" />
                  <NavItem
                    name={t("header.education-experience-link")}
                    path="education-exp"
                  />
                  <NavItem name={t("header.portfolio-link")} path="portfolio" />
                  <NavItem name={t("header.contact-link")} path="contact" />
                </NavList>
                <Language />
              </NavWrapper>
            </NavContainer>
          </NavBackdrop>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
