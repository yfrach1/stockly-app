import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchStockAction } from "../../../../app/actions/user-entities-actions";
import { setSearchKeyAction } from "../../../../app/actions/user-entities-actions";
import SearchBar from "./SearchBar";

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { searchStockAction, setSearchKeyAction },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SearchBar);
