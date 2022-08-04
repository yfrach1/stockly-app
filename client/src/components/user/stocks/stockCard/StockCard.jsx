import React from "react";
import { Link } from "react-router-dom";
import styles from "./StockCard.module.css";

const StockCard = ({
  stock,
  getStockDetailsAction,
  getStockNewsAction,
  portfolioId,
}) => {
  return (
    <Link
      className={styles.stockCard}
      onClick={() => {
        getStockDetailsAction(stock.ticker);
        getStockNewsAction(stock);
      }}
      to={`/stocks/${portfolioId}/${stock.ticker}`}
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
          {stock.name ? stock.name : "name not available"}
        </div>
        <div
          className={styles.changePercent}
          style={{
            backgroundColor: stock.change_percent > 0 ? "#38ef7d" : "#F00000",
            color: stock.change_percent > 0 ? "#010b13" : "#ffffff",
          }}
        >
          {`${stock.change_percent}%`}
        </div>
      </div>
    </Link>
  );
};

export default StockCard;
