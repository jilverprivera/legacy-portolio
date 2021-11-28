import PropTypes from "prop-types";

// <--- STYLES --->
import { Paragraph } from "../../../styles/typography";
import { ExperienceContent } from "../../../styles/about";

const ExperienceCard = ({ position, company, description, date }) => {
    return (
        <ExperienceContent>
            <Paragraph medium>
                {position}, {company}
            </Paragraph>
            <Paragraph regular>{description}</Paragraph>
            <Paragraph regular>{date}</Paragraph>
        </ExperienceContent>
    );
};

export default ExperienceCard;

ExperienceCard.propTypes = {
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
