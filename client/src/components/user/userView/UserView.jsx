import PortfolioConnector from "../portfolio/PortfolioConnector";
import SideBarConnector from "../sideBar/SideBar-connector";
import styles from "./UserView.module.css";
const UserView = () => {
  return (
    <div className={styles.mainPage}>
      <SideBarConnector />
      <div className={styles.userPreview}>
        <PortfolioConnector />
      </div>
    </div>
  );
};

export default UserView;
