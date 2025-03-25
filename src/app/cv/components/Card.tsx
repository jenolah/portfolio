import type { ReactElement } from "react";

type Props = {
  header: string;
  headerIconPath?: string;
  title?: string;
  date?: string;
  description?: string;
  list?: string[];
  children?: ReactElement;
};

export const Card = ({
  header,
  headerIconPath,
  title,
  date,
  description,
  list,
  children,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="title">
        <b>{header}</b>
        {headerIconPath && <img src={headerIconPath} />}
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
        <ul className="px-4 list-outside">
          {list.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};
