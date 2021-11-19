import React from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

import { PortfolioData } from "../../../data";
import {
    FeaturedTitle,
    FeaturedCard,
    FeaturedData,
    FeaturedImage,
    FeaturedIndex,
    ProjectSkill,
    ProjectSkillsContent,
    FeaturedProjectName,
} from "../../../styles/portfolio.style";
import { Paragraph } from "../../../styles/typography";
import { Icon, IconWrapper } from "../../../styles/icon.style";
export const FeaturedProjects = () => {
    return (
        <div>
            {PortfolioData.filter((el) => el.featured === true)
                .slice(0, 3)
                .map((data, index) => {
                    const indexVal = index + 1;
                    return (
                        <FeaturedCard
                            key={data.id}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -20 : 20,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: index % 2 === 0 ? -20 : 20 }}
                            transition={{ duration: 0.3, delay: index * 0.3 }}
                        >
                            <FeaturedImage>
                                <Image src={data.image} alt={data.slug} />
                            </FeaturedImage>
                            <FeaturedData
                                childAlign={
                                    indexVal % 2 === 0
                                        ? "flex-start"
                                        : "flex-end"
                                }
                            >
                                <FeaturedIndex
                                    align={indexVal % 2 === 0 ? "100%" : "0%"}
                                >
                                    0{indexVal}
                                </FeaturedIndex>
                                <FeaturedTitle large>
                                    Featured project
                                </FeaturedTitle>
                                <FeaturedProjectName extraLarge>
                                    {data.title}
                                </FeaturedProjectName>
                                <Paragraph
                                    large
                                    fontWeight="600"
                                    margin="0rem 0rem 1rem"
                                    lineHeight="2.5rem"
                                    textAlign={
                                        indexVal % 2 === 0 ? "left" : "right"
                                    }
                                    responsiveAlign="center"
                                >
                                    {data.description}
                                </Paragraph>

                                <ProjectSkillsContent>
                                    {data.technologies.map((technology) => (
                                        <ProjectSkill key={technology.name}>
                                            {technology.name}
                                        </ProjectSkill>
                                    ))}
                                </ProjectSkillsContent>
                                <IconWrapper responsiveSize="100%">
                                    {data.github_url && (
                                        <a href={data.github_url}>
                                            <Icon large cursor="pointer">
                                                <FaGithub />
                                            </Icon>
                                        </a>
                                    )}
                                    {data.url && (
                                        <a href={data.url}>
                                            <Icon large cursor="pointer">
                                                <FaExternalLinkAlt />
                                            </Icon>
                                        </a>
                                    )}
                                </IconWrapper>
                            </FeaturedData>
                        </FeaturedCard>
                    );
                })}
        </div>
    );
};
