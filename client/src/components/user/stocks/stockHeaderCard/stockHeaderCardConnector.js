import { connect } from "react-redux";
import { getStock } from "../../../../app/selectors/user-entities-selectors";
import stockHeaderCard from "./stockHeaderCard";

const mapStateToProps = (state, ownProps) => {
  const stock = getStock(state);
  return { stock };
};

export default connect(mapStateToProps, null)(stockHeaderCard);
