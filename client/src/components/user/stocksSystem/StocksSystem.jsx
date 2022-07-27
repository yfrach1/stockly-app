import React from "react";
import Sidebar from "../sideBar/Sidebar";
import Routes from "../../../navigation/UserRoutes";
import styles from "./StocksSystem.module.css";

const StocksSystem = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Sidebar />
      <Routes />
    </div>
  );
};

export default StocksSystem;
