import { useState } from "react";
import styles from "./Main.module.css";
import UserClient from "../../../app/services/userService.js";
import NavigationBar from "../navigationBar/NavigationBar";
import NavigationBarConnector from "../navigationBar/NavigationBar-connector";
import mainView from "../../../app/constant/MainView";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "../about/AboutUs";

function HomePage() {
  const [componentToView, setComponentToView] = useState(mainView.HOME);

  return (
    <div className={styles.homePageBackground}>
      <NavigationBarConnector setComponentToView={setComponentToView} />
      {/* <Switch>
        <Route
          exact={true}
          path={"/about"}
          component={(props) => <AboutUs {...props} />}
        >
          <AboutUs />
        </Route>

        <Redirect from="/" to={"/home"} />
      </Switch> */}
      <div className={styles.contentPosition}>{componentToView}</div>
    </div>
  );
}

export default HomePage;
