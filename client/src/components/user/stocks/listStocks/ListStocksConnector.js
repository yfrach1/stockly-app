import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getStocks,
  getSearchKey,
} from "../../../../app/selectors/user-entities-selectors";
import ListStocks from "./ListStocks";

const mapStateToProps = (state, ownProps) => {
  const stocks = getStocks(state);
  const searchKey = getSearchKey(state);
  return { stocks, searchKey };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListStocks);
