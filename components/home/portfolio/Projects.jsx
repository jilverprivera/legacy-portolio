import Image from "next/image";
import Link from "next/link";
import { GlobalContainer, GlobalFlexStartWrapper } from "../../../styles";
import SectionTitle from "../../global/SectionTitle";

import {
  Categories,
  Category,
  Date,
  Description,
  ImageWrapper,
  InformationWrapper,
  ProjectContainer,
  ProjectIndex,
  ProjectName,
  TechnologiesWrapper,
  Technology,
  TextLink,
} from "./styles";

const Projects = ({ projects }) => {
  return (
    <GlobalContainer id="portfolio" bg>
      <GlobalFlexStartWrapper>
        <SectionTitle
          title="Portfolio"
          message="Want to see all my projects?"
          path="/portfolio"
        />
        {projects.map((project, index) => {
          return (
            <ProjectContainer
              key={project.slug}
              reverse={index % 2 === 0 ? true : false}
            >
              {/* <ImageWrapper> */}
              <Image
                src={project.cover_image}
                width={700}
                height={454}
                alt={project.slug}
                // layout="fill"
                // objectFit="contain"
              />
              {/* </ImageWrapper> */}
              <InformationWrapper right={index % 2 === 0 ? true : false}>
                <Date>{project.date}</Date>
                <ProjectName>{project.title}</ProjectName>
                <Categories>
                  {project.categories.map((category, index) => (
                    <Category key={index}>{category}</Category>
                  ))}
                </Categories>
                <Description right={index % 2 !== 0 ? true : false}>
                  {project.description}
                </Description>
                <TechnologiesWrapper>
                  {project.technologies.map((technology, index) => (
                    <Technology key={technology}>{technology}</Technology>
                  ))}
                </TechnologiesWrapper>
                <ProjectIndex>0{index + 1}</ProjectIndex>
                <Link href={`/portfolio/${project.slug}`} passHref>
                  <TextLink>View project</TextLink>
                </Link>
              </InformationWrapper>
            </ProjectContainer>
          );
        })}
      </GlobalFlexStartWrapper>
    </GlobalContainer>
  );
};

export default Projects;
