import React from "react";
import styles from "./PortfolioHeaderCard.module.css";

const PortfolioHeaderCard = ({ stock, price, percent }) => {
  return (
    <div className={styles.header}>
      <div className={styles.companyDetailsContainer}>
        <h1 className={styles.ticker}>{stock.ticker}</h1>
        <h2 className={styles.stockName}>{stock.name}</h2>
      </div>
      <div className={styles.companyRevContainer}>
        <div className={styles.price}>{price}</div>
        <div
          className={styles.percentage}
          style={{
            backgroundColor: percent > 0 ? "#38ef7d" : "#F00000",
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeaderCard;