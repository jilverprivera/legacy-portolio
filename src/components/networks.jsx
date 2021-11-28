import React from "react";
import { networks } from "../data";
import { NetworkIconLink, NetworksContainer } from "../styles/networks.style";

const Networks = () => {
    return (
        <NetworksContainer>
            {networks.map((network) => (
                <NetworkIconLink
                    key={network.id}
                    href={network.url}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                >
                    {network.icon}
                </NetworkIconLink>
            ))}
        </NetworksContainer>
    );
};

export default Networks;
