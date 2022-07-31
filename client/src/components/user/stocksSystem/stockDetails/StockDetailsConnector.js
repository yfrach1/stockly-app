import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStockDetails } from "../../../../app/selectors/user-entities-selectors";
import { getStock } from "../../../../app/selectors/user-entities-selectors";
import {
   deleteStockAction,
   addStockAction,
   updateStockQuantityAction,
} from "../../../../app/actions/user-entities-actions";

import StockDetails from "./StockDetails";

const mapStateToProps = (state, ownProps) => {
   const stockInfo = getStockDetails(state);
   const stock = getStock(state);

   return { stock, stockInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators(
      { deleteStockAction, addStockAction, updateStockQuantityAction },
      dispatch
   );
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);
