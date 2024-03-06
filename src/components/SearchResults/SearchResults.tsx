/* eslint-disable @typescript-eslint/no-explicit-any */
import List from "../List";
import styles from "./SearchResults.module.scss";

interface SearchResultsProps {
  data: any;
  searchText: string;
  isLoading: boolean;
}

const SearchResults = ({ data, searchText, isLoading }: SearchResultsProps) => {
  if (isLoading) {
    return (
      <ul className={`${styles.searchResultPanel}`}>
        <li>
          <i className={`${styles.noResults}`}>⌛ Loading... </i>
        </li>
      </ul>
    );
  }

  if (data?.length < 0 || data === null) {
    return null;
  }

  return (
    <ul className={`${styles.searchResultPanel}`}>
      {isLoading ? (
        <li>
          <i className={`${styles.noResults}`}>⌛ Loading... </i>
        </li>
      ) : null}

      {data.length === 0 && !isLoading ? (
        <li>
          <i className={`${styles.noResults}`}>🕵 No results found! </i>
        </li>
      ) : null}

      {data.map((country: string) => {
        return (
          <List
            key={country}
            data={country}
            matchingSubstring={searchText}
          ></List>
        );
      })}
    </ul>
  );
};

export default SearchResults;
