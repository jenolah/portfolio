type Props = {
  skillType: string;
  skills: string[];
};

export const SkillCard = ({ skillType, skills }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="title">
        <b>{skillType}</b>
      </h2>
      <ul className="px-4">
        {skills.map((skills, i) => (
          <li key={i}>{skills}</li>
        ))}
      </ul>
    </div>
  );
};
