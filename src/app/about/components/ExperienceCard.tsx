import type { ReactElement } from "react";

export type Experience = {
  title: string;
  company: string;
  date: string;
  description: ReactElement[];
  skills: string[];
};
type Props = {
  experiences: Experience[];
};

export const ExperienceCard = ({ experiences }: Props) => {
  const allExperiences = experiences.map(
    ({ title, company, date, description, skills }, i) => (
      <div className="grid p-4 gap-2" key={i}>
        <h3>
          <b>{title}</b> ({company})
        </h3>
        <p>
          <i>{date}</i>
        </p>
        <div>
          {description.map((description) => (
            <p>{description}</p>
          ))}
        </div>
        <p>
          <b>Skills: {skills.map((skill) => ` · ${skill}`)}</b>
        </p>
      </div>
    )
  );
  return (
    <div className="bg-white p-7">
      <h2 className="title">
        <b>Experience &#128187;</b>
      </h2>
      {allExperiences}
    </div>
  );
};
