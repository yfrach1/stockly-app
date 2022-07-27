import { combineReducers } from "redux";
import guestView from "./guest-view-reducer";
import userEntities from "./user-entities-reducer";
import userView from "./user-view-reducer";
const allReducers = combineReducers({ guestView, userEntities, userView });

export default allReducers;
