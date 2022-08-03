import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPortfolioValue,
  getPortfolioId,
} from "../../../app/selectors/user-entities-selectors";
import PortfolioData from "./PortfolioData";

const mapStateToProps = (state, ownProps) => {
  const portfolioValue = getPortfolioValue(state);
  const portfolioId = getPortfolioId(state);
  return { portfolioValue, portfolioId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioData);
