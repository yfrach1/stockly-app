import { combineReducers } from "redux";
import guestView from "./guest-view-reducer";
import userEntities from "./user-entities-reducer";
const allReducers = combineReducers({ guestView, userEntities });

export default allReducers;
