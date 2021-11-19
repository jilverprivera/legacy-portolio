import React, { useContext } from "react";
import Typewriter from "typewriter-effect";

import { SIZES } from "../../../constants";

import { HeroWrapper } from "../../../styles/hero.style";
import { Container, WrapperFlex } from "../../../styles/global.style";
import {
    AuthorName,
    Paragraph,
    ProfessionalTitle,
} from "../../../styles/typography";
import { SmoothLink } from "../../smoothLink";
import { dark, light } from "../../../theme";
import { AppContext } from "../../../context/AppContext";

const Hero = () => {
    const {
        dark: { darkMode },
    } = useContext(AppContext);
    return (
        <Container
            id="home"
            background={
                darkMode ? dark.background_auxiliar : light.background_auxiliar
            }
        >
            <WrapperFlex>
                <HeroWrapper>
                    <Paragraph extraLarge letterSpacing="1px" fontWeight="600">
                        Hey!, welcome🖐
                    </Paragraph>
                    <AuthorName fontSize={SIZES.ultraLarge}>
                        Jilver Pacheco
                    </AuthorName>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Paragraph extraLarge fontWeight="600">
                            I&apos;m&nbsp;
                        </Paragraph>
                        <ProfessionalTitle>
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    delay: 50,
                                    pauseFor: 2000,
                                    strings: [
                                        "a Frontend Developer.",
                                        "an Electronic Engineer.",
                                    ],
                                }}
                            />
                        </ProfessionalTitle>
                    </div>
                    <SmoothLink name="View more about me" route="about" />
                </HeroWrapper>
            </WrapperFlex>
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "50%",
                    height: "100vh",
                    background: "#ddd",
                }}
            ></div>
        </Container>
    );
};

export default Hero;
