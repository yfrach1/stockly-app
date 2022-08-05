import styles from "./PortfolioDetails.module.css";
import PortfolioHeaderCardConnector from "../portfolioHeaderCard /PortfolioHeaderCardConnector";
import StockGraphConnector from "../../stocks/stockGraph/StockGraphConnector";
import { useEffect } from "react";

const PortfolioDetails = ({ setPortfolioData, portfolioId, myStockAmount }) => {
  useEffect(() => {
    setPortfolioData(portfolioId);
  }, [setPortfolioData]);
  return (
    <div>
      {myStockAmount ? (
        <div className={styles.stockDetailsContainer}>
          <PortfolioHeaderCardConnector />
          <StockGraphConnector />
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioDetails;
