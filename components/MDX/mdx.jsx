import { SIZES } from "../../constants";
// import BlogHeader from "./blog/BlogHeader";
import { BlogImage } from "./image";
import Image from "next/image";

const Heading = (props) => {
  // console.log(props);
  return <h1 style={{ fontSize: SIZES.extraLarge }}>{props.children}</h1>;
};

const Text = (props) => {
  return <p style={{ fontSize: SIZES.regular }}>{props.children}</p>;
};

const ImageComponent = (props) => {
  console.log(props);
  return <Image alt={props.alt} width={600} height={600} src={props.src} />;
};
export const MDXComponents = {
  // img: BlogImage,
  h1: (props) => <Heading {...props} />,
  p: (props) => <Text {...props} />,
  image: (props) => <Text {...props} />,
};
