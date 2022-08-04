import styles from "./ListStocks.module.css";
import StockCardConnector from "../stockCard/StockCardConnector";
import emptyStateImage from "../../../../assets/images/emptyState.png";

const ListStocks = ({ stocks }) => {
  console.log("stocks: ", stocks);
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
  return (
    <div className={styles.grid}>
      {!stocks.length ? emptyState : <></>}
      {stocks.map((stock, index) =>
        stock.isMine ? <StockCardConnector key={index} stock={stock} /> : null
      )}
      {notMyStocksArray.length ? seperatingLine : null}
      {notMyStocksArray}
    </div>
  );
};

export default ListStocks;
