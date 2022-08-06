import styles from "./PortfolioDetails.module.css";
import PortfolioHeaderCardConnector from "../portfolioHeaderCard/PortfolioHeaderCardConnector";
import PortfolioGraphConnector from "../portfolioGraph/PortfolioGraphConnector";
import { useEffect } from "react";

const PortfolioDetails = ({ setPortfolioData, myStockAmount }) => {
  return (
    <div className="animate__animated animate__fadeIn">
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
