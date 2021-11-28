import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useAnimate = (inView, x, y) => {
    const animation = useAnimation();
    useEffect(() => {
        inView
            ? animation.start({
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 1, type: "spring", stiffness: "linear" },
              })
            : animation.start({
                  opacity: 0,
                  x: x,
                  y: y,
                  transition: { duration: 1, type: "spring", stiffness: "linear" },
              });
    }, [inView]);

    return { animation };
};
