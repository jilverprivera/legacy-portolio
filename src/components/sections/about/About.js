import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { IntroductionWrapper, TabButton, TabItemContent } from "./about.style";
import { Button } from "../../../styles/button.style";
import { Container, WrapperGrid } from "../../../styles/global.style";
import { Paragraph, Title } from "../../../styles/typography";

import { Education } from "./education";
import { Experience } from "./experience";
import Introduction from "./introduction";
import { Skills } from "./skills";
import { TimeLine } from "./timeline";

const About = () => {
    const [index, setIndex] = useState(0);
    const buttons = [
        { name: "Skills", id: "skills" },
        { name: "Education", id: "education" },
        { name: "Experience", id: "experience" },
    ];
    const {
        profile: { professionalView, setProfessionalView },
    } = useContext(AppContext);

    const handleChangeProfessional = (id, i) => {
        setProfessionalView(id);
        setIndex(i);
    };

    console.log(index);
    return (
        <Container id="about">
            <WrapperGrid columnWidth="55.5rem">
                <Introduction />

                <div style={{ minHeight: "70vh" }}>
                    <TabItemContent>
                        {buttons.map((button, i) => (
                            <TabButton
                                key={button.id}
                                onClick={() =>
                                    handleChangeProfessional(button.id, i)
                                }
                                activeWidth={i === index ? "100%" : "0%"}
                            >
                                {button.name}
                            </TabButton>
                        ))}
                    </TabItemContent>

                    <AnimatePresence exitBeforeEnter>
                        {professionalView === "skills" ? (
                            <Skills />
                        ) : professionalView === "education" ? (
                            <TimeLine />
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
