import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { FeaturedProjects } from "./featuredProjects";
import { DevelopmentStages } from "./developmentStages";

import {
    Container,
    WrapperFlex,
    WrapperGrid,
} from "../../../styles/global.style";
import { SectionTitle } from "../../../styles/typography";
import { PortfolioData } from "../../../data";

import { CardProject } from "./cardProject";

const Portfolio = () => {
    return (
        <Container id="portfolio" padding="6rem 0rem">
            <WrapperFlex>
                <SectionTitle center>Some things I&apos;ve built</SectionTitle>
                <FeaturedProjects />
            </WrapperFlex>
            <SectionTitle center>More proyects</SectionTitle>
            <WrapperGrid columnWidth="30rem" columnGap="2rem" rowGap="2rem">
                {PortfolioData.filter((el) => el.featured === false)
                    .slice(0, 6)
                    .map((data, index) => (
                        <CardProject key={data.id} data={data} index={index} />
                    ))}
            </WrapperGrid>
            {/* <DevelopmentStages /> */}
        </Container>
    );
};

export default Portfolio;
