import PropTypes from "prop-types";

// <--- STYLES --->
import { TimeLineContent, TimeLineParagraph, TimeLineTitle } from "./styles";

const TimelineCard = ({ index, academy, location, title, date }) => {
  return (
    <TimeLineContent align={index % 2 === 0 ? "flex-start" : "flex-end"}>
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
