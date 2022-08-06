import styles from "./PortfolioDetails.module.css";
import PortfolioHeaderCardConnector from "../portfolioHeaderCard/PortfolioHeaderCardConnector";
import PortfolioGraphConnector from "../portfolioGraph/PortfolioGraphConnector";
import { motion } from "framer-motion";

const PortfolioDetails = ({ myStockAmount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {myStockAmount ? (
        <div className={styles.stockDetailsContainer}>
          <PortfolioHeaderCardConnector />
          <PortfolioGraphConnector />
        </div>
      ) : null}
    </motion.div>
  );
};

export default PortfolioDetails;
