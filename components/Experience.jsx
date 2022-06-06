import EXPERIENCE from "../data/experience.json";
import { variants } from "../helpers/variants";
import {
  Card,
  CardTitle,
  CompanyLink,
  Content,
  ExperienceDate,
  Description,
} from "../styles/about";

const Experience = () => {
  return (
    <Content variants={variants} initial="hidden" animate="show" exit="exit">
      {EXPERIENCE.map((item, index) => (
        <Card
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 * index }}
        >
          <CardTitle>
            {item.role} |&nbsp;
            <CompanyLink href={item.url}>@{item.company}</CompanyLink>
          </CardTitle>
          <ExperienceDate>{item.date}</ExperienceDate>
          <div>
            {item.activities.map((activity, index) => (
              <Description key={index}>{activity}</Description>
            ))}
          </div>
        </Card>
      ))}
    </Content>
  );
};

export default Experience;
