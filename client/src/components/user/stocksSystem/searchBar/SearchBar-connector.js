import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSearchKey } from "../../../../app/selectors/user-view-selectors";
import { setSearchKeyAction } from "../../../../app/actions/user-view-actions";
import SearchBar from "./SearchBar";

const mapStateToProps = (state, ownProps) => {
  const searchKey = getSearchKey(state);

  return { searchKey };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ setSearchKeyAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
