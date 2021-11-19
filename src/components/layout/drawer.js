import { useContext } from "react";
import Link from "next/link";

import { AppContext } from "../../context/AppContext";
import { DrawerContent, DrawerIcon } from "../../styles/layout.style";
import { SmoothLink } from "../smoothLink";

export const CustomDrawer = () => {
    const {
        drawer: { openDrawer, setopenDrawer },
    } = useContext(AppContext);
    return (
        <div onClick={() => setopenDrawer(!openDrawer)}>
            <DrawerIcon open={openDrawer} />
        </div>
    );
};

export const Drawer = () => {
    return (
        <DrawerContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SmoothLink name="Home" route="home" />
            <SmoothLink name="About" route="about" />
            <SmoothLink name="Portfolio" route="portfolio" />
            <SmoothLink name="Contact" route="contact" />
        </DrawerContent>
    );
};
