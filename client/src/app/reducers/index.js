import { combineReducers } from "redux";
import guestView from "./guest-view-reducer";
const allReducers = combineReducers({ guestView });

export default allReducers;
