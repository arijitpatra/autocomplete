import styles from "./List.module.scss";

interface ListProps {
  data: string;
  matchingSubstring: string;
  onItemClick: (value: string) => void;
}

const List = ({ data, matchingSubstring, onItemClick }: ListProps) => {
  const handleClick = () => {
    onItemClick(data);
  };

  const getJsx = () => {
    if (
      data.slice(0, matchingSubstring.length).toLowerCase() ===
      matchingSubstring.toLowerCase()
    ) {
      // if suggestions matches search text, highlight matching portion in the suggestions
      return (
        <>
          <b>{data.slice(0, matchingSubstring.length)}</b>
          {data.slice(matchingSubstring.length)}
        </>
      );
    }

    return data;
  };

  return (
    <li className={`${styles.listItem}`} onMouseDown={handleClick}>
      {getJsx()}
    </li>
  );
};

export default List;
