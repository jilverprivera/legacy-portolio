import PropTypes from "prop-types";

// <--- STYLES --->
import { SkillCard, SkillHeader, SkillIcon, SkillsContainer, Skill, SkillTitle } from "../../../styles/about";

const CardSkill = ({ index, icon, title, skills }) => {
    return (
        <SkillCard
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
        >
            <SkillHeader>
                <SkillIcon>{icon}</SkillIcon>
                <SkillTitle>{title}</SkillTitle>
            </SkillHeader>
            <SkillsContainer>
                {skills.map((skill) => (
                    <Skill key={skill.name}>{skill.name}</Skill>
                ))}
            </SkillsContainer>
        </SkillCard>
    );
};

export default CardSkill;

CardSkill.propTypes = {
    index: PropTypes.number.isRequired,
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
};
