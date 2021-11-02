import { Link } from "react-scroll";
import styled from "styled-components";

// <----------------------------- HEADER ----------------------------->
export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    max-width: 100vw;
    width: 100%;
    transition: background-color 1s;

    .bg {
        background-color: transparent;
        width: 100%;
        height: 100%;
        height: 70px;
        transition: 0.5s;
        color: #000;
    }
    .bg-active {
        width: 100%;
        height: 100%;
        transition: 0.5s;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.3);
    }
`;

export const HeaderContent = styled.nav`
    width: 95%;
    max-width: 1300px;
    height: 100%;

    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const NavListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    margin: 0px 15px;
    padding-bottom: 5px;
    color: ${(props) => props.theme.text};
    &:hover {
        cursor: pointer;
    }
`;

export const ThemeSwitch = styled.div`
    position: relative;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    align-items: center;

    .toggler {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: #000;
        transition: all 0.4s;
    }
    .toggler-active {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.text};
        transform: translateX(20px);
        transition: all 0.4s;
    }
`;

// <----------------------------- MAIN ----------------------------->

// <----------------------------- FOOTER ----------------------------->
