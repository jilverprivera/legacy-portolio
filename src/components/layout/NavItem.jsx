// <--- STYLES --->
import { NavItemContent, NavLink, NavText } from "./styles";

const NavItem = ({ path, name }) => {
  return (
    <NavItemContent>
      <NavLink href={path}>
        <NavText>{name}</NavText>
      </NavLink>
    </NavItemContent>
  );
};

export default NavItem;
