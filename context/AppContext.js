import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useWindow } from "../hooks";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- STATES ---
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selector, setSelector] = useState("Skills");

  const { rendering } = useWindow();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    rendering &&
      (window.onscroll = () => {
        if (window.pageYOffset >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      });
  }, [rendering]);

  // --- APP STATE ---
  const state = {
    layout: {
      navbar,
      openDrawer,
      setOpenDrawer,
    },
    openDrawer,
    setOpenDrawer,

    information: { selector, setSelector },
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
