type Props = {
  skillType: string;
  title?: string;
  date?: string;
  description?: string;
  skills?: string[];
};

export const SkillCard = ({
  skillType,
  title,
  date,
  description,
  skills,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="title">
        <b>{skillType}</b>
      </h2>
      {title && (
        <h3>
          <b>{title}</b>
        </h3>
      )}
      {date && (
        <p>
          <i>{date}</i>
        </p>
      )}
      {description && <p>{description}</p>}
      {skills && (
        <ul className="px-4">
          {skills.map((skills, i) => (
            <li key={i}>{skills}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
