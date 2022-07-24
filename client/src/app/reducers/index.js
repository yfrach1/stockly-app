import { combineReducers } from "redux";
import guestViewReducer from "./guest-view-reducer";
const allReducers = combineReducers({ guestViewReducer });

export default allReducers;
