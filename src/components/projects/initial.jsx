// <--- COMPONENTS --->
import Description from "./description";
import Letters from "./letters";

// <--- STYLES --->
import { BannerContainer, Line } from "../../styles/projects.style";

const Banner = () => {
    return (
        <BannerContainer>
            <Letters />
            <Line />
            <Description />
        </BannerContainer>
    );
};

export default Banner;
