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
    FeaturedSkills,
    FeaturedSkillsContent,
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
                        <FeaturedCard key={data.id}>
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

                                <FeaturedSkillsContent>
                                    {data.technologies.map((technology) => (
                                        <FeaturedSkills key={technology.name}>
                                            {technology.name}
                                        </FeaturedSkills>
                                    ))}
                                </FeaturedSkillsContent>
                                <IconWrapper responsiveSize="100%">
                                    {data.github_url && (
                                        <Link href={data.github_url}>
                                            <Icon large cursor="pointer">
                                                <FaGithub />
                                            </Icon>
                                        </Link>
                                    )}
                                    {data.url && (
                                        <Link href={data.url}>
                                            <Icon large cursor="pointer">
                                                <FaExternalLinkAlt />
                                            </Icon>
                                        </Link>
                                    )}
                                </IconWrapper>
                            </FeaturedData>
                        </FeaturedCard>
                    );
                })}
        </div>
    );
};
