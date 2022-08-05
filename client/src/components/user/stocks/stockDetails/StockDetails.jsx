import React, { Fragment } from "react";
import { useState, useCallback, useRef } from "react";
import StockHeaderCardConnector from "../../stocks/stockHeaderCard/stockHeaderCardConnector";
import ListNews from "../../stocksSystem/news/ListNews";
import styles from "./StockDetails.module.css";
import StockGraphConnector from "../stockGraph/StockGraphConnector";
import OpacityLoader from "../../../loading/fetchStockLoader/OpacityLoader";

const StockDetails = ({
  stock,
  stockInfo,
  deleteStockAction,
  addStockAction,
  stockNews,
  updateStockQuantityAction,
  detailsLoading,
  portfolioId,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [inputValid, setInputValid] = useState(true);
  const inputElement = useRef(null);

  const handleChange = useCallback(
    (e) => {
      setQuantity(e.target.value);
    },
    [setQuantity]
  );

  const addStock = useCallback(() => {
    if (!inputElement.current.value.length) {
      setInputValid(false);
      return;
    }
    setInputValid(true);
    stock.quantity = quantity;
    addStockAction(stock);
    inputElement.current.value = "";
  }, [quantity, addStockAction, stock]);

  const updateStockQuantity = useCallback(() => {
    stock.quantity = quantity;
    updateStockQuantityAction(stock.stock_id, stock.ticker, quantity);
    inputElement.current.value = "";
  }, [quantity, stock, updateStockQuantityAction]);

  return (
    <div className={styles.stockDetailsContainer}>
      {detailsLoading ? (
        <OpacityLoader />
      ) : Object.keys(stock).length ? (
        <Fragment>
          <StockHeaderCardConnector />

          <StockGraphConnector />
          <div className={styles.detailsAndAddContainer}>
            <div className={styles.details}>
              <span>
                Open: {stockInfo.length ? `${stockInfo.at(-1).open}` : ""}
              </span>
              <span>
                High: {stockInfo.length ? `${stockInfo.at(-1).high}` : ""}
              </span>
              <span>
                Low: {stockInfo.length ? `${stockInfo.at(-1).low}` : ""}
              </span>
              <span>
                Volume:
                {stockInfo.length ? `${stockInfo.at(-1).volume / 1000} K` : ""}
              </span>
            </div>
            <div className={styles.quantityContainer}>
              Quantity:
              <input
                className={inputValid ? styles.input : styles.inputNotValid}
                type="text"
                placeholder={stock.isMine ? stock.quantity : 0}
                onChange={handleChange}
                ref={inputElement}
              />
              {!inputValid ? "please enter number >= 0" : null}
              <button
                onClick={() =>
                  stock.isMine ? updateStockQuantity() : addStock()
                }
                className={styles.buttonAdd}
              >
                {stock.isMine ? "Update" : "Add"}
              </button>
              {stock.isMine ? (
                <button
                  onClick={() => {
                    deleteStockAction(
                      stock.ticker,
                      stock.stock_id,
                      portfolioId
                    );
                    setQuantity(0);
                    inputElement.current.value = "";
                  }}
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
        </Fragment>
      ) : null}
    </div>
  );
};

export default StockDetails;