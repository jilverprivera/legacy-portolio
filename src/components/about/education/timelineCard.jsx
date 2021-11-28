import PropTypes from "prop-types";

// <--- STYLES --->
import {
    TimeLineContent,
    TimeLineParagraph,
    TimeLineTitle,
} from "../../../styles/about";

const TimelineCard = ({ index, academy, location, title, date }) => {
    return (
        <TimeLineContent
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: index % 2 === 0 ? -20 : 20 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            alignItems={index % 2 === 0 ? "flex-start" : "flex-end"}
        >
            <TimeLineTitle>{title}</TimeLineTitle>
            <TimeLineParagraph>{academy}</TimeLineParagraph>
            <TimeLineParagraph>{location}</TimeLineParagraph>
            <TimeLineParagraph>{date}</TimeLineParagraph>
        </TimeLineContent>
    );
};

TimelineCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    academy: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default TimelineCard;
