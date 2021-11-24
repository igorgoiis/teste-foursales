import { Reducer } from "redux";
import { ITasksState } from "./types";

const INITIAL_STATE: ITasksState = {
  tasks: []
};

const tasks: Reducer<ITasksState> = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TASK': {
      const { task } = action.payload;



      return {
        tasks: [
          ...state.tasks,
          {
            ...task
          }
        ]
      };
    } 
    default: {
      return state;
    }
  }
}

export default tasks;