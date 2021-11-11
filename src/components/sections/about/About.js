import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { IntroductionWrapper } from "../../../styles/about.style";
import { Button } from "../../../styles/button.style";
import { Container, WrapperGrid } from "../../../styles/global.style";
import { Paragraph, Title } from "../../../styles/typography";

import { Education } from "./education";
import { Experience } from "./experience";
import Introduction from "./introduction";
import { Skills } from "./skills";

const About = () => {
    const {
        profile: { professionalView, setProfessionalView },
    } = useContext(AppContext);
    return (
        <Container id="about" >
            <WrapperGrid columnWidth="55.5rem">
                <Introduction />

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
                            <Skills />
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
