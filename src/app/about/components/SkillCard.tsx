type Props = {
  skillType: string;
  skills: string[];
};

export const SkillCard = ({ skillType, skills }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl my-2">{skillType}</h3>
      <ul className="p-4 border-s-8 border-2 border-slate-950 rounded-xl">
        {skills.map((skills, i) => (
          <li key={i}>{skills}</li>
        ))}
      </ul>
    </div>
  );
};
