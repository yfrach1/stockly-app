import React from "react";
import { useState } from "react";
import ConnectOptionDisplay from "../connectOptions/ConnectOptionDisplay";
import ConnectOptionDisplayConnector from "../connectOptions/ConnectOptionDisplay-connector";
import styles from "./Home.module.css";
const Home = ({
  showConnectOptions,
  setShowSignInAction,
  setShowSignUpAction,
}) => {
  // const [showConnectOptions, setShowConnectOptions] = useState(false);
  console.log("showConnectOptions: ", showConnectOptions);
  return (
    <React.Fragment>
      {showConnectOptions ? (
        <ConnectOptionDisplayConnector />
      ) : (
        <React.Fragment>
          <div className={styles.title}>
            Stock Monitor <br /> Application
          </div>
          <div className={styles.text}>
            Track your money and your investments,
            <br /> and keep your finances organized with Stockly.
            <br /> See the possibilities of your portfolio with our newly
            designed.
          </div>
          <div className={styles.linksPosition}>
            <div
              className={styles.signInButton}
              id={styles.option}
              // onClick={() => setShowConnectOptions("sign in")}
              onClick={() => setShowSignInAction()}
            >
              SIGN IN
            </div>
            <div
              className={styles.registerButton}
              id={styles.option}
              // onClick={() => setShowConnectOptions("sign up")}
              onClick={() => setShowSignUpAction()}
            >
              REGISTER
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
