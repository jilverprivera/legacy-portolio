export const LayoutVariants = {
    start: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0 },
    transition: { duration: 0.5 },
};

export const ContentVariants = {
    start: { height: "0rem" },
    visible: { height: "15rem" },
    hidden: { height: "0rem" },
    transition: { duration: 0.5 },
};

export const ConfigurationVariants = {
    start: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "10rem" },
    hidden: { opacity: 0, height: 0 },
    transition: { duration: 0.5 },
};
