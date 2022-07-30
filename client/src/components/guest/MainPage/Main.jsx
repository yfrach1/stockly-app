import styles from "./Main.module.css";
import NavigationBar from "../navigationBar/NavigationBar";
import GuestSwitch from "../../../navigation/GuestSwitch";

function Main() {
  return (
    <div className={styles.homePageBackground}>
      {/* <NavigationBarForPhone />
      <NavigationBarForMac /> */}
      <NavigationBar />
      <div className={styles.contentPosition}>
        <GuestSwitch />
      </div>
    </div>
  );
}

export default Main;
