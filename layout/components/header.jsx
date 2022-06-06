import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as NavLink } from "react-scroll";
import { AppContext } from "../../context";

// import Menu from "./menu";

import {
  HeaderContainer,
  HeaderWrapper,
  LocalNav,
  NavContainer,
  NavItem,
} from "../../styles/layout";
import { useRouter } from "next/router";
import { Dropdown } from "./dropdown";

const routes = [
  // { title: "home", route: "banner" },
  { title: "about me", route: "about" },
  { title: "portfolio", route: "portfolio" },
  // { title: "blog", route: "blog" },
];

const Header = () => {
  const { layout } = useContext(AppContext);
  const { pathname } = useRouter();
  return (
    <HeaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeaderWrapper>
        <Link href="/" passHref>
          <a>
            <Image
              src={`/icon.svg`}
              alt="Jilver Pacheco"
              width={60}
              height={60}
            />
          </a>
        </Link>
        <NavContainer>
          {routes.map((_, index) => (
            <LocalNav
              key={index}
              activeClass="active-section"
              to={_.route}
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <NavItem currentPath={pathname === _.route ? true : false}>
                {_.title}
              </NavItem>
            </LocalNav>
          ))}
          <Dropdown />
        </NavContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
