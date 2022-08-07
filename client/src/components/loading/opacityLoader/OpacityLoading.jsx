import React from "react";
import styles from "./OpacityLoading.module.css";
import spinner from "../../../assets/dynamicSvg/spinner_1.svg";

const OpacityLoading = () => {
  return (
    <div className={styles.packmanLoaderContainer}>
      <img
        className={styles.packmanLoaderSize}
        src={spinner}
        alt="pacman loader"
      />
    </div>
  );
};

export default OpacityLoading;
