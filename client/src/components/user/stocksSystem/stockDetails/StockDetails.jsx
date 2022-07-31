import React from "react";
import { useEffect } from "react";
import StockGraph from "../stockGraph/StockGraph";
import ListNews from "../news/ListNews";
import styles from "./StockDetails.module.css";
import { deleteStock } from "../../../../app/services/stockService";

const StockDetails = ({ stock, stockInfo, deleteStockAction, addStockAction,stockNews}) => {
   console.log("stock: ", stock);
   console.log("stockInfo: ", stockInfo);
   console.log("stockNews!@#!#!#!#!#!: ", stockNews);

   return (
      <>
         <div className={styles.stockDetailsContainer}>
            <h1>{stock.ticker}</h1>
            <h2>{stock.name}</h2>
            <StockGraph stockInfo={stockInfo} />
            <ListNews stockNews={stockNews}/>
            <div className={styles.details}>
               <span>Open: {stockInfo.data ? `${stockInfo.data.at(-1).open}` : ""}</span>
               <span>High: {stockInfo.data ? `${stockInfo.data.at(-1).high}` : ""}</span>
               <span>Low: {stockInfo.data ? `${stockInfo.data.at(-1).low}` : ""}</span>
               <span>
                  Volume: {stockInfo.data ? `${stockInfo.data.at(-1).volume / 1000}K` : ""}
               </span>
            </div>

            <input type="text" />
            <button
               onClick={() => (stock.isMine ? "Update" : () => addStockAction(stock))}
               className={styles.buttonDelete}
            >
               {stock.isMine ? "Update" : "Add"}
            </button>
            <button
               onClick={() => deleteStockAction(stock.stock_id)}
               className={styles.buttonDelete}
            >
               Delete
            </button>
         </div>
      </>
   );
};
export default StockDetails;
