import styled from "styled-components";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Dropdown = () => {
  return (
    <Container>
      <ul>
        <li>
          <a>
            <span>
              <AiFillLinkedin />
            </span>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a>
            <span>
              <AiOutlineGithub />
            </span>

            <span>Github</span>
          </a>
        </li>
        <li>
          <span>
            <AiOutlineInstagram />
          </span>

          <span>Instagram</span>
        </li>
        <li>
          <span>
            <AiOutlineTwitter />
          </span>

          <span>Twitter</span>
        </li>
      </ul>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: absolute;
  top: 7rem;
  right: 7rem;
  width: 20rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
