import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStockAction } from "../../../../app/actions/user-entities-actions";

import StockCard from "./StockCard";

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({ addStockAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(StockCard);
