import React from "react";
import styles from "./StockCard.module.css";

const StockCard = ({ stock, addButton, addStockAction, getStockDetailsAction }) => {
   return (
      <button
         onClick={() => {
            getStockDetailsAction(stock.ticker); //add here show info on the left action
         }}
         className={styles.stockCard}
      >
         <h2 className={styles.ticker}>{stock.ticker}</h2>
         {addButton ? (
            <button
               onClick={() => {
                  addStockAction(stock);
               }}
               className={styles.addButton}
            >
               +
            </button>
         ) : (
            <></>
         )}
         <span className={styles.name}>{stock.name}</span>
         <div className={styles.numbersContainer}>
            <span className={styles.price}>{stock.price}</span>
            <span className={stock.change_percent > 0 ? styles.percentGreen : styles.percentRed}>
               {stock.change_percent}%
            </span>
         </div>
      </button>
   );
};

export default StockCard;
