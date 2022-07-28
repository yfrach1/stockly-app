import React from "react";
import styles from "./StockCard.module.css";

const StockCard = ({ stock }) => {
   return (
      <div className={styles.stockCard}>
         <h2>{stock.ticker}</h2>
         <p>{stock.name}</p>
         <p>{stock.price}</p>
         <p>{stock.change_percent}%</p>
      </div>
   );
};

export default StockCard;
