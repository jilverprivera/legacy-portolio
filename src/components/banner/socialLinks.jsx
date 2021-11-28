// <--- IMPORTANT --->
import { networks } from "../../data";

// <--- STYLES --->
import { IconContent, SocialContainer } from "../../styles/banner";

const SocialLinks = () => {
    return (
        <SocialContainer>
            {networks.map((data) => (
                <IconContent key={data.id} href={data.url} target="_blank">
                    {data.icon}
                </IconContent>
            ))}
        </SocialContainer>
    );
};

export default SocialLinks;
