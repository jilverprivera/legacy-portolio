import { GlobalContainer, GlobalFlexStartWrapper } from "../../../styles";
import SectionTitle from "../../global/SectionTitle";

import { Container } from "./styles";

const Blog = () => {
  return (
    <GlobalContainer id="last-writings">
      <GlobalFlexStartWrapper>
        <SectionTitle
          title="Blog"
          message="Want to see all my articles?"
          path="/blog"
        />
      </GlobalFlexStartWrapper>
    </GlobalContainer>
  );
};

export default Blog;
