import styles from "./List.module.scss";

interface ListProps {
  data: string;
  matchingSubstring: string;
}

const List = ({ data, matchingSubstring }: ListProps) => {
  return (
    <li className={`${styles.listItem}`}>
      <b>
        {matchingSubstring.charAt(0).toUpperCase() + matchingSubstring.slice(1)}
      </b>
      {data.slice(matchingSubstring.length)}
    </li>
  );
};

export default List;
