import React, { Fragment } from "react";
import styles from "./Home.module.css";
import ClientRoute from "../../../navigation/Route";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className={styles.titleStockly}>Stockly -</div>
      <div className={styles.title}>
        Stock Monitor <br /> Application
      </div>
      <div className={styles.text}>
        Track your money and your investments,
        <br /> and keep your finances organized with Stockly.
        <br /> See the possibilities of your portfolio with our newly designed
        website.
      </div>
      <div className={styles.linksPosition}>
        <Link
          className={styles.signInButton}
          id={styles.option}
          to={ClientRoute.Guest.signIn}
        >
          SIGN IN
        </Link>
        <Link
          className={styles.registerButton}
          id={styles.option}
          to={ClientRoute.Guest.signUp}
        >
          SIGN UP
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
