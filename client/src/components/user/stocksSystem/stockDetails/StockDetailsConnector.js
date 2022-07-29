import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStockInfo, getStock } from "../../../../app/selectors/user-view-selectors";

import StockDetails from "./StockDetails";

const mapStateToProps = (state, ownProps) => {
   const stockInfo = getStockInfo(state);
   const stock = getStock(state);

   return { stockInfo, stock };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
