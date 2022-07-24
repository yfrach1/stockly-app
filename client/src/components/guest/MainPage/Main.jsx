import styles from "./Main.module.css";
import NavigationBar from "../navigationBar/NavigationBar";
import GuestSwitch from "../../../navigation/GuestSwitch";

function HomePage() {
  return (
    <div className={styles.homePageBackground}>
      <NavigationBar />
      <div className={styles.contentPosition}>
        <GuestSwitch />
      </div>
    </div>
  );
}

export default HomePage;
