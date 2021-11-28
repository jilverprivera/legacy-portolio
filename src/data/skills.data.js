import { GoBrowser, GoTerminal, GoDeviceMobile } from "react-icons/go";
import { FaTools } from "react-icons/fa";

export const SkillData = [
    {
        id: 1,
        title: "Frontend Development",
        icon: <GoBrowser />,
        skills: [
            { name: "Sass" },
            { name: "Styled Components" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "React.JS" },
            { name: "Redux" },
            { name: "Next.JS" },
            { name: "Gatsby.JS" },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        icon: <GoTerminal />,
        skills: [
            { name: "Node.JS" },
            { name: "Express.JS" },
            { name: "MongoDB" },
            { name: "Firebase" },
        ],
    },
    {
        id: 3,
        title: "Mobile Development",
        icon: <GoDeviceMobile />,
        skills: [
            { name: "React Native" },
        ],
    },
    {
        id: 4,
        title: "Testing & Tools",
        icon: <FaTools />,
        skills: [
            { name: "Jest" },
            { name: "Figma" },
            { name: "Adobe Illustrator" },
        ],
    },
];
