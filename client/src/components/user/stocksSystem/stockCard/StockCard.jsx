import React from "react";
import styles from "./StockCard.module.css";


const StockCard = ({ stockFullName, stockShortName, price }) => {
  return (
    <div className={styles.stockCard}>
      <h2>{stockFullName}</h2>
      <p>{stockShortName}</p>
      <p>{price}</p>
    </div>
  )
};

export default StockCard;
