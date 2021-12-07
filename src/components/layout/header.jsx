import { useContext } from "react";
// <--- IMPORTANT --->
import { AppContext } from "../../context/AppContext";
import Logo from "../../../public/icon.svg";
// <--- STYLES --->
import {
  HeaderWrapper,
  HeaderContainer,
  Hamburger,
  HamburgerContent,
  ContentHeader,
  LogoContent,
} from "./styles";

const Header = () => {
  const { menu, home, navbarActive } = useContext(AppContext);
  const { openMenu, setOpenMenu } = menu;
  const { isHome } = home;

  return (
    <HeaderContainer
      height={navbarActive ? "6rem" : "7rem"}
      blur={navbarActive ? "1rem" : null}
      shadow={navbarActive ? "0rem 0.2rem 1rem rgba(0,0,0,0.1)" : null}
    >
      <HeaderWrapper>
        <LogoContent>
          <Logo />
        </LogoContent>
        <ContentHeader>
          <HamburgerContent onClick={() => setOpenMenu(!openMenu)}>
            <Hamburger background={isHome} open={openMenu} />
          </HamburgerContent>
        </ContentHeader>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
