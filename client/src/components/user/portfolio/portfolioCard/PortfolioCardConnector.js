import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPortfolioId,
  getMyStocksAmount,
  getPortfolioName,
  getPortfolioDetails,
} from "../../../../app/selectors/user-entities-selectors";
// import {
//   getRevenue,
//   getDiffPercent,
// } from "../../../../../src/app/selectors/user-view-selectors";
import PortfolioCard from "./PortfolioCard";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  // const myStocksAmount = getMyStocksAmount(state);
  // const price = getRevenue(state);
  // const price = 100;
  // const percent = getDiffPercent(state);
  // const portfolioName = getPortfolioName(state);
  const portfolioDetails = getPortfolioDetails(state);
  return {
    portfolioId,
    // myStocksAmount,
    // price,
    // percent,
    // portfolioName,
    portfolioDetails,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioCard);
