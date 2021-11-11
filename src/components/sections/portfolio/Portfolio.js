import React from "react";
import { Container, WrapperFlex } from "../../../styles/global.style";
import { SectionTitle } from "../../../styles/typography";
import { Banner } from "./banner";
import { DevelopmentStages } from "./developmentStages";
import { FeaturedProjects } from "./featuredProjects";

const Portfolio = () => {
    return (
        <Container id="portfolio" padding="6rem 0rem">
            <WrapperFlex>
                <SectionTitle center>Some things I&apos;ve built</SectionTitle>
                <FeaturedProjects />
                <DevelopmentStages />
            </WrapperFlex>
            <Banner />
        </Container>
    );
};

export default Portfolio;
