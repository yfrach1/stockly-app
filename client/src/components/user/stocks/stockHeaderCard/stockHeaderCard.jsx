import React from "react";
import styles from "./stockHeaderCard.module.css";

const stockHeaderCard = ({ stock }) => {
  return (
    <div className={styles.header}>
      <div className={styles.companyDetailsContainer}>
        <h1 className={styles.ticker}>{stock.ticker}</h1>
        <h2 className={styles.stockName}>{stock.name}</h2>
      </div>
      <div className={styles.companyRevContainer}>
        <div className={styles.price}> {stock.price}</div>
        <div
          className={styles.percentage}
          style={{
            backgroundColor: stock.change_percent > 0 ? "#38ef7d" : "#F00000",
          }}
        >
          {stock.change_percent}%
        </div>
      </div>
    </div>
  );
};

export default stockHeaderCard;
