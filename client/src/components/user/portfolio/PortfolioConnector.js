import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStockAction } from "../../../app/actions/user-entities-actions";
import { getPortfolioId } from "../../../app/selectors/user-entities-selectors";
import Portfolio from "./Portfolio";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  return { portfolioId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ addStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
