import React, { useCallback, useMemo, useEffect } from "react";
import search_icon from "../../../../assets/images/search_icon.svg";
import styles from "./SearchBar.module.css";
import debounce from "lodash.debounce";

const SearchBar = ({
  checkUserTokenAction,
  searchStockAction,
  portfolioId,
  searchKey,
}) => {
  const handleChange = useCallback(
    (e) => {
      if (e.target.value !== "") {
        searchStockAction(e.target.value, portfolioId);
      }
    },
    [searchStockAction]
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
      {/* //set the icon in the search text */}
      {/* 😕😕😕😕😕😕 */}
      <img className={styles.searchIcon} src={search_icon} />
      <input
        className={styles.searchBarTextBox}
        type="text"
        placeholder="Search.."
        // value={searchKey}
        onChange={debouncedResults}
      />
    </div>
  );
};

export default SearchBar;
