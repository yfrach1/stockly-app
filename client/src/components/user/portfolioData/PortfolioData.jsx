import React from "react";
import styles from "./PortfolioData.module.css";
import { Link } from "react-router-dom";

const PortfolioData = ({ portfolioValue, portfolioId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.portfolioValue}>
        Current portfolio value: ${portfolioValue.toFixed(2)}
      </div>
      <Link className={styles.button} to={`/stocks/${portfolioId}/dashboard`}>
        Portfolio performance
      </Link>
    </div>
  );
};

export default PortfolioData;
