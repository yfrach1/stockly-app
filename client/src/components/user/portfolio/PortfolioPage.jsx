import React, { useState } from "react";
import StockCard from "../stocksSystem/stockCard/StockCard";
import SearchBar from "../stocksSystem/searchBar/SearchBar";
import StockDetails from "../stocksSystem/stockDetails/StockDetails";
import StockGraph from "../stocksSystem/stockGraph/StockGraph";
import styles from "./PortfolioPage.module.css";

const PortfolioPage = () => {
   const [stocks, setStocks] = useState([
      { stockShortName: "AAPL", stockFullName: "Apple", price: "100" },
      { stockShortName: "MSFT", stockFullName: "Microsoft", price: "200" },
      { stockShortName: "GOOG", stockFullName: "Google", price: "300" },
      { stockShortName: "AMZN", stockFullName: "Amazon", price: "400" },
      { stockShortName: "FB", stockFullName: "Facebook", price: "500" },
   ]);
   return (
      <div>
         <div className={styles.stocksSystem}>
            <SearchBar stocks={stocks} setStocks={setStocks} />
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
            details={[
               { description: "previous Close", value: 4566.48 },
               { description: "day range", value: "43,423-43,243" },
               { description: "year range", value: "3,333-3,222" },
            ]}
         />
         <StockGraph />
      </div>
   );
};

export default PortfolioPage;
