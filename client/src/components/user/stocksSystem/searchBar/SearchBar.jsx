import React, { useCallback, useMemo, useEffect } from "react";
import { FaSearchPlus } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import debounce from "lodash.debounce";

// https://api.tiingo.com/tiingo/utilities/search/apple?token=af9c3096bb6a8de48a5fafb2b36d4be5acdcec39
const SearchBar = ({ checkUserTokenAction, searchStockAction, portfolioId }) => {
   const handleChange = useCallback(
      (e) => {
         if (e.target.value === "") {
            checkUserTokenAction();
         } else {
            searchStockAction(e.target.value, portfolioId);
         }
      },
      [searchStockAction]
   );

   const debouncedResults = useMemo(() => {
      return debounce(handleChange, 500);
   }, [handleChange]);

   useEffect(() => {
      return () => {
         debouncedResults.cancel();
      };
   });

   return (
      <div className={styles.searchBar}>
         <FaSearchPlus />
         <input type="text" placeholder="Search.." onChange={debouncedResults}></input>
      </div>
   );
};

export default SearchBar;
