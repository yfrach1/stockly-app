import React from "react";
import styles from "./Portfolio.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
import ListStocksConnector from "../stocks/listStocks/ListStocksConnector";
import OpacityLoader from "../../loading/fetchStockLoader/OpacityLoader";
import PortfolioDataConnector from "./portfolioData/PortfolioDataConnector";
import DetailsSwitchConnector from "../../../navigation/DetailsSwitchConnector";
import PortfolioCardConnector from "./portfolioCard/PortfolioCardConnector";
const Portfolio = ({ fetchLoading, portfolioId }) => {
  return (
    <div className={styles.portfolioGrid}>
      <div className={styles.portfolioPreview}>
        {/* <PortfolioDataConnector /> */}
        <PortfolioCardConnector />
        <SearchBarConnector portfolioId={portfolioId} />
        <div className={styles.listStocksPreview}>
          {fetchLoading ? <OpacityLoader /> : <ListStocksConnector />}
        </div>
      </div>
      <div className={styles.stockPreview}>{<DetailsSwitchConnector />}</div>
    </div>
  );
};

export default Portfolio;
