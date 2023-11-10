type Props = {
  school: string;
  date: string;
  aLevels: string[];
};

export const EducationCard = ({ school, date, aLevels }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="title">
        <b> Education &#127891;</b>
      </h2>
      <div className="px-4 gap-2">
        <h3>
          <b>{school}</b>
        </h3>
        <p>
          <i>{date}</i>
        </p>
        <p>A Levels:</p>
        <ul>
          {aLevels.map((aLevel, i) => (
            <li key={i}>{aLevel}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
