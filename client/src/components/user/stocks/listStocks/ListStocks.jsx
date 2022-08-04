import styles from "./ListStocks.module.css";
import StockCardConnector from "../stockCard/StockCardConnector";
import emptyState from "../../../../assets/images/emptyState.png";

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
  return (
    <div className={styles.grid}>
      {!stocks.length ? (
        <img src={emptyState} alt="Empty state" className={styles.emptyState} />
      ) : (
        <></>
      )}
      {stocks.map((stock, index) =>
        stock.isMine ? <StockCardConnector key={index} stock={stock} /> : null
      )}
      {notMyStocksArray.length ? seperatingLine : null}
      {notMyStocksArray}
    </div>
  );
};

export default ListStocks;
