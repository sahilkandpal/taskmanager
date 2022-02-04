import tasksReducer from "./tasksReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasksReducer,
});

export default rootReducer;
