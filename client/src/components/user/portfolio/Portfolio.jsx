import React from "react";
import StockDetails from "../stocksSystem/stockDetails/StockDetails";
import StockGraph from "../stocksSystem/stockGraph/StockGraph";
import styles from "./Portfolio.module.css";
import SearchBarConnector from "../stocksSystem/searchBar/SearchBar-connector";
import ListStocks from "../stocks/ListStocks";
import ListStocksConnector from "../stocks/ListStocksConnector";
const Portfolio = ({ addStockAction }) => {
  return (
    <div className={styles.portfolioGrid}>
      <div className={styles.portfolioPreview}>
        <SearchBarConnector />
        {/* <button
          onClick={() => {
            // addStockAction({ name: "Monday", ticker: "MNDY", quantity: 9 });
            addStockAction({ name: "Monday", ticker: "MNDY", quantity: 9 });
          }}
        >
          Add stock
        </button> */}
        <ListStocksConnector />
      </div>
      <div className={styles.stockPreview}>stock details view</div>
    </div>
  );

  // return (
  //   <>
  //     <div className={styles.stocksSystem}>
  //       <SearchBarConnector />
  //       <div></div>
  //       <div></div>
  //       <div className={styles.grid}>
  //         {stocks.map((stock) => (
  //           <StockCard
  //             stockFullName={stock.name}
  //             stockShortName={stock.ticker}
  //             price={stock.quantity}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //     <button
  //       onClick={() => {
  //         addStockAction({ name: "Monday", ticker: "MNDY", quantity: 9 });
  //       }}
  //     >
  //       Add stock
  //     </button>
  //     <div className={styles.stockContainer}>
  //       <StockGraph />
  //       <StockDetails
  //         details={[
  //           { description: "previous Close", value: 4566.48 },
  //           { description: "day range", value: "43,423-43,243" },
  //           { description: "year range", value: "3,333-3,222" },
  //         ]}
  //       />
  //     </div>
  //   </>
  // );
};

export default Portfolio;
