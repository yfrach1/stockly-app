import StockCard from "./stockCard/StockCard";
import styles from "./ListStocks.module.css";
import { v4 as uuidv4 } from "uuid";

const ListStocks = ({ myStocks, searchStocks }) => {
   return (
      <div>
         <div>list of all stocks</div>
         <div className={styles.grid}>
            {myStocks.map((stock, index) => (
               <StockCard key={uuidv4()} stock={stock} />
            ))}
            {searchStocks.map((stock, index) => (
               <StockCard key={uuidv4()} stock={stock} />
            ))}
         </div>
      </div>
   );
};

export default ListStocks;
