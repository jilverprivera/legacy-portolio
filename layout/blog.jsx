import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { SIZES, THEME } from "../constants";
import Seo from "../seo/SEO";
import GLOBAL from "../styles/GLOBAL";

const BlogLayout = ({ children, metadata = {}, type = "post" }) => {
  const width = type === "post" ? "65%" : "90%";
  const isBlogTemplate = type === "post" && metadata.date;
  // console.log(metadata);
  return (
    <>
      <Seo metadata={metadata} />
      <ThemeProvider theme={THEME}>
        <GLOBAL />
        <Header>
          <Date>{metadata.date}</Date>
          <Title>{metadata.title}</Title>
          <TagContent>
            {metadata.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContent>
        </Header>

        <Section>{children}</Section>
      </ThemeProvider>
    </>
  );
};

export default BlogLayout;

const Header = styled.header`
  width: 65%;
  padding: 10rem 0rem;
  margin: 0rem auto;
  // border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Date = styled.span`
  font-size: ${SIZES.small};
  color: ${({ theme }) => theme.gray};
`;
const Title = styled.h1`
  font-size: ${SIZES.large};
`;

const TagContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Tag = styled.span`
  font-size: ${SIZES.regular};
  color: #0284d2;
  text-transform: uppercase;
  position: relative;
  ::before {
    content: "|";
    margin: 0rem 1rem;
    color: ;
  }
  &:first-child {
    ::before {
      content: "";
      margin-left: 0rem;
    }
  }
`;

const Section = styled.section`
  width: 65%;
  // padding: 10rem 0rem;
  margin: 0rem auto;
  // border: 1px solid #000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
