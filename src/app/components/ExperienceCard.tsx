type Experience = {
  title: string;
  company: string;
  date: string;
  description: string[];
  skills: string[];
};

export const ExperienceCard = ({
  title,
  company,
  date,
  description,
  skills,
}: Experience) => {
  return (
    <div className="grid p-4 gap-2 border-s-8 border-2 rounded-2xl border-slate-950">
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
        <b>Skills: {skills.map((skill) => `${skill} · `)}</b>
      </p>
    </div>
  );
};
