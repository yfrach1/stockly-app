import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStockInfo } from "../../../../app/selectors/user-view-selectors";

import StockDetails from "./StockDetails";

const mapStateToProps = (state, ownProps) => {
   const stockInfo = getStockInfo(state);

   return { stockInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
