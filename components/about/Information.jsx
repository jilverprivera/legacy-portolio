import Link from "next/link";

import { GlobalAppWrapper } from "../../styles";
import { PersonalDescription, Title } from "./styles";

const Information = () => {
  return (
    <GlobalAppWrapper id="information">
      <Title>A few words about me</Title>
      <PersonalDescription>
        I&apos;m Jilver Pacheco, a Software Developer specialized in building
        awesome websites focused on the user experience, also Electronic
        Engineer based in Bucaramanga, CO.
      </PersonalDescription>
      {/* <Link passHref > */}
      <a href={`/resume_en.pdf`} download>
        Download my CV
      </a>
      {/* </Link> */}
    </GlobalAppWrapper>
  );
};

export default Information;
