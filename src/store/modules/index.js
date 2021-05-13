import { combineReducers } from "redux";
import slideState from "./slideState";
import filterState from "./filterState";

export default combineReducers({
  slideState,
  filterState
});
