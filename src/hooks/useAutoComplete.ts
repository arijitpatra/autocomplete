import { ChangeEvent, useCallback, useState } from "react";
import { ALL_COUNTRIES_ENDPOINT } from "./../constants";
import { debounce, filterDataAsync } from "./../utils";

export const useAutoComplete = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hideSuggestions, setHideSuggestions] = useState(false);

  const getSuggestions = async (searchText: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(ALL_COUNTRIES_ENDPOINT);
      const data: Data[] = await response.json();
      const filteredData = await filterDataAsync(data, searchText);

      setSuggestions(filteredData);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message); // TODO: move to an alert component
      } else {
        console.error("Unknown error!"); // TODO: move to an alert component
      }
    } finally {
      setIsLoading(false);
    }
  };

  // useCallBack memoizes/caches this function here, to prevent creating different instances during re-render
  const debouncedGetData = useCallback(
    debounce((searchText: string) => getSuggestions(searchText), 300),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const trimmedValue = value.trim();

    setSearchText(value);

    if (trimmedValue !== "") {
      debouncedGetData(trimmedValue);
    } else {
      setSuggestions([]);
    }
  };

  const handleBlur = () => {
    setHideSuggestions(true);
  };

  const handleFocus = () => {
    setHideSuggestions(false);
    if (searchText.trim().length > 0) {
      getSuggestions(searchText);
    }
  };

  const handleSuggestionClicked = (value: string) => {
    setSearchText(value);
    setSuggestions([]);
  };

  return {
    handleChange,
    handleBlur,
    handleFocus,
    suggestions,
    searchText,
    isLoading,
    handleSuggestionClicked,
    hideSuggestions,
  };
};
