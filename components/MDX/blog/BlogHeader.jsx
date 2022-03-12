import PropTypes from "prop-types";
import { BlogDate, BlogHeaderContent, BlogTitle } from "./styles";

const BlogHeader = ({ title, date }) => {
  return (
    <BlogHeaderContent>
      <BlogDate>{date}</BlogDate>
      <BlogTitle>{title}</BlogTitle>
    </BlogHeaderContent>
  );
};

export default BlogHeader;

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
