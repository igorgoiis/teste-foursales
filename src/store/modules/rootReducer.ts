import { combineReducers } from "redux";
import tasksPersonal from "./tasksPersonal/reducer";
import tasksWork from "./tasksWork/reducer";

export default combineReducers({
  tasksPersonal,
  tasksWork
})