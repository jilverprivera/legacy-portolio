import { useContext, useState } from "react";
import Link from "next/link";
import { AppContext } from "../../context";
import Logo from "../../public/icon.svg";
import {
  Hamburger,
  HamburgerContent,
  HeaderContainer,
  HeaderWrapper,
  LogoContent,
  Navigation,
} from "./styles";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Header = () => {
  const { openDrawer, setOpenDrawer, layout } = useContext(AppContext);

  const [openNavigation, setOpenNavigation] = useState(false);

  const { navbar, setOpenMenu } = layout;
  return (
    <>
      <HeaderContainer active={navbar}>
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
          {/* <HamburgerContent onClick={() => setOpenDrawer(!openDrawer)}>
          <Hamburger open={openDrawer} />
        </HamburgerContent> */}
          <div>
            <Link href="/about" passHref>
              <Navigation>About</Navigation>
            </Link>
            <Link href="/blog" passHref>
              <Navigation>Blog</Navigation>
            </Link>
            {/* <Link href="/home" passHref> */}
            <Navigation
              onMouseEnter={() => setOpenNavigation(true)}
              onMouseLeave={() => setOpenNavigation(false)}
            >
              Discover
            </Navigation>
            {/* </Link> */}
          </div>
        </HeaderWrapper>
      </HeaderContainer>

      {openNavigation && <Dropdown />}
    </>
  );
};

export default Header;
