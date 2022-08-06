import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPortfolioDetails } from "../../../../app/selectors/user-entities-selectors";
import { setDateFilterAction } from "../../../../app/actions/user-view-actions";
import PortfolioGraph from "./PortfolioGraph";

const mapStateToProps = (state, ownProps) => {
  const portfolioInfo = getPortfolioDetails(state);
  return { portfolioInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ setDateFilterAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioGraph);
