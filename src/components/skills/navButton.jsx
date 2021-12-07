import PropTypes from "prop-types";

import { SkillData } from "../../data";
import { TechnologiesGroup, TechnologyBtn } from "./styles";

const NavButtons = ({ selected, setSelected }) => {
  return (
    <TechnologiesGroup>
      {SkillData.map((data) => (
        <TechnologyBtn
          key={data.id}
          onClick={() => setSelected(data.id)}
          selected={selected === data.id ? "#000" : "#ddd"}
        >
          {data.title}
        </TechnologyBtn>
      ))}
    </TechnologiesGroup>
  );
};

export default NavButtons;

NavButtons.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
};
