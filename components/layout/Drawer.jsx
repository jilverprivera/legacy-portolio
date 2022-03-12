import { useContext } from "react";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";

import { AppContext } from "../../context";

import {
  DrawerBottomMessage,
  DrawerContainer,
  DrawerIcon,
  DrawerMessage,
  DrawerTitle,
  LinkText,
} from "./styles";

const Drawer = () => {
  const { setOpenDrawer } = useContext(AppContext);
  return (
    <DrawerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.5 } }}
      transition={{ duration: 1 }}
    >
      <DrawerTitle>Menu</DrawerTitle>
      <Link href={`/`} passHref>
        <LinkText onClick={() => setOpenDrawer(false)}>Home</LinkText>
      </Link>
      <Link href={`/about`} passHref>
        <LinkText onClick={() => setOpenDrawer(false)}>About</LinkText>
      </Link>
      <Link href={`/blog`} passHref>
        <LinkText onClick={() => setOpenDrawer(false)}>Blog</LinkText>
      </Link>
      <Link href={`/contact`} passHref>
        <LinkText onClick={() => setOpenDrawer(false)}>Contact</LinkText>
      </Link>
      <DrawerBottomMessage>
        <DrawerMessage>Made with</DrawerMessage>
        <DrawerIcon>
          <BsHeart />
        </DrawerIcon>
        <DrawerMessage>by @Jilverprivera</DrawerMessage>
      </DrawerBottomMessage>
    </DrawerContainer>
  );
};

export default Drawer;
