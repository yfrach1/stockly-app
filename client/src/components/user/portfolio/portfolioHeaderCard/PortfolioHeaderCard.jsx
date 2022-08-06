import React from "react";
import { useEffect } from "react";
import styles from "./PortfolioHeaderCard.module.css";

const PortfolioHeaderCard = ({
  price,
  percent,
  setDateFilterAction,
  timePeriodFilter,
  portfolioDetails,
}) => {
  useEffect(() => {
    setDateFilterAction("All");
  }, [setDateFilterAction]);
  return (
    <div className={styles.header}>
      <div className={styles.companyDetailsContainer}>
        <h1 className={styles.ticker}>{portfolioDetails.name}</h1>
      </div>
      <div className={styles.companyRevContainer}>
        <div className={styles.price}>
          {timePeriodFilter} Revenue: $ {price}
        </div>
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
