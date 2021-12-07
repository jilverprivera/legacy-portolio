import { useTranslation } from "react-i18next";
import { FaReact, FaUniversity } from "react-icons/fa";

// <--- COMPONENTS --->
import TimelineCard from "./timelineCard";

// <--- STYLES --->
import { Line, TimeLineContainer, TimeLineIcon } from "./styles";

export const TimeLine = () => {
    const [t] = useTranslation("about");
    return (
        <>
            {t("education-experience.education.data", { returnObjects: true }).map((item, index) => (
                <TimeLineContainer key={item.title}>
                    <Line />
                    <TimelineCard index={index} {...item} />
                    <TimeLineIcon background={item.background}>
                        {item.icon === "react" && <FaReact />}
                        {item.icon === "university" && <FaUniversity />}
                    </TimeLineIcon>
                </TimeLineContainer>
            ))}
        </>
    );
};
