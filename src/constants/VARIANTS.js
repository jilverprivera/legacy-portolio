export const LayoutVariants = {
  start: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const NavigationVariants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: "100vh",
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

export const NavigationWrapper = {
    initial: {
        opacity: 0,
        height: 0,
      },
      animate: {
        opacity: 1,
        height: "50vh",
        transition: { duration: 0.5, delay: 0.125},
      },
      exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.5 },
      },
}
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

export const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

export const parentVariants = {
  animate: {
    transition: { staggerChildren: 0.2, delayChildren: 1 },
  },
};
export const linkSlideUp = {
  initial: { y: 200 },
  animate: { y: 0, transition: { delay: 1.2 } },
};

export const MenuVariants = {
  initial: { visibility: "hidden", opacity: 0 },
  visible: { visibility: "visible", opacity: 1, transition: { delay: 1 } },
  exit: { visibility: "hidden", opacity: 0, transition: { delay: 1 } },
};
