import { connect } from "react-redux";
import {
  getPortfolioId,
  getPortfolioDetails,
  getPortfolioCurrentValue,
  getPortfolioCurrentChangePercent,
} from "../../../../app/selectors/user-entities-selectors";
import PortfolioCard from "./PortfolioCard";

const mapStateToProps = (state, ownProps) => {
  const portfolioId = getPortfolioId(state);
  const portfolioDetails = getPortfolioDetails(state);
  const currentValue = getPortfolioCurrentValue(state);
  const currentChangePercent = getPortfolioCurrentChangePercent(state);
  // new profit or losses
  //ne perdent
  return {
    portfolioId,
    portfolioDetails,
    currentValue,
    currentChangePercent,
  };
};

export default connect(mapStateToProps, null)(PortfolioCard);
