import styles from "./Sidebar.module.css";
import { Link, useHistory } from "react-router-dom";
import downArrow from "../../../assets/images/down_arrow.svg";
import upArrow from "../../../assets/images/up_arrow.svg";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaDollarSign, FaBitcoin, FaSignOutAlt } from "react-icons/fa";
import logo from "../../../assets/images/newlogo.png";
import { Fragment, useState } from "react";
import { useEffect } from "react";
function Sidebar({
  firstName,
  lastName,
  portfolio,
  signOutAction,
  setPortfolioIdAction,
}) {
  const [showStocksContent, setShowStocksContent] = useState(false);
  const [showCryptoContent, setShowCryptoContent] = useState(false);

  const history = useHistory();
  const handleDisplayStocksContent = () => {
    setShowStocksContent((prevShowStocksContent) => !prevShowStocksContent);
  };
  const handleDisplayCryptoContent = () => {
    setShowCryptoContent((prevShowCryptoContent) => !prevShowCryptoContent);
  };

  return (
    <div className={styles.sidebarContainer}>
      <img src={logo} alt="logo" className={styles.sidebarLogo} />
      <div className={styles.userGreeting}>
        Welcome {firstName} {lastName}!
      </div>
      <div className={styles.contentHeadLine}>Content</div>

      <div
        className={styles.alignCategory}
        onClick={handleDisplayStocksContent}
      >
        <FaDollarSign /> <div className={styles.categoryText}>Stocks</div>
        <img
          className={styles.arrowIcon}
          src={showStocksContent ? upArrow : downArrow}
          alt="arrow"
        />
      </div>
      {showStocksContent ? (
        <Fragment>
          <Link
            id={styles.option}
            to={`/stocks/${portfolio.id}/dashboard`}
            onClick={() => setPortfolioIdAction(portfolio.id)}
          >
            {portfolio.name}
          </Link>
        </Fragment>
      ) : null}

      <div
        className={styles.alignCategory}
        onClick={handleDisplayCryptoContent}
      >
        <FaBitcoin /> <div className={styles.categoryText}>Crypto</div>
        <img
          className={styles.arrowIcon}
          src={showCryptoContent ? upArrow : downArrow}
          alt="arrow"
        />
      </div>
      {showCryptoContent ? <div id={styles.option}>Coming soon!</div> : <></>}

      <div className={styles.alignSignOut}>
        <FaSignOutAlt />{" "}
        <button
          onClick={() => {
            signOutAction();
            history.push("/home");
          }}
          className={styles.categoryText}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

//   return (
//     <div className={styles.sidebarContainer}>
//       <img src={logo} alt="logo" className={styles["sidebar-logo"]} />
//       <p className={styles["user-greeting"]}>Welcome back username</p>
//       <Navigation
//         activeItemId={location.pathname}
//         onSelect={({ itemId }) => {
//           history.push(itemId);
//         }}
//         items={[
//           {
//             title: "Stocks",
//             itemId: "/stocks",
//             elemBefore: () => <FaDollarSign />,
//             subNav: [
//               {
//                 title: "My Portfolio",
//                 itemId: "/stocks/myportfolio",
//               },
//             ],
//           },
//           {
//             title: "Crypto",
//             itemId: "/crypto",
//             elemBefore: () => <FaBitcoin />,
//           },
//           {
//             title: "Sign Out",
//             itemId: "/signout",
//             elemBefore: () => <FaSignOutAlt />,
//           },
//         ]}
//       />
//     </div>
//   );
// }

export default Sidebar;
