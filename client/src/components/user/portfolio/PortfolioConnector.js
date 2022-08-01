import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStockAction } from "../../../app/actions/user-entities-actions";
import {
  getPortfolioId,
  getStocksAmount,
} from "../../../app/selectors/user-entities-selectors";
import { getFetchLoading } from "../../../app/selectors/user-view-selectors";
import Portfolio from "./Portfolio";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  const fetchLoading = getFetchLoading(state);
  const stocksAmount = getStocksAmount(state);

  return { portfolioId, fetchLoading, stocksAmount };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ addStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
