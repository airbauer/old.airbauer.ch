import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background! I'm a Student, so there is not rly some things to tell xD :§</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Mentalschool",
    desc: "Grundschule XX XXXXXX | 2014 ~ 2018",
  },
  {
    title: "Middle/Highschool",
    desc: "XXX XXXXXXXX | 2018 - 2024",
  },
  {
    title: "BBS/Job school",
    desc: "XXXXXXXXXXXX | 2024 - XXXX",
  },
];

export default Education;
