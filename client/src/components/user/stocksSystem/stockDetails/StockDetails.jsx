import React from "react";
import StockGraph from "../stockGraph/StockGraph";
import styles from "./StockDetails.module.css";

const StockDetails = ({
  stock,
  stockInfo,
  deleteStockAction,
  addStockAction,
}) => {
  console.log("stock: ", stock);
  console.log("stockInfo: ", stockInfo);

  return (
    <>
      <div className={styles.stockDetailsContainer}>
        <h1>{stock.ticker}</h1>
        <h2>{stock.name}</h2>
        <StockGraph stockInfo={stockInfo} />
        <div className={styles.details}>
          <span>
            Open: {stockInfo.data ? `${stockInfo.data.at(-1).open}` : ""}
          </span>
          <span>
            High: {stockInfo.data ? `${stockInfo.data.at(-1).high}` : ""}
          </span>
          <span>
            Low: {stockInfo.data ? `${stockInfo.data.at(-1).low}` : ""}
          </span>
          <span>
            Volume:{" "}
            {stockInfo.data ? `${stockInfo.data.at(-1).volume / 1000}K` : ""}
          </span>
        </div>

        <input type="text" />
        <button
          onClick={() =>
            stock.isMine ? () => {} : () => addStockAction(stock)
          }
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
