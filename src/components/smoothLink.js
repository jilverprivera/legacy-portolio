import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "../styles/layout.style";

export const SmoothLink = ({ route, name }) => {
    const {
        drawer: { openDrawer, setopenDrawer },
    } = useContext(AppContext);
    return (
        <NavLink
            onClick={() => setopenDrawer(false)}
            activeClass="active"
            to={route}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
        >
            {name}
        </NavLink>
    );
};
