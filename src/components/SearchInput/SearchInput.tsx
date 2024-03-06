import { ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  onSearchInputChange: ChangeEventHandler<HTMLInputElement>;
  onSearchInputBlur: FocusEventHandler<HTMLInputElement>;
  onSearchInputFocus: FocusEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onSearchInputChange,
  onSearchInputBlur,
  onSearchInputFocus,
  placeholder = "Start typing a country name...",
}: SearchInputProps) => {
  return (
    <div className={`${styles.wrapper}`}>
      🔍
      <input
        className={`${styles.searchInput}`}
        type="text"
        value={value}
        onChange={onSearchInputChange}
        onBlur={onSearchInputBlur}
        onFocus={onSearchInputFocus}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
