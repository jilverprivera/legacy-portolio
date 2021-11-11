
import { GoBrowser, GoTerminal, GoDeviceMobile } from "react-icons/go";
import { FaTools } from "react-icons/fa";

export const SkillData = [
    {
        id: 1,
        title: "Frontend Development",
        background: "#ffd43c",
        icon: <GoBrowser />,
        skills: [
            {
                id: 1,
                name: "Styled Components",
            },
            {
                id: 2,
                name: "Sass",
            },
            {
                id: 3,
                name: "JavaScript",
            },
            {
                id: 4,
                name: "TypeScript",
            },
            {
                id: 5,
                name: "React.JS",
            },
            {
                id: 6,
                name: "Redux",
            },
            {
                id: 7,
                name: "Next.JS",
            },
            {
                id: 8,
                name: "Gatsby.JS",
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        background: "#67ce67",
        icon: <GoTerminal />,
        skills: [
            {
                id: 1,
                name: "Node.JS",
            },
            {
                id: 2,
                name: "Express.JS",
            },
            {
                id: 3,
                name: "MongoDB",
            },
            {
                id: 4,
                name: "Firebase",
            },
        ],
    },
    {
        id: 3,
        title: "Mobile Development",
        background: "#2FAACB",

        icon: <GoDeviceMobile />,
        skills: [
            {
                id: 1,
                name: "React Native CLI",
            },
        ],
    },
    {
        id: 4,
        title: "Testing & Tools",
        background: "#41BDAF",
        icon: <FaTools />,
        skills: [
            {
                id: 1,
                name: "Jest",
            },
            {
                id: 2,
                name: "React Testing Library",
            },
            {
                id: 3,
                name: "Strapi CMS",
            },
            {
                id: 4,
                name: "Figma",
            },
        ],
    },
];
