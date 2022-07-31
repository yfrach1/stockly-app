import styles from "./ListStocks.module.css";
import { v4 as uuidv4 } from "uuid";
import StockCardConnector from "./stockCard/StockCardConnector";

const ListStocks = ({ stocks }) => {
   console.log("stocks: ", stocks);
   const notMyStocksArray = stocks
      .map((stock, index) => {
         return stock.isMine ? null : <StockCardConnector key={index} stock={stock} />;
      })
      .filter((stock) => stock !== null);
   //   console.log("notMyStocksArray: ", notMyStocksArray.length);
   //   console.log("notMyStocksArray: ", notMyStocksArray);
   const seperatingLine = <span className={styles.seperatingLine}></span>;
   return (
      <div>
         <div className={styles.grid}>
            {stocks.map((stock, index) =>
               stock.isMine ? <StockCardConnector key={index} stock={stock} /> : null
            )}
            {notMyStocksArray.length ? seperatingLine : null}
            {notMyStocksArray}
         </div>
      </div>
   );
};

export default ListStocks;
