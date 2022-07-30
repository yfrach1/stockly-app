import React from "react";
import StockDetailsConnector from "../stocksSystem/stockDetails/StockDetailsConnector";
import StockGraph from "../stocksSystem/stockGraph/StockGraph";
import styles from "./Portfolio.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
import ListStocks from "../stocks/ListStocks";
import ListStocksConnector from "../stocks/ListStocksConnector";
import OpacityLoader from "../../loading/fetchStockLoader/OpacityLoader";
const Portfolio = ({ fetchLoading, addStockAction, portfolioId }) => {
  return (
    <div className={styles.portfolioGrid}>
      <div className={styles.portfolioPreview}>
        <SearchBarConnector portfolioId={portfolioId} />
        {fetchLoading ? <OpacityLoader /> : <ListStocksConnector />}
      </div>
      <div className={styles.stockPreview}>{<StockDetailsConnector />}</div>
    </div>
  );
};

export default Portfolio;
