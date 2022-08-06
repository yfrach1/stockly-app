import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {} from "../../../../app/selectors/user-entities-selectors";
import {
  getStock,
  getStockDetails,
  getStockNews,
} from "../../../../app/selectors/user-entities-selectors";
import {
  getDetailsLoading,
  getPortfolioId,
} from "../../../../app/selectors/user-view-selectors";
import {
  deleteStockAction,
  addStockAction,
  updateStockQuantityAction,
  setPortfolioData,
} from "../../../../app/actions/user-entities-actions";

import StockDetails from "./StockDetails";

const mapStateToProps = (state, ownProps) => {
  const stockInfo = getStockDetails(state);
  const stockNews = getStockNews(state);
  const stock = getStock(state);
  const detailsLoading = getDetailsLoading(state);
  const portfolioId = getPortfolioId(state);
  return { stock, stockInfo, stockNews, detailsLoading, portfolioId };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      deleteStockAction,
      addStockAction,
      updateStockQuantityAction,
      setPortfolioData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
