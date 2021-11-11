import React, { useState } from "react";
import { socialData } from "../data";

import {
    NetworkIcon,
    NetworkLink,
    NetworkWrapper,
    SocialContent,
} from "../styles/socialNetworks.style";

const SocialNetworks = () => {
    const [networkPosition, setNetworkPosition] = useState(null);
    return (
        <SocialContent>
            {socialData.map((data, index) => (
                <NetworkLink href={data.url}>
                    <NetworkWrapper
                        key={index}
                        background={data.background}
                        onMouseEnter={() => setNetworkPosition(index)}
                        onMouseLeave={() => setNetworkPosition(null)}
                        width={networkPosition === index ? "100%" : "3rem"}
                    >
                        <NetworkIcon>{data.icon}</NetworkIcon>
                        <span>{data.name}</span>
                    </NetworkWrapper>
                </NetworkLink>
            ))}
        </SocialContent>
    );
};

export default SocialNetworks;
