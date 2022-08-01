import React from "react";
import styles from "./PortfolioData.module.css";

const PortfolioData = ({ portfolioValue }) => {
   return (
      <div className={styles.container}>
         <div>Current portfolio value: {portfolioValue.toFixed(2)}</div>
         <button className={styles.button}>Portfolio performance</button>
      </div>
   );
};

export default PortfolioData;
