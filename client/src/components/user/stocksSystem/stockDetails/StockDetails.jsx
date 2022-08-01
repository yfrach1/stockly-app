import React from "react";
import { useState, useCallback, useRef } from "react";
import StockGraph from "../stockGraph/StockGraph";
import ListNews from "../news/ListNews";
import styles from "./StockDetails.module.css";

const StockDetails = ({
  stock,
  stockInfo,
  deleteStockAction,
  addStockAction,
  stockNews,
  updateStockQuantityAction,
}) => {
  const [quantity, setQuantity] = useState(0);
  const inputElement = useRef(null);

  const handleChange = useCallback(
    (e) => {
      setQuantity(e.target.value);
    },
    [setQuantity]
  );

  const addStock = useCallback(() => {
    console.log("compare:", inputElement.current.value === "");
    if (!inputElement.current.value.length) {
      alert("must have quantiti >= 0");
    }
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
    <div className={styles.stockDetailsContainer}>
      <div className={styles.header}>
        <div className={styles.companyDetailsContainer}>
          <h1 className={styles.ticker}>{stock.ticker}</h1>
          <h2 className={styles.stockName}>{stock.name}</h2>
        </div>
        <div className={styles.companyRevContainer}>
          <div className={styles.price}>{stock.price}</div>
          <div
            className={styles.percentage}
            style={{
              backgroundColor: stock.change_percent > 0 ? "#38ef7d" : "#F00000",
            }}
          >
            {stock.change_percent}%
          </div>
        </div>
      </div>
      <StockGraph stockInfo={stockInfo} />
      <div className={styles.detailsAndAddContainer}>
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
        <div className={styles.quantityContainer}>
          Quantity:
          <input
            type="text"
            placeholder={stock.quantity ? stock.quantity : ""}
            onChange={handleChange}
            ref={inputElement}
            className={styles.input}
          />
          <button
            onClick={() => (stock.isMine ? updateStockQuantity() : addStock())}
            className={styles.buttonAdd}
          >
            {stock.isMine ? "Update" : "Add"}
          </button>
          {stock.isMine ? (
            <button
              onClick={() => deleteStockAction(stock.ticker, stock.stock_id)}
              className={styles.buttonDelete}
            >
              Delete Stock
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      <ListNews stockNews={stockNews} />
    </div>
  );
};

export default StockDetails;
