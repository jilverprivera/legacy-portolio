import HorizontalScroll from "react-scroll-horizontal";
import Link from "next/link";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
import {
  Box,
  BoxContainer,
  Categories,
  Category,
  Description,
  ProjectImage,
  ProjectIndex,
  ProjectInformation,
  ProjectTitle,
  SectionTitle,
  TitleWrapper,
  Wrapper,
  ArrowLink,
  LinkContainer,
  LinkText,
} from "../styles/portfolio";

const Portfolio = ({ projects }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SectionTitle>portfolio</SectionTitle>
      </TitleWrapper>
      <BoxContainer>
        <HorizontalScroll
          pageLock={false}
          reverseScroll={true}
          style={{ width: "100%", height: "100%" }}
          config={{ stiffness: 30, damping: 30 }}
          animValues={10}
        >
          {projects.map((item, index) => (
            <Box key={index}>
              <ProjectInformation>
                <ProjectIndex>
                  0{index + 1}/0{projects.length}
                </ProjectIndex>
                <ProjectTitle>{item.title}</ProjectTitle>
                <Categories>
                  {item.categories.map((item) => (
                    <Category key={item}>{item}</Category>
                  ))}
                </Categories>
                <Description>{item.description}</Description>

                <Link href={`/portfolio/${item.slug}`} passHref>
                  <LinkContainer>
                    <LinkText>View project</LinkText>
                    <ArrowLink>
                      <BsArrowRight />
                    </ArrowLink>
                  </LinkContainer>
                </Link>
              </ProjectInformation>
              <ProjectImage>
                <Image
                  src={item.cover_image}
                  alt={item.title}
                  width={864}
                  height={1300}
                  layout="responsive"
                  objectFit="cover"
                />
              </ProjectImage>
            </Box>
          ))}
        </HorizontalScroll>
      </BoxContainer>
    </Wrapper>
  );
};

export default Portfolio;
