import Image from "next/image";

export const BlogImage = (props) => {
  return <Image alt={props.alt} width={600} height={600} {...props} />;
};
