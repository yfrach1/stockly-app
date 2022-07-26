import React from "react";
import styles from "./FetchStockLoader.module.css";
import spinner from "../../../assets/images/newlogoCropped.png";
import { motion } from "framer-motion";

const FetchStockLoader = () => {
  return (
    <div className={styles.fetchLoaderContainer}>
      <motion.img
        className={styles.fetchLoaderSize}
        src={spinner}
        animate={{
          scale: [0.5, 2.5, 2.5, 0.5, 0.5],
          rotate: [0, 0, 360, 360, 0],
        }}
        transition={{ ease: "easeInOut", duration: 2.5, repeat: Infinity }}
      />
    </div>
  );
};

export default FetchStockLoader;
