import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPortfolioValue,
  getPortfolioId,
  getMyStocksAmount,
} from "../../../app/selectors/user-entities-selectors";
import PortfolioData from "./PortfolioData";

const mapStateToProps = (state, ownProps) => {
  const portfolioValue = getPortfolioValue(state);
  const portfolioId = getPortfolioId(state);
  const myStocksAmount = getMyStocksAmount(state);
  return { portfolioValue, portfolioId, myStocksAmount };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioData);
