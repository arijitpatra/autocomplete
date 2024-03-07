import "./App.scss";
import AutoComplete from "./components/AutoComplete";
import { useAutoComplete } from "./hooks/useAutoComplete";

function App() {
  const {
    handleChange,
    handleBlur,
    handleFocus,
    suggestions,
    searchText,
    isLoading,
    handleSuggestionClicked,
    hideSuggestions,
  } = useAutoComplete();

  return (
    <AutoComplete
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      suggestions={suggestions}
      searchText={searchText}
      isLoading={isLoading}
      onSuggestionClicked={handleSuggestionClicked}
      hideSuggestions={hideSuggestions}
    />
  );
}

export default App;
