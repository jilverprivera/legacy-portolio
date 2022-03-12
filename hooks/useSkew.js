import { useEffect, useRef } from "react";
import { useWindow } from "./useWindow";

const data = {
  ease: 0.1,
  current: 0,
  previous: 0,
  rounded: 0,
};

export const useSkew = () => {
  const scrollContainer = useRef();

  const { windowSize } = useWindow();

  useEffect(() => {
    requestAnimationFrame(() => {
      data.current = window.scrollY;
      data.previous += (data.current - data.previous) * data.ease;
      data.rounded = Math.round(data.previous * 100) / 100;

      const difference = data.current - data.rounded;
      const acceleration = difference / windowSize.width;
      const velocity = +acceleration;
      const skew = velocity * 10.5;

      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    });
  }, [windowSize]);

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // const skewScrolling = () => {
  //   data.current = window.scrollY;
  //   data.previous += (data.current - data.previous) * data.ease;
  //   data.rounded = Math.round(data.previous * 100) / 100;

  //   const difference = data.current - data.rounded;
  //   const acceleration = difference / windowSize.width;
  //   const velocity = +acceleration;
  //   const skew = velocity * 10.5;

  //   scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

  //   requestAnimationFrame(() => skewScrolling());
  // };

  return { skewScrolling, scrollContainer };
};
