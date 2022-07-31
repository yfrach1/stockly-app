import React from "react";
import styles from "./StockCard.module.css";

const StockCard = ({ stock, getStockDetailsAction  ,getStockNewsAction}) => {
  return (
    <div
      className={styles.stockCard}
      onClick={() => {getStockDetailsAction(stock) ;getStockNewsAction(stock)}}
    >
      <div className={styles.alignStockRow}>
        <div className={styles.ticker}>{stock.ticker}</div>
        <div className={styles.price}>{stock.price}</div>
      </div>

      <div className={styles.alignStockRow}>
        <div
          className={styles.name}
          style={{ color: !stock.name ? "red" : "" }}
        >
          {stock.name ? stock.name : "name not avialbe"}
        </div>
        <div
          className={styles.changePercent}
          style={{
            backgroundColor: stock.change_percent > 0 ? "#38ef7d" : "#F00000",
          }}
        >
          {`${stock.change_percent}%`}
        </div>
      </div>
    </div>
  );
};

export default StockCard;
