import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../../constants";
import Seo from "../../../seo/SEO";
import GLOBAL from "../../../styles/GLOBAL";
import { BlogContainer } from "./styles";

const BlogLayout = ({ metadata = {}, children }) => {
  return (
    <ThemeProvider theme={THEME}>
      <Seo metadata={metadata} />
      <GLOBAL />
      <BlogContainer>{children}</BlogContainer>
    </ThemeProvider>
  );
};

export default BlogLayout;

// BlogLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
