import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPortfolioId,
  getStocksStatus,
  getStocksAmount,
  getMyStocksAmount,
} from "../../../../app/selectors/user-entities-selectors";
import { setPortfolioData } from "../../../../app/actions/user-entities-actions";
import PortfolioDetails from "./PortfolioDetails";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  const myStockAmount = getMyStocksAmount(state);

  // const stocksStatus = getStocksStatus(state);
  // const stocksStatus = "1";
  return { portfolioId, myStockAmount };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ setPortfolioData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetails);
