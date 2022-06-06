import Link from "next/link";

import EDUCATION from "../data/education.json";
import { variants } from "../helpers/variants";

import {
  CardTitle,
  Content,
  EducationAcademy,
  EducationCard,
  EducationDate,
  EducationLink,
  EducationLocation,
  EducationWrapper,
} from "../styles/about";

const Education = () => {
  return (
    <Content variants={variants} initial="hidden" animate="show" exit="exit">
      {EDUCATION.map((item, index) => (
        <EducationCard
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 * index }}
        >
          <EducationWrapper>
            <CardTitle>{item.title}</CardTitle>
            <EducationAcademy>
              {item.academy}, {item.location}
            </EducationAcademy>
            <EducationDate>{item.date}</EducationDate>
            {/* <EducationLocation>}</EducationLocation> */}
          </EducationWrapper>
          <Link href={item.url} passHref>
            <EducationLink>View certficate</EducationLink>
          </Link>
        </EducationCard>
      ))}
    </Content>
  );
};

export default Education;
