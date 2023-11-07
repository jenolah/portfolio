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
      <div
        className="grid p-4 gap-2 border-s-8 border-2 rounded-2xl border-slate-950"
        key={i}
      >
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
    <>
      <h2 className="text-2xl my-2">&#128187; Experience</h2>
      {allExperiences}
    </>
  );
};
