import styles from "./PortfolioDetails.module.css";
import PortfolioHeaderCardConnector from "../../stocksSystem/portfolioHeaderCard /PortfolioHeaderCardConnector";
import StockGraphConnector from "../../stocksSystem/stockGraph/StockGraphConnector";

const PortfolioDetails = ({ setPortfolioData, portfolioId }) => {
  setPortfolioData(portfolioId);
  return (
    <div className={styles.stockDetailsContainer}>
      <PortfolioHeaderCardConnector />
      <StockGraphConnector />
    </div>
  );
};

export default PortfolioDetails;
