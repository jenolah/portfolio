import type { ReactElement } from "react";

type Props = {
  header: string;
  title?: string;
  date?: string;
  description?: string;
  list?: string[];
};

export const Card = ({ header, title, date, description, list }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="title">
        <b>{header}</b>
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
      {list && (
        <ul className="px-4">
          {list.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
