import Link from "next/link";
import {
  PostDate,
  PostDescription,
  PostTags,
  PostTitle,
  PostURL,
  PostWrapper,
} from "../styles/home";

export const BlogCard = ({ slug, title, date, tags, description }) => {
  return (
    <PostWrapper>
      <PostDate>{date}</PostDate>
      <Link href={`/blog/${slug}`} passHref>
        <PostURL>
          <PostTitle>{title}</PostTitle>
          <div>
            {tags.map((item) => (
              <PostTags key={item}>{item}</PostTags>
            ))}
          </div>
        </PostURL>
      </Link>
      <PostDescription>{description}</PostDescription>
    </PostWrapper>
  );
};
