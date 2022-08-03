import React from "react";
import styles from "./PortfolioData.module.css";
import { Link } from "react-router-dom";

const PortfolioData = ({ portfolioValue, portfolioId, myStocks }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.portfolioValue}>
        Current portfolio value: ${portfolioValue.toFixed(2)}
      </div> */}
      <div className={myStocks.length ? "" : styles.wrapper}>
        <Link
          className={myStocks.length ? styles.button : styles.disabled}
          to={`/stocks/${portfolioId}/dashboard`}
        >
          Portfolio performance
        </Link>
      </div>
    </div>
  );
};

export default PortfolioData;
