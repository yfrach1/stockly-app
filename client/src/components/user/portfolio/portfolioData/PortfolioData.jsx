import React from "react";
import styles from "./PortfolioData.module.css";
import { Link } from "react-router-dom";

const PortfolioData = ({ portfolioId, myStocksAmount, price, percent }) => {
  return (
    <div className={styles.container}>
      <div className={myStocksAmount ? "" : styles.wrapper}>
        <Link
          className={myStocksAmount ? styles.button : styles.disabled}
          to={`/stocks/${portfolioId}/dashboard`}
        ></Link>
      </div>
      <div>
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
  );
};

export default PortfolioData;
