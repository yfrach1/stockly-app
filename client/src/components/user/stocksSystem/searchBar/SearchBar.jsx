import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import styles from "./SearchBar.module.css";

// https://api.tiingo.com/tiingo/utilities/search/apple?token=af9c3096bb6a8de48a5fafb2b36d4be5acdcec39
const SearchBar = ({ searchKey, setSearchKeyAction }) => {
  // const [searchValue, setSearchValue] = useState("");
  // const searchStock = async () => {
  //   if (searchValue === "") {
  //     alert("Please Enter");
  //   } else {
  //   }
  // };

  // const handleStockSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  //   setStocks(
  //     stocks.filter((stock) =>
  //       stock.stockFullName.toLowerCase().includes(searchValue.toLowerCase())
  //     )
  //   );
  //   console.log(stocks);
  // };
  return (
    <div className={styles.searchBar}>
      <FaSearchPlus />
      <input
        type="text"
        value={searchKey}
        placeholder="Search.."
        onChange={(e) => setSearchKeyAction(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
