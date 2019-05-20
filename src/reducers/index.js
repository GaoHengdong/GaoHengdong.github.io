import { combineReducers } from "redux";
import headerMenuCheckedReducer from "./headerMenuCheckedReducer";
import blogListReducer from "./blogListReducer";

export default combineReducers({
  headerMenu: headerMenuCheckedReducer,
  blog: blogListReducer
});
