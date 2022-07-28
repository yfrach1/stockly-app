import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMyStocks, getSearchStocks } from "../../../app/selectors/user-entities-selectors";

import ListStocks from "./ListStocks";

const mapStateToProps = (state, ownProps) => {
   const myStocks = getMyStocks(state);
   const searchStocks = getSearchStocks(state);

   return { myStocks, searchStocks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListStocks);
