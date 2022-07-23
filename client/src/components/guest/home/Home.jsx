import React from "react";
import { useState } from "react";
import ConnectOptionDisplay from "../connectOptions/ConnectOptionDisplay";
import styles from "./Home.module.css";
const Home = (props) => {
  const [showConnectOptions, setShowConnectOptions] = useState(props.ggg);
  return (
    <React.Fragment>
      {showConnectOptions ? (
        showConnectOptions === "sign in" ? (
          <ConnectOptionDisplay showSignIn={true} />
        ) : (
          <ConnectOptionDisplay showSignUp={true} />
        )
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
              onClick={() => setShowConnectOptions("sign in")}
            >
              SIGN IN
            </div>
            <div
              className={styles.registerButton}
              id={styles.option}
              onClick={() => setShowConnectOptions("sign up")}
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
