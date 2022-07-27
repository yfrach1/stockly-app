import React, { useState } from "react";
import StockCard from "../stocksSystem/stockCard/StockCard";
import StockDetails from "../stocksSystem/stockDetails/StockDetails";
import StockGraph from "../stocksSystem/stockGraph/StockGraph";
import styles from "./PortfolioPage.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
const PortfolioPage = () => {
  const [stocks, setStocks] = useState([
    { stockShortName: "AAPL", stockFullName: "Apple", price: "100" },
    { stockShortName: "MSFT", stockFullName: "Microsoft", price: "200" },
    { stockShortName: "GOOG", stockFullName: "Google", price: "300" },
    { stockShortName: "AMZN", stockFullName: "Amazon", price: "400" },
    { stockShortName: "FB", stockFullName: "Facebook", price: "500" },
  ]);
  return (
    <>
      <div className={styles.stocksSystem}>
        <SearchBarConnector stocks={stocks} setStocks={setStocks} />
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
      <div className={styles.stockContainer}>
        <StockGraph />
        <StockDetails
          details={[
            { description: "previous Close", value: 4566.48 },
            { description: "day range", value: "43,423-43,243" },
            { description: "year range", value: "3,333-3,222" },
          ]}
        />
      </div>
    </>
  );
};

export default PortfolioPage;
