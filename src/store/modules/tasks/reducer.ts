import { Reducer } from "redux";
import { ITasksState } from "./types";

const INITIAL_STATE: ITasksState = {
  tasks: []
};

const tasks: Reducer<ITasksState> = () => {
  return INITIAL_STATE;
}

export default tasks;