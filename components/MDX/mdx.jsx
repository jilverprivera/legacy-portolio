import { SIZES } from "../../constants";
// import BlogHeader from "./blog/BlogHeader";
import { BlogImage } from "./image";

const Heading = (props) => {
  console.log(props);
  return <h1 style={{ fontSize: SIZES.extraLarge }}>props</h1>;
};

const Text = (props) => {
  return <p style={{ fontSize: SIZES.regular }}>{props.children}</p>;
};

export const MDXComponents = {
  img: BlogImage,
  h1: (props) => <Heading {...props} />,
  p: (props) => <Text {...props} />,
};
