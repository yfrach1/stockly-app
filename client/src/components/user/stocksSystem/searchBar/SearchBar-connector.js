import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchStockAction } from "../../../../app/actions/user-entities-actions";
import { setSearchKeyAction } from "../../../../app/actions/user-entities-actions";
import { getSearchKey } from "../../../../app/selectors/user-view-selectors";
import SearchBar from "./SearchBar";

const mapStateToProps = (state, ownProps) => {
  //   const searchKey = getSearchKey(state);
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { searchStockAction, setSearchKeyAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
