import styles from "./PortfolioDetails.module.css";

const PortfolioDetails = ({ revenu, diffPercent, stockInfo }) => {
  return (
    <div className={styles.portfolioDetailsGrid}>
      <div className={styles.portfolioDetails}> details</div>
      <div className={styles.portfolioGraph}>graph</div>
      this is your portfolio sweety
    </div>
  );
};

export default PortfolioDetails;
