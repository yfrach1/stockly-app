import React from "react";
import { useState, useCallback, useRef } from "react";
import StockGraph from "../stockGraph/StockGraph";
import ListNews from "../news/ListNews";
import styles from "./StockDetails.module.css";

const StockDetails = ({ stock, stockInfo, deleteStockAction, addStockAction, stockNews,updateStockQuantityAction }) => {

   const [quantity, setQuantity] = useState(0);
   const inputElement = useRef(null);

   const handleChange = useCallback(
      (e) => {
         setQuantity(e.target.value);
      },
      [setQuantity]
   );

   const addStock = useCallback(() => {
      stock.quantity = quantity;
      addStockAction(stock);
      inputElement.current.value = "";
   }, [quantity]);

   const updateStockQuantity = useCallback(() => {
      stock.quantity = quantity;
      updateStockQuantityAction(stock);
      inputElement.current.value = "";
   }, [quantity]);

   return (
      <>
         <div className={styles.stockDetailsContainer}>
            <h1>{stock.ticker}</h1>
            <h2>{stock.name}</h2>
            <StockGraph stockInfo={stockInfo} />
            <div className={styles.details}>
               <span>Open: {stockInfo.data ? `${stockInfo.data.at(-1).open}` : ""}</span>
               <span>High: {stockInfo.data ? `${stockInfo.data.at(-1).high}` : ""}</span>
               <span>Low: {stockInfo.data ? `${stockInfo.data.at(-1).low}` : ""}</span>
               <span>
                  Volume: {stockInfo.data ? `${stockInfo.data.at(-1).volume / 1000}K` : ""}
               </span>
            </div>
            <div className={styles.quantityContainer}>
            <input
               type="text"
               placeholder={stock.quantity ? stock.quantity : ""}
               onChange={handleChange}
               ref={inputElement}
            />
            <button
               onClick={() => (stock.isMine ? updateStockQuantity() : addStock())}
               className={styles.buttonDelete}
            >
               {stock.isMine ? "Update" : "Add"}
            </button>
            <button
               onClick={() => deleteStockAction(stock.ticker, stock.stock_id)}
               className={styles.buttonDelete}
            >
               Delete
            </button>
         </div>
         <ListNews stockNews={stockNews} />

      </>
   );
};
export default StockDetails;
