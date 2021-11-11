import React from "react";
import Link from "next/link";
import { BannerContent, BannerLink } from "../../../styles/portfolio.style";
import { Paragraph } from "../../../styles/typography";

export const Banner = () => {
    return (
        <BannerContent>
            <Paragraph large>Do you want to see all my projects?</Paragraph>
            <Link href="/portfolio">
                <BannerLink>View Portfolio</BannerLink>
            </Link>
        </BannerContent>
    );
};
