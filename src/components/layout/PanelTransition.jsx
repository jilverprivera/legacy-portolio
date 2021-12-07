// <--- STYLES --->
import { LeftPanel, RightPanel } from "./styles";

const Panels = () => {
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };
  return (
    <>
      <LeftPanel
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [window.innerHeight, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      />
      <RightPanel
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [window.innerHeight, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [0, 0, window.innerHeight],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      />
    </>
  );
};

export default Panels;
