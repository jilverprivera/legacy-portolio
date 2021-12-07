import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import { SkillData } from "../../data";

import { Icon, TechnologiesContent, TechnologiesWrapper } from "./styles";

const Technologies = ({ selected }) => {
  return (
    <TechnologiesWrapper>
      <AnimatePresence exitBeforeEnter>
        {SkillData.filter((el) => el.id === selected).map((data) => (
          <TechnologiesContent
            key={data.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.skills.map((skill, index) => (
              <Icon
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill.icon}
              </Icon>
            ))}
          </TechnologiesContent>
        ))}
      </AnimatePresence>
    </TechnologiesWrapper>
  );
};

export default Technologies;

Technologies.propTypes = {
  selected: PropTypes.number.isRequired,
};
