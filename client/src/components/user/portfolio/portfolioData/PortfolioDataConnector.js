import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPortfolioId,
  getMyStocksAmount,
} from "../../../../app/selectors/user-entities-selectors";
import {
  getRevenue,
  getDiffPercent,
} from "../../../../app/selectors/user-view-selectors";
import PortfolioData from "./PortfolioData";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  const myStocksAmount = getMyStocksAmount(state);
  const price = getRevenue(state);
  const percent = getDiffPercent(state);
  return { portfolioId, myStocksAmount, price, percent };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioData);
