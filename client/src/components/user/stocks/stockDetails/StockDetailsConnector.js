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
  getEditItemLoading,
} from "../../../../app/selectors/user-view-selectors";
import {
  deleteStockAction,
  addStockAction,
  updateStockQuantityAction,
} from "../../../../app/actions/user-entities-actions";

import StockDetails from "./StockDetails";

const mapStateToProps = (state, ownProps) => {
  const stockInfo = getStockDetails(state);
  const stockNews = getStockNews(state);
  const stock = getStock(state);
  const detailsLoading = getDetailsLoading(state);
  const portfolioId = getPortfolioId(state);
  const editItemLoading = getEditItemLoading(state);
  return {
    stock,
    stockInfo,
    stockNews,
    detailsLoading,
    portfolioId,
    editItemLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      deleteStockAction,
      addStockAction,
      updateStockQuantityAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
