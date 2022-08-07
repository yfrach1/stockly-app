import React from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({
  portfolioId,
  portfolioDetails,
  currentValue,
  currentChangePercent,
}) => {
  return (
    <div className={styles.portfolioCardGrid}>
      <Link
        className={styles.stockCard}
        to={`/stocks/${portfolioId}/dashboard`}
      >
        <div className={styles.alignContent}>
          <div className={styles.alginPortfolioName}>
            <div className={styles.name}>
              {" "}
              {portfolioDetails.name ? portfolioDetails.name : "My portfolio"}
            </div>
          </div>
          <div className={styles.alignPortfolioData}>
            <div className={styles.price}>Total profit: ${currentValue}</div>
            <div
              className={styles.percentage}
              style={{
                backgroundColor:
                  currentChangePercent > 0
                    ? "#38ef7d"
                    : currentChangePercent < 0
                    ? "#F00000"
                    : "#FFA500",
              }}
            >
              {currentChangePercent}%
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
