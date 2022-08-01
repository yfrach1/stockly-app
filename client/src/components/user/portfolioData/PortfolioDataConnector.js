import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPortfolioValue } from "../../../app/selectors/user-entities-selectors";
import PortfolioData from "./PortfolioData";

const mapStateToProps = (state, ownProps) => {
  const portfolioValue = getPortfolioValue(state);
  return { portfolioValue };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioData);
