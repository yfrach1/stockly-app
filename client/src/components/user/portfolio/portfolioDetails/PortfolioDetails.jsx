import styles from "./PortfolioDetails.module.css";
import PortfolioHeaderCardConnector from "../portfolioHeaderCard/PortfolioHeaderCardConnector";
import PortfolioGraphConnector from "../portfolioGraph/PortfolioGraphConnector";
import { useEffect } from "react";

const PortfolioDetails = ({ setPortfolioData, myStockAmount }) => {
  useEffect(() => {
    setPortfolioData();
  }, [setPortfolioData]);
  return (
    <div>
      {myStockAmount ? (
        <div className={styles.stockDetailsContainer}>
          <PortfolioHeaderCardConnector />
          <PortfolioGraphConnector />
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioDetails;
