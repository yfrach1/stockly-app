import React from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({
  portfolioId,
  myStocksAmount,
  price,
  percent,
  portfolioName,
}) => {
  return (
    <div className={styles.portfolioCardGrid}>
      <Link
        className={styles.stockCard}
        // className={myStocksAmount ? styles.button : styles.disabled}
        to={`/stocks/${portfolioId}/dashboard`}
      >
        <div className={styles.alignContent}>
          <div className={styles.alginPortfolioName}>
            <div className={styles.name}> {portfolioName}</div>
          </div>
          <div className={styles.alignPortfolioData}>
            <div className={styles.price}> $ {price}</div>
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
      </Link>
    </div>
  );
};

export default PortfolioCard;
