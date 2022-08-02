import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStockDetails } from "../../../../app/selectors/user-entities-selectors";
import { setDateFilterAction } from "../../../../app/actions/user-view-actions";
import StockGraph from "./StockGraph";

const mapStateToProps = (state, ownProps) => {
  const stockInfo = getStockDetails(state);

  return { stockInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ setDateFilterAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StockGraph);
