import { createContext, useEffect, useState } from "react";
import { useSSR } from "../hooks/useSSR";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isHome, setIsHome] = useState(false);
  // <---LANGUAGE --->
  const [currentLanguage, setCurrentLanguage] = useState("es");

  // <---NAVBAR --->
  const [navbarActive, setNavbarActive] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  // <---CONTACT--->
  const [sendingForm, setSendingForm] = useState(false);
  const [successForm, setSuccessForm] = useState(false);

  // <---HOOKS--->
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
    home: { isHome, setIsHome },
    menu: { openMenu, setOpenMenu },
    language: { currentLanguage, setCurrentLanguage },
    contact: { sendingForm, setSendingForm, successForm, setSuccessForm },

    navbarActive,
  };

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
