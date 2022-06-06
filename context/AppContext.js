import { createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- APP STATE ---
  const state = {};
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
