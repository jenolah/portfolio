type Props = {
  school: string;
  date: string;
  aLevels: string[];
};

export const EducationCard = ({ school, date, aLevels }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-4xl my-2">&#128188; Education</h3>
      <div className="p-4 gap-2 border-s-8 border-2 border-slate-950 rounded-2xl">
        <h3>
          <b>{school}</b>
        </h3>
        <p>
          <i>{date}</i>
        </p>
        A Levels:
        <ul>
          {aLevels.map((aLevel) => (
            <li>{aLevel}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
