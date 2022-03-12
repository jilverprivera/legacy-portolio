import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const ScrollIndicator = ({topLink}) => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <PathWrapper>
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="black"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1, // Reverse direction of line animation
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="black"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </PathWrapper>
  );
};


const PathWrapper = styled.svg`
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  width: 5rem;
  height: 5rem;
  display: flex;

  align-items: center;
  justify-content: center;
  z-index: 2000;
`;
