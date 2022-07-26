import React, { useState } from "react";
import StockCard from "./stockCard/StockCard";
import SearchBar from "./searchBar/SearchBar";
import Sidebar from "../sideBar/Sidebar";
import StockDetails from "./stockDetails/StockDetails";

import styles from "./StocksSystem.module.css";

const StocksSystem = () => {
    const [stocks, setStocks] = useState([{stockShortName: "AAPL", stockFullName: "Apple", price: "100"},{stockShortName: "MSFT", stockFullName: "Microsoft", price: "200"},{stockShortName: "GOOG", stockFullName: "Google", price: "300"},{stockShortName: "AMZN", stockFullName: "Amazon", price: "400"},{stockShortName:"FB", stockFullName: "Facebook", price: "500"}]);
    return (
        <div>
            <Sidebar />
            <div className={styles.stocksSystem}>
                <SearchBar 
                    stocks={stocks}
                    setStocks={setStocks}
                />
                <div className={styles.grid}>
                    {stocks.map((stock) => (
                        <StockCard
                            stockFullName={stock.stockFullName}
                            stockShortName={stock.stockShortName}
                            price={stock.price}
                        />
                    ))}
                </div>
            </div>
            <StockDetails
                details={[{description:"previous Close",value:4566.48}, {description:"day range",value:"43,423-43,243"}, {description:"year range",value:"3,333-3,222"}]}
            />
        </div>
    )
};

export default StocksSystem;
