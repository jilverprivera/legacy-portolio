// <--- STYLES --->
import { LeftPanel, RightPanel } from "./styles";

import { useWindow } from "../../hooks";

const Panels = () => {
  const { windowSize } = useWindow();
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
  return (
    <>
      <LeftPanel
        initial={{ height: 0 }}
        animate={{
          height: [0, 714, 0],
          top: [0, 0, 714],
        }}
        exit={{
          height: [0, 714, 0],
          top: [714, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      />
      <RightPanel
        initial={{ height: 0 }}
        animate={{
          height: [0, 714, 0],
          top: [714, 0, 0],
        }}
        exit={{
          height: [0, 714, 0],
          top: [0, 0, 714],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      />
    </>
  );
};

export default Panels;
