import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStockAction } from "../../../../app/actions/user-entities-actions";
import { getStockDetailsAction ,getStockNewsAction} from "../../../../app/actions/user-view-actions";

import StockCard from "./StockCard";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ getStockDetailsAction ,getStockNewsAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
