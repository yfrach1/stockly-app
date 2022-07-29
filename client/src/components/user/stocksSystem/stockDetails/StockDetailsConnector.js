import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStockInfo, getStock } from "../../../../app/selectors/user-view-selectors";
import { deleteStockAction } from "../../../../app/actions/user-entities-actions";

import StockDetails from "./StockDetails";

const mapStateToProps = (state, ownProps) => {
   const stockInfo = getStockInfo(state);
   const stock = getStock(state);

   return { stockInfo, stock };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({ deleteStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
