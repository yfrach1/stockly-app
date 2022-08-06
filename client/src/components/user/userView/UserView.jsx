import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserSwitch from "../../../navigation/UserSwitch";
import PortfolioConnector from "../portfolio/PortfolioConnector";
import Sidebar from "../sideBar/Sidebar";
import SideBarConnector from "../sideBar/SideBar-connector";
import styles from "./UserView.module.css";
const UserView = ({ portfolioId }) => {
  const history = useHistory();
  // useEffect(() => {
  //   history.push(`/stocks/${portfolioId}/dashboard`);
  // }, []);
  return (
    <div className={styles.mainPage}>
      <SideBarConnector />
      <div className={styles.userPreview}>
        {/* <UserSwitch /> */}
        <PortfolioConnector />
      </div>
    </div>
  );
};

export default UserView;
