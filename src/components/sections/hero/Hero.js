import React from "react";
import Typewriter from "typewriter-effect";
import { SIZES } from "../../../constants";
import { Container, WrapperFlex } from "../../../styles/global.style";
import { HeroWrapper } from "../../../styles/hero.style";
import { AuthorName, Paragraph } from "../../../styles/typography";
import { LastProjects } from "./lastProjects";
const Hero = () => {
    return (
        <Container id="home">
            <WrapperFlex>
                <HeroWrapper>
                    <Paragraph extraLarge letterSpacing="1px">
                        Hey there!
                    </Paragraph>
                    <AuthorName fontSize={SIZES.largeTitle}>
                        Jilver Pacheco
                    </AuthorName>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Paragraph extraLarge fontWeight="500">
                            I&apos;m a&nbsp;
                        </Paragraph>
                        <Paragraph extraLarge fontWeight="500">
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    delay: 50,
                                    pauseFor: 2000,
                                    strings: [
                                        "Frontend Developer.",
                                        "Electronic Engineer.",
                                    ],
                                }}
                            />
                        </Paragraph>
                    </div>
                    <LastProjects />
                </HeroWrapper>
            </WrapperFlex>
        </Container>
    );
};

export default Hero;
