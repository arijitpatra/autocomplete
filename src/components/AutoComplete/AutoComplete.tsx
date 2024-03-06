import { ChangeEventHandler, FocusEventHandler } from "react";
import SearchInput from "../SearchInput";
import SearchResults from "../SearchResults";

interface AutoCompleteProps {
  onSearchInputChange: ChangeEventHandler<HTMLInputElement>;
  onSearchInputBlur: FocusEventHandler<HTMLInputElement>;
  onSearchInputFocus: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any;
  searchText: string;
  isLoading: boolean;
}

const AutoComplete = ({
  onSearchInputBlur,
  onSearchInputChange,
  onSearchInputFocus,
  placeholder,
  results,
  searchText,
  isLoading,
}: AutoCompleteProps) => {
  return (
    <>
      <SearchInput
        value={searchText}
        onSearchInputChange={onSearchInputChange}
        onSearchInputBlur={onSearchInputBlur}
        onSearchInputFocus={onSearchInputFocus}
        placeholder={placeholder}
      />
      <SearchResults
        data={results}
        searchText={searchText}
        isLoading={isLoading}
      />
    </>
  );
};

export default AutoComplete;
