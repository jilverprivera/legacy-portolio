import React, { useState } from "react";
import {
  DropdownContent,
  DropdownIcon,
  DropdownIconText,
  DropdownItem,
  DropdownText,
  DropdownWrapper,
} from "../../styles/layout";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { networks } from "../../helpers/networks";

const variants = {
  hidden: { opacity: 0, y: -20, x: "-30%" },
  show: {
    opacity: 1,
    opacity: 1,
    x: "-30%",
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: -10 },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

export const Dropdown = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <DropdownContent onClick={() => setIsPressed(!isPressed)}>
        <DropdownText>Connect</DropdownText>
        <DropdownIconText isPress={isPressed}>
          <IoIosArrowDown />
        </DropdownIconText>
        <AnimatePresence exitBeforeEnter>
          {isPressed && (
            <DropdownWrapper
              variants={variants}
              initial="hidden"
              animate="show"
              exit="exit"
              //   transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              {networks.map((_, index) => (
                <DropdownItem
                  key={index}
                  href={_.url}
                  target="_blank"
                  variants={item}
                >
                  <DropdownIcon bgColor={_.bgColor} iconColor={_.color}>
                    {_.icon}
                  </DropdownIcon>
                  <span>{_.name}</span>
                </DropdownItem>
              ))}
            </DropdownWrapper>
          )}
        </AnimatePresence>
      </DropdownContent>
    </>
  );
};
