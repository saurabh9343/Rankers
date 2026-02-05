import { combineReducers } from "redux";
import allReducer from "./reaction/reducer";

const rootReducer = combineReducers({
  userCourses: allReducer,
  user: allReducer,
  allReducer: allReducer,
});
export default rootReducer;
