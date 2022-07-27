import React from "react";
import StockCard from "../stocksSystem/stockCard/StockCard";
import StockDetails from "../stocksSystem/stockDetails/StockDetails";
import StockGraph from "../stocksSystem/stockGraph/StockGraph";
import styles from "./PortfolioPage.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
const PortfolioPage = ({ stocks }) => {
   return (
      <>
         <div className={styles.stocksSystem}>
            <SearchBarConnector />
            <div className={styles.grid}>
               {stocks.map((stock) => (
                  <StockCard
                     stockFullName={stock.name}
                     stockShortName={stock.ticker}
                     price={stock.quantity}
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
