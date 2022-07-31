import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchStockAction } from "../../../../app/actions/user-entities-actions";
import SearchBar from "./SearchBar";

const mapStateToProps = (state, ownProps) => {
   return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({ searchStockAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
