import styles from "./ListStocks.module.css";
import StockCardConnector from "../stockCard/StockCardConnector";
import emptyStateImage from "../../../../assets/images/emptyState.png";
import { motion } from "framer-motion";

const ListStocks = ({ stocks, searchKey }) => {
  const notMyStocksArray = stocks
    .map((stock, index) => {
      return stock.isMine ? null : (
        <StockCardConnector key={index} stock={stock} />
      );
    })
    .filter((stock) => stock !== null);
  const seperatingLine = <span className={styles.seperatingLine}></span>;
  const emptyState = (
    <>
      <img
        src={emptyStateImage}
        alt="Empty state"
        className={styles.emptyState}
      />
      <div className={styles.addText}>Add your first stock up here!</div>
    </>
  );

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.grid}
    >
      {!stocks.length ? (
        searchKey.length ? (
          <div>something</div>
        ) : (
          emptyState
        )
      ) : (
        <></>
      )}
      {stocks.map((stock, index) =>
        stock.isMine ? <StockCardConnector key={index} stock={stock} /> : null
      )}
      {notMyStocksArray.length ? seperatingLine : null}
      {notMyStocksArray}
    </motion.div>
  );
};

export default ListStocks;
