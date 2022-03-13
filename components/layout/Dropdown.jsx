import styled from "styled-components";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SIZES } from "../../constants";

const data = [
  {
    icon: <AiFillLinkedin />,
    title: "LinkedIn",
    route: "https://www.linkedin.com/in/jilverprivera/",
    color: "#0A66C2",
  },
  {
    icon: <AiOutlineGithub />,
    title: "Github",
    route: "https://github.com/jilverprivera",
  },
  {
    icon: <AiOutlineInstagram />,
    title: "Instagram",
    route: "https://www.instagram.com/jilverprivera/",
  },
  {
    icon: <AiOutlineTwitter />,
    title: "Twitter",
    route: "https://twitter.com/Jilverprivera",
  },
];

const Dropdown = ({ setOpenNavigation }) => {
  return (
    <Container
      onMouseEnter={() => setOpenNavigation(true)}
      onMouseLeave={() => setOpenNavigation(false)}
    >
      <List>
        {data.map((item) => (
          <li key={item.title}>
            <Link href={item.route} target="_blank" rel="noreferrer">
              <Icon color={item.color}>{item.icon}</Icon>
              <NetworkName>{item.title}</NetworkName>
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: absolute;
  top: 7rem;
  // padding-top: 7rem;
  right: 7rem;
  width: 20rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  list-style: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  // border: 1px solid rgba(0, 0, 0, 1);
`;

const Icon = styled.span`
  font-size: ${SIZES.large};
  margin-right: 1rem;
  color: ${({ color, theme }) => (color ? color : theme.black)};
`;
const NetworkName = styled.span`
  font-size: ${SIZES.regular};
`;
