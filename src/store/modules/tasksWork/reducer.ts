import produce from "immer";
import { Reducer } from "redux";

import { ITasksState } from "./types";

const INITIAL_STATE: ITasksState = {
  tasks: []
};

const tasksWork: Reducer<ITasksState> = (state=INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_TASK_WORK': {
        const { task } = action.payload;
        draft.tasks.push(task);
        break
      }

      case 'CHECK_UNCHECK_WORK_TASK': {
        const { task } = action.payload;

        const taskIndex = draft.tasks.findIndex(item => item.id === task.id);

        if (taskIndex >= 0) {
          draft.tasks[taskIndex].done = !draft.tasks[taskIndex].done;
          console.log('Done', draft.tasks[taskIndex]);
        }

        break
      }

      case 'EDIT_TASK_WORK': {
        const { task } = action.payload;

        const taskIndex = draft.tasks.findIndex(item => item.id === task.id);

        if (taskIndex >= 0) {
          draft.tasks[taskIndex].title = task.title;
          draft.tasks[taskIndex].description = task.description;
        }

        break;
      }

      case 'DELETE_TASK_WORK': {
        const { task } = action.payload;

        const taskIndex = draft.tasks.findIndex(item => item.id === task.id);

        if (taskIndex >= 0) {
          draft.tasks.splice(taskIndex, 1);
        }

        break;
      }

      default: {
        return state;
      }
    }
  });
}

export default tasksWork;