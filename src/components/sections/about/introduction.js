import React from "react";
import { IntroductionWrapper } from "./about.style";
import { Button } from "../../../styles/button.style";
import { Paragraph, Title } from "../../../styles/typography";

const Introduction = () => {
    return (
        <IntroductionWrapper>
            <Title>A few words</Title>

            <Paragraph
                large
                lineHeight="25px"
                margin="0rem  0rem 3rem 0rem"
                responsiveAlign="center"
            >
                Hey!, nice to meet you, I am a&nbsp;
                <strong>Frontend Developer</strong>&nbsp;specialized in the
                design of minimalist interfaces and innovative products focused
                on user experience, however, over time I have been exploring new
                paths such as Backend and Mobile Development, I am also an&nbsp;
                <strong>Electronics Engineer</strong>&nbsp;which allows me to
                join my skills in electronics with the fascinating world of the
                web.
            </Paragraph>

            <Button largeButton primary resposiveBlock>
                View my CV
            </Button>
        </IntroductionWrapper>
    );
};

export default Introduction;
