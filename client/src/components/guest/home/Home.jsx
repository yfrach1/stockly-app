import React from "react";
import ConnectOptionDisplayConnector from "../connectOptions/ConnectOptionDisplay-connector";
import styles from "./Home.module.css";
import PropTypes from "prop-types";

const Home = ({
  showConnectOptions,
  setShowSignInAction,
  setShowSignUpAction,
}) => {
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
              onClick={() => setShowSignInAction()}
            >
              SIGN IN
            </div>
            <div
              className={styles.registerButton}
              id={styles.option}
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

Home.propTypes = {
  showConnectOptions: PropTypes.bool,
  setShowSignInAction: PropTypes.func,
  setShowSignUpAction: PropTypes.func,
};

Home.defaultProps = {
  showConnectOptions: false,
  setShowSignInAction: () => {},
  setShowSignUpAction: () => {},
};

export default Home;
