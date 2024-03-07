import { ChangeEventHandler, FocusEventHandler } from "react";
import SearchInput from "../SearchInput";
import SearchSuggestions from "../SearchSuggestions";

interface AutoCompleteProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onFocus: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  suggestions: string[];
  searchText: string;
  isLoading: boolean;
  onSuggestionClicked: (value: string) => void;
  hideSuggestions: boolean;
}

const AutoComplete = ({
  onBlur,
  onChange,
  onFocus,
  placeholder,
  suggestions,
  searchText,
  isLoading,
  onSuggestionClicked,
  hideSuggestions,
}: AutoCompleteProps) => {
  const handleSuggestionClicked = (value: string) => onSuggestionClicked(value);

  /* 
  memoization hooks from ReactJS can be used to prevent the child components from re-rendering, 
  but since React suggests to use them only when really needed because generally it handles re-renders well and 
  optimizations should be done when there is a need, didn't use them here at the the moment, could be potential improvements
  */
  return (
    <>
      <SearchInput
        value={searchText}
        onSearchInputChange={onChange}
        onSearchInputBlur={onBlur}
        onSearchInputFocus={onFocus}
        placeholder={placeholder}
      />
      <SearchSuggestions
        data={suggestions}
        searchText={searchText}
        isLoading={isLoading}
        onSuggestionClicked={handleSuggestionClicked}
        hideSuggestions={hideSuggestions}
      />
    </>
  );
};

export default AutoComplete;
