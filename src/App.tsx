import { useCallback, useState } from "react";
import "./App.scss";
import AutoComplete from "./components/AutoComplete";
import { ALL_COUNTRIES_ENDPOINT } from "./constants";
import { debounce } from "./utils";

const filterDataAsync = async (data, searchText: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const filteredCountries = data.filter(
          (country: { name: { common: string } }) =>
            country.name.common
              .toLowerCase()
              .startsWith(searchText.toLowerCase())
        );

        const final = filteredCountries.map(
          (country: { name: { common: string } }) => country.name.common
        );

        resolve(final);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async (searchText: string) => {
    try {
      setLoading(true);
      const response = await fetch(ALL_COUNTRIES_ENDPOINT);
      const data = await response.json();
      const filteredData = await filterDataAsync(data, searchText);

      setSearchResults(filteredData);
    } catch (e: unknown) {
      console.error(e.message); // TODO
    } finally {
      setLoading(false);
    }
  };

  // useCallBack memoizes/caches this function here, else after the delay multiple APIs were getting called
  const debouncedGetData = useCallback(
    debounce((searchText: string) => getData(searchText), 300),
    []
  );

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();

    setSearchText(trimmedValue);

    if (trimmedValue !== "") {
      debouncedGetData(trimmedValue);
    } else {
      setSearchResults(null);
    }
  };

  const handleSearchInputBlur = () => {
    setSearchResults(null);
  };

  const handleSearchInputFocus = () => {
    if (searchText.trim().length > 0) {
      getData(searchText);
    }
  };

  return (
    <AutoComplete
      onSearchInputChange={handleSearchInputChange}
      onSearchInputBlur={handleSearchInputBlur}
      onSearchInputFocus={handleSearchInputFocus}
      results={searchResults}
      searchText={searchText}
      isLoading={loading}
    />
  );
}

export default App;
