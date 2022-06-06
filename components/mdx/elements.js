import Image from "next/image";

import { SIZES } from "../../constants";

const Heading = (props) => {
  return <h1 style={{ fontSize: SIZES.extraLarge }}>{props.children}</h1>;
};

const Text = (props) => {
  return <p style={{ fontSize: SIZES.regular }}>{props.children}</p>;
};

const ImageComponent = (props) => {
  return (
    <Image
      alt={props.alt}
      width={600}
      height={600}
      layout="fixed"
      objectFit="contain"
      src={props.src}
    />
  );
};

export { Heading, Text, ImageComponent };
