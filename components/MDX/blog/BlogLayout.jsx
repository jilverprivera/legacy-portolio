import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../../constants";
import GLOBAL from "../../../styles/GLOBAL";
import { BlogContainer } from "./styles";

const BlogLayout = ({ children }) => {
  return (
    <ThemeProvider theme={THEME}>
      <GLOBAL />
      <BlogContainer>{children}</BlogContainer>
    </ThemeProvider>
  );
};

export default BlogLayout;

// BlogLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
