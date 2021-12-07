// <--- IMPORTANT --->
import { networks } from "../../data";

// <--- STYLES --->
import { IconLink, NetworksContainer } from "./styles";

const SocialLinks = () => {
    return (
        <NetworksContainer>
            {networks.map((data) => (
                <IconLink key={data.id} href={data.url} target="_blank">
                    {data.icon}
                </IconLink>
            ))}
        </NetworksContainer>
    );
};

export default SocialLinks;
