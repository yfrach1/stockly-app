import { combineReducers } from "redux";
import userEntities from "./user-entities-reducer";
import userView from "./user-view-reducer";
const allReducers = combineReducers({ userEntities, userView });

export default allReducers;
