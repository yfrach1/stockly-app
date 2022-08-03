import React from "react";
import styles from "./Portfolio.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
import ListStocksConnector from "../stocks/ListStocksConnector";
import OpacityLoader from "../../loading/fetchStockLoader/OpacityLoader";
import PortfolioDataConnector from "../portfolioData/PortfolioDataConnector";
import DetailsSwitch from "../../../navigation/DetailsSwitch";
const Portfolio = ({ fetchLoading, portfolioId, stocksAmount, myStocks }) => {
  return (
    <div className={styles.portfolioGrid}>
      <div className={styles.portfolioPreview}>
        <PortfolioDataConnector />
        <SearchBarConnector portfolioId={portfolioId} />
        <div className={styles.listStocksPreview}>
          {fetchLoading ? <OpacityLoader /> : <ListStocksConnector />}
        </div>
      </div>
      <div className={styles.stockPreview}>{<DetailsSwitch />}</div>
    </div>
  );
};

export default Portfolio;
