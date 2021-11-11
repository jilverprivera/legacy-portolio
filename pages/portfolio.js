import React from "react";
import Image from "next/image";
import Layout from "../src/components/layout/layout";
import { Seo } from "../src/seo";

import { Container, WrapperGrid } from "../src/styles/global.style";
import { PortfolioData } from "../src/data";
import { PortfolioCard } from "../src/styles/portfolio.style";
import { Paragraph } from "../src/styles/typography";

import { GoDeviceMobile } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
const Portfolio = () => {
    return (
        <>
            <Seo
                lang="en"
                title="Jilver Pacheco — Frontend Developer / Electronic Engineer"
            />
            <Layout>
                <Container>
                    <WrapperGrid
                        columnWidth="30rem"
                        rowGap="2rem"
                        colGap="2rem"
                    >
                        {PortfolioData.map((data) => (
                            <PortfolioCard key={data.id}>
                                <Image src={data.image} alt={data.slug} />
                                <span>
                                    {data.category === "Web" && (
                                        <RiComputerLine />
                                    )}
                                    {data.category === "Mobile" && (
                                        <GoDeviceMobile />
                                    )}
                                </span>
                                {data.title}
                                <Paragraph>{data.description}</Paragraph>
                                <div>
                                    {data.technologies.map((tech) => (
                                        <p key={tech.name}>{tech.name}</p>
                                    ))}
                                </div>
                            </PortfolioCard>
                        ))}
                    </WrapperGrid>
                </Container>
            </Layout>
        </>
    );
};

export default Portfolio;
