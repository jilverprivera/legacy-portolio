import { Heading, Text, ImageComponent } from "./elements";

export const MDXComponents = {
  // img: BlogImage,
  h1: (props) => <Heading {...props} />,
  p: (props) => <Text {...props} />,
  img: (props) => <ImageComponent {...props} />,
};
