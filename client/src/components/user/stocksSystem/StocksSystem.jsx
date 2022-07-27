import React from "react";
import Sidebar from "../sideBar/Sidebar";
import Routes from "../../../navigation/UserRoutes";
import styles from "./StocksSystem.module.css";
import SideBarConnector from "../sideBar/SideBar-connector";
const StocksSystem = () => {
  return (
    <div className={styles.sidebarContainer}>
      <SideBarConnector />
      <Routes />
    </div>
  );
};

export default StocksSystem;
