import React, { useCallback, useMemo, useEffect } from "react";
import search_icon from "../../../../assets/images/search_icon.svg";
import styles from "./SearchBar.module.css";
import debounce from "lodash.debounce";

const SearchBar = ({ searchStockAction, portfolioId, setSearchKeyAction }) => {
  const handleChange = useCallback(
    (e) => {
      searchStockAction(e.target.value, portfolioId);
      setSearchKeyAction(e.target.value);
    },
    [searchStockAction, portfolioId, setSearchKeyAction]
  );

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
  }, [handleChange]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className={styles.searchBarContainer}>
      <img className={styles.searchIcon} src={search_icon} alt="search icon" />
      <input
        className={styles.searchBarTextBox}
        type="text"
        placeholder="Search.."
        onChange={debouncedResults}
      />
    </div>
  );
};

export default SearchBar;
