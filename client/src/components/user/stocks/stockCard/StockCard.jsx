import React from "react";
import styles from "./StockCard.module.css";

const StockCard = ({ stock }) => {
   return (
      <div className={styles.stockCard}>
         <h2 className={styles.ticker}>{stock.ticker}</h2>
         <span className={styles.name}>{stock.name}</span>
         <div className={styles.numbersContainer}>
            <span className={styles.price}>{stock.price}</span>
            <span className={stock.change_percent > 0 ? styles.percentGreen : styles.percentRed}>
               {stock.change_percent}%
            </span>
         </div>
      </div>
   );
};

export default StockCard;