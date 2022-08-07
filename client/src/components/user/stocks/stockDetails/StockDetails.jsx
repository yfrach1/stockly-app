import React, { Fragment } from "react";
import { useState, useCallback, useRef } from "react";
import StockHeaderCardConnector from "../../stocks/stockHeaderCard/stockHeaderCardConnector";
import ListNews from "../../stocksSystem/news/ListNews";
import styles from "./StockDetails.module.css";
import StockGraphConnector from "../stockGraph/StockGraphConnector";
import OpacityLoader from "../../../loading/fetchStockLoader/OpacityLoader";
import { motion } from "framer-motion";

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
  const [price, setPrice] = useState(0);
  const [quantityInputValid, setQuantityInputValid] = useState(true);
  const [priceInputValid, setPriceInputValid] = useState(true);
  const quantityInputRef = useRef(null);
  const priceInputRef = useRef(null);
  const handleQuantityChange = useCallback(
    (e) => {
      setQuantity(e.target.value);
    },
    [setQuantity]
  );

  const handlePriceChange = useCallback(
    (e) => {
      setPrice(e.target.value);
    },
    [setPrice]
  );

  const addStock = useCallback(() => {
    if (
      !quantityInputRef.current.value.length ||
      quantityInputRef.current.value < 0
    ) {
      setQuantityInputValid(false);
      return;
    }
    setQuantityInputValid(true);
    if (
      !priceInputRef.current.value.length ||
      priceInputRef.current.value <= 0
    ) {
      setPriceInputValid(false);
      return;
    }
    setPriceInputValid(true);

    stock.quantity = quantity;
    stock.buy_price = price;
    addStockAction(stock);
    quantityInputRef.current.value = "";
    priceInputRef.current.value = "";
  }, [quantity, addStockAction, stock, price]);

  const updateStockQuantity = useCallback(() => {
    stock.quantity = quantity;
    updateStockQuantityAction(stock.stock_id, stock.ticker, quantity);
    quantityInputRef.current.value = "";
  }, [quantity, stock, updateStockQuantityAction]);

  return (
    <>
      {detailsLoading ? (
        <div className={styles.loaderContainer}>
          <OpacityLoader />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stockDetailsContainer}>
            {Object.keys(stock).length ? (
              <Fragment>
                <StockHeaderCardConnector />

                <StockGraphConnector />
                <div className={styles.detailsAndAddContainer}>
                  <div className={styles.details}>
                    <div className={styles.aligValuenDisplay}>
                      <div> Open:</div>
                      <div>
                        {stockInfo.length ? `${stockInfo.at(-1).open}` : ""}
                      </div>
                    </div>
                    <div className={styles.alignValueDisplay}>
                      <div> High:</div>
                      <div>
                        {stockInfo.length ? `${stockInfo.at(-1).high}` : ""}
                      </div>
                    </div>
                    <div className={styles.alignValueDisplay}>
                      <div> Low:</div>
                      <div>
                        {stockInfo.length ? `${stockInfo.at(-1).low}` : ""}
                      </div>
                    </div>
                    <div className={styles.alignValueDisplay}>
                      <div> Volume:</div>
                      <div>
                        {stockInfo.length
                          ? `${stockInfo.at(-1).volume / 1000} K`
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantityContainer}>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        stock.isMine ? updateStockQuantity() : addStock();
                      }}
                    >
                      <div className={styles.alignTextInput}>
                        Quantity:
                        <input
                          className={
                            quantityInputValid
                              ? styles.input
                              : styles.inputNotValid
                          }
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder={stock.isMine ? stock.quantity : 0}
                          onChange={handleQuantityChange}
                          ref={quantityInputRef}
                        />
                        {!stock.isMine ? (
                          <div className={styles.alignPriceInput}>
                            Cost:
                            <input
                              className={
                                priceInputValid
                                  ? styles.input
                                  : styles.inputNotValid
                              }
                              type="number"
                              min="0.000001"
                              step="0.000001"
                              placeholder={stock.isMine ? stock.buy_price : 0}
                              onChange={handlePriceChange}
                              ref={priceInputRef}
                            />
                          </div>
                        ) : null}
                      </div>
                    </form>

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
                          quantityInputRef.current.value = "";
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
        </motion.div>
      )}
    </>
  );
};

export default StockDetails;
