import { combineReducers } from "redux";
import slideState from "./slideState";
import dictionaryState from "./dictionaryState";

export default combineReducers({
  slideState,
  dictionaryState
});
