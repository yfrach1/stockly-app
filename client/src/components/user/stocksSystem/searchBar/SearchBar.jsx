import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import styles from "./SearchBar.module.css";


const SearchBar = ({stocks,setStocks}) => {
    const [searchValue, setSearchValue] = useState('');
    const searchStock = async () => {
        if (searchValue === '') {
            alert("Please Enter");
        } else {

        };
    };

    const handleStockSearchChange = event => {
        setSearchValue(event.target.value);
        setStocks(stocks.filter((stock) => stock.stockFullName.toLowerCase().includes(searchValue.toLowerCase())))
        console.log(stocks)
 
    };
    return (
        <div className={styles.searchBar}>
        <FaSearchPlus />
            <input
                type="text"
                value={searchValue}
                placeholder="Search.."
                onChange={handleStockSearchChange}>
            </input>
        </div>
    )
};

export default SearchBar;
