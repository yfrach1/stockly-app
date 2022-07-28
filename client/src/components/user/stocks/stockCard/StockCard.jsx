import React from "react";
import styles from "./StockCard.module.css";

const StockCard = ({ stock }) => {
  const { name, ticker } = stock;

  return (
    <div className={styles.stockCard}>
      <h2>{name}</h2>
      <p>{ticker}</p>
      <p>{"100$"}</p>
    </div>
  );
};

export default StockCard;
