import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStockAction } from "../../../app/actions/user-entities-actions";
import {
  getPortfolioId,
  getStocksAmount,
  getMyStocks,
} from "../../../app/selectors/user-entities-selectors";
import { getFetchLoading } from "../../../app/selectors/user-view-selectors";
import Portfolio from "./Portfolio";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  const fetchLoading = getFetchLoading(state);
  const stocksAmount = getStocksAmount(state);
  const myStocks = getMyStocks(state);
  return { portfolioId, fetchLoading, stocksAmount, myStocks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ addStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
