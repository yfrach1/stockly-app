import React from "react";
import StockDetails from "../stocksSystem/stockDetails/StockDetails";
import StockGraph from "../stocksSystem/stockGraph/StockGraph";
import styles from "./Portfolio.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
import ListStocks from "../stocks/ListStocks";
import ListStocksConnector from "../stocks/ListStocksConnector";
const Portfolio = ({ addStockAction, portfolioId }) => {
   return (
      <div className={styles.portfolioGrid}>
         <div className={styles.portfolioPreview}>
            <SearchBarConnector portfolioId={portfolioId} />
            <ListStocksConnector />
         </div>
         <div className={styles.stockPreview}>{<StockDetails />}</div>
      </div>
   );
};

export default Portfolio;
