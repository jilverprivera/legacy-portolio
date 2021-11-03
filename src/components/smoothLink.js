import React from "react";
import { NavLink } from "../styles/layout.style";

export const SmoothLink = ({ route, name }) => {
    return (
        <NavLink
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
