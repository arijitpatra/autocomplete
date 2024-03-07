import List from "../List";
import Loader from "../Loader";
import NoResults from "../NoResults";
import styles from "./SearchSuggestions.module.scss";

interface SearchSuggestionsProps {
  data: string[];
  searchText: string;
  isLoading: boolean;
  onSuggestionClicked: (value: string) => void;
  hideSuggestions: boolean;
}

const SearchSuggestions = ({
  data,
  searchText,
  isLoading,
  onSuggestionClicked,
  hideSuggestions,
}: SearchSuggestionsProps) => {
  const handleListItemClick = (value: string) => {
    onSuggestionClicked(value);
  };

  if (searchText.length === 0 || hideSuggestions) {
    return null;
  }

  return (
    <ul className={`${styles.searchResultPanel}`}>
      {data.length === 0 && !isLoading ? <NoResults /> : null}

      {data.map((item: string) => {
        return (
          <List
            key={item}
            data={item}
            matchingSubstring={searchText}
            onItemClick={handleListItemClick}
          />
        );
      })}

      {isLoading ? <Loader /> : null}
    </ul>
  );
};

export default SearchSuggestions;
