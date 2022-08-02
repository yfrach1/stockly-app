import styles from "./PortfolioDetails.module.css";
import StockHeaderCardConnector from "../../stocksSystem/stockHeaderCard/stockHeaderCardConnector";
import StockGraphConnector from "../../stocksSystem/stockGraph/StockGraphConnector";

const PortfolioDetails = ({ setPortfolioData }) => {
   // setPortfolioData(3);

   return (
      <div className={styles.stockDetailsContainer}>
         <StockHeaderCardConnector />
         <StockGraphConnector />
      </div>
   );
};

export default PortfolioDetails;
