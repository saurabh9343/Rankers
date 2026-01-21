import { combineReducers } from "redux";
import allReducer from "./reaction/reducer";

const rootReducer = combineReducers({
  user: allReducer,
});
export default rootReducer;
