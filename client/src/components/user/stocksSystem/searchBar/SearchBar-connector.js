import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSearchKey } from "../../../../app/selectors/user-view-selectors";
import { setSearchKeyAction } from "../../../../app/actions/user-view-actions";
import { addStockAction } from "../../../../app/actions/user-entities-actions";
import SearchBar from "./SearchBar";

const mapStateToProps = (state, ownProps) => {
  const searchKey = getSearchKey(state);

  return { searchKey };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ setSearchKeyAction, addStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
