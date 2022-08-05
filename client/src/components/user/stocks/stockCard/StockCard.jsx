import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./StockCard.module.css";

const StockCard = ({
  stock,
  getStockDetailsAction,
  getStockNewsAction,
  portfolioId,
}) => {
  const item = {
    hidden: { x: -300, opacity: 0, scale: 0.9 },
    show: { x: 0, opacity: 1, scale: 1 },
  };

  return (
    <Link
      className={styles.link}
      onClick={() => {
        getStockDetailsAction(stock.ticker);
        getStockNewsAction(stock);
      }}
      to={`/stocks/${portfolioId}/${stock.ticker}`}
    >
      <motion.div
        transition={{ duration: 0.3 }}
        className={styles.stockCard}
        variants={item}
      >
        <div className={styles.alignStockRow}>
          <div className={styles.ticker}>{stock.ticker}</div>
          <div className={styles.price}>{stock.price}</div>
        </div>

        <div className={styles.alignStockRow}>
          <div
            className={styles.name}
            style={{ color: !stock.name ? "red" : "" }}
          >
            {stock.name ? stock.name : "name not available"}
          </div>
          <div
            className={styles.changePercent}
            style={{
              backgroundColor: stock.change_percent > 0 ? "#38ef7d" : "#F00000",
              color: stock.change_percent > 0 ? "#010b13" : "#ffffff",
            }}
          >
            {`${stock.change_percent}%`}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default StockCard;
