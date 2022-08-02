import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getDiffPercent,
  getRevenu,
  get,
} from "../../../app/selectors/user-view-selectors";
import { getStockDetails } from "../../../app/selectors/user-entities-selectors";
import Portfolio from "./Portfolio";

const mapStateToProps = (state, ownProps) => {
  const revenu = getRevenu(state);
  const diffPercent = getDiffPercent(state);
  const stockInfo = getStockDetails(state);

  return { revenu, diffPercent, stockInfo };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
