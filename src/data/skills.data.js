import StyledComponents from "../../src/images/logos/styled-components.svg";
import Sass from "../../src/images/logos/sass-1.svg";
import JavaScript from "../../src/images/logos/logo-javascript.svg";
import TypeScript from "../../src/images/logos/typescript.svg";
import ReactJS from "../../src/images/logos/react.svg";
import Redux from "../../src/images/logos/redux.svg";
import NextJS from "../../src/images/logos/next-js.svg";
import GatsbyJS from "../../src/images/logos/gatsby.svg";

import NodeJS from "../../src/images/logos/nodejs.svg";
import ExpressJS from "../../src/images/logos/express.svg";
import MongoDB from "../../src/images/logos/mongodb.svg";
import Firebase from "../../src/images/logos/firebase-1.svg";

import ReactNative from "../../src/images/logos/react-native-1.svg";

import Jest from "../../src/images/logos/jest-0.svg";
import Strapi from "../../src/images/logos/strapi-2.svg";
import Figma from "../../src/images/logos/figma-1.svg";

import { GoBrowser, GoTerminal, GoDeviceMobile } from "react-icons/go";
import { FaTools } from "react-icons/fa";

export const SkillData = [
    {
        id: 1,
        name: "Frontend Development",
        icon: <GoBrowser />,
        skills: [
            {
                id: 1,
                tag: "Styled Components",
                icon: (
                    <StyledComponents
                        style={{ width: "25px", height: "25px" }}
                    />
                ),
            },
            {
                id: 2,
                tag: "Sass",
                icon: <Sass style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 3,
                tag: "JavaScript",
                icon: <JavaScript style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 4,
                tag: "TypeScript",
                icon: <TypeScript style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 5,
                tag: "React.JS",
                icon: <ReactJS style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 6,
                tag: "Redux",
                icon: <Redux style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 7,
                tag: "Next.JS",
                icon: <NextJS style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 8,
                tag: "Gatsby.JS",
                icon: <GatsbyJS style={{ width: "25px", height: "25px" }} />,
            },
        ],
    },
    {
        id: 2,
        name: "Backend Development",
        icon: <GoTerminal />,
        skills: [
            {
                id: 1,
                tag: "Node.JS",
                icon: <NodeJS style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 2,
                tag: "Express.JS",
                icon: <ExpressJS style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 3,
                tag: "MongoDB",
                icon: <MongoDB style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 4,
                tag: "Firebase",
                icon: <Firebase style={{ width: "25px", height: "25px" }} />,
            },
        ],
    },
    {
        id: 3,
        name: "Mobile Development",
        icon: <GoDeviceMobile />,
        skills: [
            {
                id: 1,
                tag: "React Native CLI",
                icon: <ReactNative style={{ width: "25px", height: "25px" }} />,
            },
        ],
    },
    {
        id: 4,
        name: "Tools",
        icon: <FaTools />,
        skills: [
            {
                id: 1,
                tag: "Jest",
                icon: <Jest style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 2,
                tag: "Strapi CMS",
                icon: <Strapi style={{ width: "25px", height: "25px" }} />,
            },
            {
                id: 3,
                tag: "Figma",
                icon: <Figma style={{ width: "25px", height: "25px" }} />,
            },
        ],
    },
];
