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
      <div className="grid py-4 gap-2" key={i}>
        <h3>
          <b>{title}</b> ({company})
        </h3>
        <p>
          <i>{date}</i>
        </p>
        <div>{description.map((description) => description)}</div>
        <p className="py-3">
          <b>{skills.map((skill, i) => `${i !== 0 ? "·" : ""} ${skill} `)}</b>
        </p>
      </div>
    )
  );
  return (
    <div className="divide-y divide-y-reverse divide-green-700">
      <h2 className="title">
        <b>Experience &#128187;</b>
      </h2>
      {allExperiences}
    </div>
  );
};
