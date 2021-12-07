import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

// <--- STYLES --->
import { Subtitle, SubTitleContainer } from "./styles";

const Professions = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <SubTitleContainer>
            <Subtitle>
                {i18n.language === "en" ? (
                    <Typewriter
                        options={{
                            loop: true,
                            autoStart: true,
                            delay: 50,
                            pauseFor: 2000,
                            strings: [
                                "A Frontend Developer.",
                                "An Electronic Engineer.",
                            ],
                        }}
                    />
                ) : (
                    <Typewriter
                        options={{
                            loop: true,
                            autoStart: true,
                            delay: 50,
                            pauseFor: 2000,
                            strings: [
                                "Un Desarrollador Frontend.",
                                "Un Ingeniero Electrónico.",
                            ],
                        }}
                    />
                )}
            </Subtitle>
        </SubTitleContainer>
    );
};

export default Professions;
