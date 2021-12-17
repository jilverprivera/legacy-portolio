// <--- STYLES --->
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NavItemContent, NavLink, NavText } from "./styles";

const NavItem = ({ path, name }) => {
  const { menu } = useContext(AppContext);
  const { setOpenMenu } = menu;
  return (
    <NavItemContent>
      <NavLink to={path} spy={true} smooth={true} offset={0} duration={1000}>
        <NavText onClick={() => setOpenMenu(false)}>{name}</NavText>
      </NavLink>
    </NavItemContent>
  );
};

export default NavItem;
