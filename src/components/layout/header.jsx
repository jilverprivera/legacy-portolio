import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

// <--- IMPORTANT --->
import { AppContext } from "../../context/AppContext";
import { useWebTranslation } from "../../hooks/useWebTranslation";

// <--- COMPONENTS --->
import Drawer from "./drawer";

// <--- STYLES --->
import {
    HeaderContent,
    HeaderContainer,
    HamburgerMenu,
    MenuContent,
    ContentHeader,
    LngButton,
} from "../../styles/layout/header.style";

const Header = () => {
    
    const { drawer, navbarActive } = useContext(AppContext);
    const { openDrawer, setOpenDrawer } = drawer;

    return (
        <HeaderContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            height={navbarActive ? "6rem" : "7rem"}
            blur={navbarActive ? "1rem" : null}
            onShadow={navbarActive ? "0rem 0.2rem 1rem rgba(0,0,0,0.1)" : null}
        >
            <HeaderContent>
                <h1>Jilver pacheco</h1>
                <ContentHeader>
                    <MenuContent onClick={() => setOpenDrawer(!openDrawer)}>
                        <HamburgerMenu open={openDrawer} />
                    </MenuContent>
                </ContentHeader>
            </HeaderContent>
            <AnimatePresence exitBeforeEnter>
                {openDrawer && <Drawer />}
            </AnimatePresence>
        </HeaderContainer>
    );
};

export default Header;
