import StockCard from "./stockCard/StockCard";
import styles from "./ListStocks.module.css";
const ListStocks = ({ stocks }) => {
  return (
    <div>
      <div>list of all stocks</div>
      <div className={styles.grid}>
        {stocks.map((stock, index) => (
          <StockCard key={index} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default ListStocks;
