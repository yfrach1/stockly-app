import styles from "./PackmanLoader.module.css";
import packmanLoader from "../../../assets/dynamicSvg/packman_loader.svg";
const PackmanLoader = () => {
  return (
    <div className={styles.packmanLoaderContainer}>
      <div className={styles.text}>Redirect in a few seconds</div>
      <img
        className={styles.packmanLoaderSize}
        src={packmanLoader}
        alt="pacman loader"
      />
    </div>
  );
};

export default PackmanLoader;
