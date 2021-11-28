import React from "react";
import Image from "next/image";

import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import {
    Card,
    FeaturedData,
    FeaturedIndex,
    FeaturedTitle,
    FeaturedWrapper,
    LastProjectIcon,
    Link,
    ProjectTitle,
    TechnologiesWrapper,
    Technology,
} from "../../../styles/portfolio";
import { Paragraph } from "../../../styles/typography";

const FeaturedCard = ({
    index,
    name,
    slug,
    description,
    technologies,
    github_url,
    featured,
    url,
    cardPosition,
    setCardPosition,
}) => {
    console.log(cardPosition, "card");
    console.log(index, "index");
    return (
        <Card
            onMouseEnter={() => setCardPosition(index)}
            onMouseLeave={() => setCardPosition(null)}
        >
            {index === 0 && (
                <LastProjectIcon>
                    <BsStars />
                </LastProjectIcon>
            )}
            <Image
                alt={name}
                src={require(`../../../images/${slug}.webp`)}
                className="responsive__featuredImage"
            />
            <FeaturedData>
                <FeaturedTitle>{featured}</FeaturedTitle>
                <ProjectTitle>{name}</ProjectTitle>
                <Paragraph regular>{description}</Paragraph>
                {cardPosition === index && (
                    <FeaturedIndex>0{index + 1}</FeaturedIndex>
                )}

                <FeaturedWrapper>
                    {technologies.map((technology) => (
                        <Technology key={technology.name}>
                            {technology.name}
                        </Technology>
                    ))}
                </FeaturedWrapper>
                <FeaturedWrapper>
                    {github_url && (
                        <Link href={github_url}>
                            <AiOutlineGithub />
                        </Link>
                    )}
                    {url && (
                        <Link href={url}>
                            <AiOutlineLink />
                        </Link>
                    )}
                </FeaturedWrapper>
            </FeaturedData>
        </Card>
    );
};

export default FeaturedCard;
