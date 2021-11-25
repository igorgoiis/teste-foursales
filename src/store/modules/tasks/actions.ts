import { ITask } from "./types";

export function addTask(task: ITask) {
    return {
        type: 'ADD_TASK',
        payload: {
            task,
        }
    }
}