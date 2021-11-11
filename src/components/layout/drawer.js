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
        <DrawerIcon
            onClick={() => setopenDrawer(!openDrawer)}
            open={openDrawer}
        />
    );
};

export const Drawer = () => {
    const {
        path: { pathDir },
    } = useContext(AppContext);

    return (
        <DrawerContent
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 1, height: 0 }}
            transition={{ duration: 0.5 }}
        >
            {pathDir === "/" ? (
                <>
                    <SmoothLink name="Home" route="home" />
                    <SmoothLink name="About" route="about" />
                    <SmoothLink name="Portfolio" route="portfolio" />
                    <SmoothLink name="Contact" route="contact" />
                </>
            ) : (
                <Link href="/">
                    <span>Back Home</span>
                </Link>
            )}
        </DrawerContent>
    );
};
