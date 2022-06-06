import React from "react";
import {
  BlogWrapper,
  SectionTitle,
  TitleWrapper,
  Wrapper,
} from "../styles/blog";
import { BlogCard } from "./BlogCard";

const Blog = ({ posts }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SectionTitle>blog</SectionTitle>
      </TitleWrapper>
      <BlogWrapper>
        {posts.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </BlogWrapper>
    </Wrapper>
  );
};

export default Blog;
