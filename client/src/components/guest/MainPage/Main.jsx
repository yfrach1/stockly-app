import { useState } from "react";
import styles from "./Main.module.css";
import UserClient from "../../../app/services/userService.js";
import NavigationBar from "../navigationBar/NavigationBar";
import NavigationBarConnector from "../navigationBar/NavigationBar-connector";
import mainView from "../../../app/constant/MainView";

function HomePage() {
  const [componentToView, setComponentToView] = useState(mainView.HOME);

  return (
    <div className={styles.homePageBackground}>
      <NavigationBarConnector setComponentToView={setComponentToView} />
      <div className={styles.contentPosition}>{componentToView}</div>
    </div>
  );
}

export default HomePage;
