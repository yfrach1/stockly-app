import React from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({ portfolioId, portfolioDetails }) => {
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
            <div className={styles.price}>
              Weekly gain: ${portfolioDetails.dayGain.toFixed(2)}
            </div>
            <div
              className={styles.percentage}
              style={{
                backgroundColor:
                  portfolioDetails.dayPercent > 0
                    ? "#38ef7d"
                    : portfolioDetails.dayPercent < 0
                    ? "#F00000"
                    : "#FFA500",
              }}
            >
              {portfolioDetails.dayPercent}%
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
