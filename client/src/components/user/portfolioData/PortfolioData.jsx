import React from "react";
import styles from "./PortfolioData.module.css";

const PortfolioData = ({}) => {
   return (
      <div className={styles.container}>
         <div>Current portfolio value:</div>
         <button className={styles.button}>Portfolio performance</button>
      </div>
   );
};

export default PortfolioData;