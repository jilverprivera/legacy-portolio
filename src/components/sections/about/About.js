import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { IntroductionWrapper } from "../../../styles/about.style";
import { Button } from "../../../styles/button.style";
import { Container, WrapperGrid } from "../../../styles/global.style";
import { Paragraph } from "../../../styles/typography";

import { Education } from "./education";
import { Experience } from "./experience";
import { Skills } from "./skills";

const About = () => {
    const {
        profile: { professionalView, setProfessionalView },
    } = useContext(AppContext);
    return (
        <Container id="about">
            <WrapperGrid>
                <IntroductionWrapper>
                    <Paragraph
                        lineHeight="25px"
                        margin="0rem  0rem 5rem 0rem"
                        large
                    >
                        Hey!, nice to meet you, I am a&nbsp;
                        <strong>Frontend Developer</strong>&nbsp;specialized in
                        the design of minimalist interfaces and innovative
                        products focused on user experience, however, over time
                        I have been exploring new paths such as Backend and
                        Mobile Development, I am also an&nbsp;
                        <strong>Electronics Engineer</strong>&nbsp;which allows
                        me to join my skills in electronics with the fascinating
                        world of the web.
                    </Paragraph>
                    <Button largeButton primary>
                        View my CV
                    </Button>
                </IntroductionWrapper>

                <div style={{ minHeight: "70vh" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            marginHorizontal
                            margin="0rem 1.5rem"
                            onClick={() => setProfessionalView("skills")}
                        >
                            Skills
                        </Button>
                        <Button
                            marginHorizontal
                            margin="0rem 1.5rem"
                            onClick={() => setProfessionalView("education")}
                        >
                            Education
                        </Button>
                        <Button
                            marginHorizontal
                            margin="0rem 1.5rem"
                            onClick={() => setProfessionalView("experience")}
                        >
                            Experience
                        </Button>
                    </div>

                    <AnimatePresence exitBeforeEnter>
                        {professionalView === "skills" ? (
                            <Skills  />
                        ) : professionalView === "education" ? (
                            <Education />
                        ) : (
                            professionalView === "experience" && <Experience />
                        )}
                    </AnimatePresence>
                </div>
            </WrapperGrid>
        </Container>
    );
};

export default About;
