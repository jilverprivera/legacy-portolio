import React from "react";
import Image from "next/image";

import { SIZES } from "../../../constants";
import { PortfolioData } from "../../../data";
import {
    LastProjectsContainer,
    LastProjectsHeroWrapper,
    ProjectViewHero,
} from "../../../styles/hero.style";
import { Paragraph } from "../../../styles/typography";
import { SmoothLink } from "../../smoothLink";

export const LastProjects = () => {
    return (
        <LastProjectsContainer>
            <Paragraph medium fontWeight="600" letterSpacing="1px">
                Check my last projects
            </Paragraph>
            <LastProjectsHeroWrapper>
                {PortfolioData.filter((el) => el.featured === true)
                    .slice(0, 2)
                    .map((project) => (
                        <ProjectViewHero key={project.slug}>
                            <Image src={project.image} alt={project.slug} />
                        </ProjectViewHero>
                    ))}

                <SmoothLink route="portfolio" name="View more" />
            </LastProjectsHeroWrapper>
        </LastProjectsContainer>
    );
};
