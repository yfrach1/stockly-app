import styles from "./ListStocks.module.css";
import { v4 as uuidv4 } from "uuid";
import StockCardConnector from "./stockCard/StockCardConnector";

const ListStocks = ({ myStocks, searchStocks }) => {
  console.log("myStocks: ", myStocks);
  return (
    <div>
      <div className={styles.grid}>
        {myStocks.map((stock, index) => (
          <StockCardConnector key={stock.stock_id} stock={stock} />
        ))}
        {searchStocks.map((stock, index) => (
          <StockCardConnector
            key={stock.stock_id}
            stock={stock}
            addButton={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ListStocks;
