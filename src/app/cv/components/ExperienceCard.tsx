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
        className="grid py-2 gap-2 border-b-2 border-violet-300 last:border-b-0"
        key={i}
      >
        <h3>
          <b>{title}</b> ({company})
        </h3>
        <p>
          <i>{date}</i>
        </p>
        <div>{description.map((description) => description)}</div>
        <div className="py-2">
          <ul className="flex flex-wrap list-none font-bold gap-2">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="text-center border-2 p-1 rounded border-l-violet-100 border-t-violet-100 border-b-violet-300 border-r-violet-300 bg-violet-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
  return (
    <div className="">
      <h2 className="title">
        <b>Experience</b>
        <img src="/briefcase.svg" />
      </h2>
      {allExperiences}
    </div>
  );
};
