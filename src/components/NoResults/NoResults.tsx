import styles from "./NoResults.module.scss";

const NoResults = () => {
  return (
    <li>
      <i className={`${styles.noResults}`}>🕵 No results found!</i>
    </li>
  );
};

export default NoResults;
