import React from "react";
import Sidebar from "../sideBar/Sidebar";
import Routes from "../../../navigation/userRoutes";
import styles from "./StocksSystem.module.css";

const StocksSystem = () => {
   return (
      <div>
         <Sidebar />
         <Routes />
      </div>
   );
};

export default StocksSystem;
