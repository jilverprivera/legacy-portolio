import { useContext } from "react";

// <--- IMPORTANT --->
import { AppContext } from "../../context/AppContext";

// <--- STYLE --->
import { LinkDrawer } from "../../styles/layout/drawer.style";

const DrawerLink = ({ route, name }) => {
    const { drawer: { setOpenDrawer } } = useContext(AppContext);
    
    return (
        <LinkDrawer
            onClick={() => setOpenDrawer(false)}
            to={route}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
        >
            {name}
        </LinkDrawer>
    );
};

export default DrawerLink;
