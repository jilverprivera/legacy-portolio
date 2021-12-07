import PropTypes from "prop-types";
import { GoBrowser, GoDeviceMobile } from "react-icons/go";
import { AiOutlineConsoleSql } from "react-icons/ai";

import { Paragraph } from "../../styles/typography";
import { ServiceCard, IconTitle } from "./styles";

const ServicesCard = ({ id, name }) => {
  return (
    <ServiceCard>
      <IconTitle>
        {id === "Frontend" && <GoBrowser />}
        {id === "Backend" && <AiOutlineConsoleSql />}
        {id === "Mobile" && <GoDeviceMobile />}
      </IconTitle>
      <Paragraph center regular>{name}</Paragraph>
    </ServiceCard>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
