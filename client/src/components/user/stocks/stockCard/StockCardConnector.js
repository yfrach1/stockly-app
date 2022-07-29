import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStockAction } from "../../../../app/actions/user-entities-actions";
import { getStockDetailsAction } from "../../../../app/actions/user-view-actions";
import { getStockInfo } from "../../../../app/selectors/user-view-selectors";

import StockCard from "./StockCard";

const mapStateToProps = (state, ownProps) => {
   const stockInfo = getStockInfo(state);

   return { stockInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({ addStockAction, getStockDetailsAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
