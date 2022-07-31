import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getStockDetails,
  getStockNews,
  getStock,
} from "../../../../app/selectors/user-view-selectors";
import {
  deleteStockAction,
  addStockAction,
} from "../../../../app/actions/user-entities-actions";

import StockDetails from "./StockDetails";

const mapStateToProps = (state, ownProps) => {
  const stockInfo = getStockDetails(state);
  const stockNews = getStockNews(state);
  console.log("stockNews.....:",stockNews)
  const stock = getStock(state);

  return { stock, stockInfo ,stockNews};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ deleteStockAction, addStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
