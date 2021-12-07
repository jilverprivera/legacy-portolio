// <--- IMPORTANT --->
import { networks } from "../../data";
// <--- STYLES --->
import { NetworkLink, NetworksContainer } from "./styles";

const Networks = () => {
  return (
    <NetworksContainer>
      {networks.map((network) => (
        <NetworkLink
          key={network.id}
          href={network.url}
          target="_blank"
          whileHover={{ scale: 1.1 }}
        >
          {network.icon}
        </NetworkLink>
      ))}
    </NetworksContainer>
  );
};

export default Networks;
