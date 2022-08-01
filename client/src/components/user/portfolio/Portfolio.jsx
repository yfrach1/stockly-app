import React from "react";
import StockDetailsConnector from "../stocksSystem/stockDetails/StockDetailsConnector";
import styles from "./Portfolio.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
import ListStocksConnector from "../stocks/ListStocksConnector";
import OpacityLoader from "../../loading/fetchStockLoader/OpacityLoader";
import PortfolioDataConnector from "../portfolioData/PortfolioDataConnector";

const Portfolio = ({ fetchLoading, portfolioId, stocksAmount }) => {
   return (
      <div className={styles.portfolioGrid}>
         <div className={styles.portfolioPreview}>
            <PortfolioDataConnector />
            {/* display something else when stocklist is empty */}
            <SearchBarConnector portfolioId={portfolioId} />

            {fetchLoading ? <OpacityLoader /> : <ListStocksConnector />}
         </div>
         <div className={styles.stockPreview}>{<StockDetailsConnector />}</div>
      </div>
   );
};

export default Portfolio;
