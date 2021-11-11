import React from "react";

import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiFillLinkedin,
    AiOutlineTwitter,
} from "react-icons/ai";
export const socialData = [
    {
        id: 1,
        name: "Github",
        icon: <AiOutlineGithub />,
        url: "https://github.com/jilverprivera",
        background: "#22262C",
    },
    {
        id: 2,
        name: "LinkedIn",
        icon: <AiFillLinkedin />,
        url: "https://www.linkedin.com/in/jilverprivera/",
        background: "#2662A9",
    },
    {
        id: 3,
        name: "Instagram",
        icon: <AiOutlineInstagram />,
        url: "https://www.instagram.com/jilverprivera/",
        background:
            "linear-gradient(45deg, rgba(0,34,150,1) 5%, rgba(130,0,143,1) 20%, rgba(192,0,122,1) 35%, rgba(234,12,95,1) 50%, rgba(255,83,65,1) 65%, rgba(255,136,32,1) 80%, rgba(246,186,0,1) 95%)",
    },
    {
        id: 4,
        name: "Twitter",
        icon: <AiOutlineTwitter />,
        url: "https://twitter.com/Jilverprivera",
        background: "#1C99E6",
    },
];
