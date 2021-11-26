import { ITask } from "./types";

export function addTaskWork(task: ITask) {
    return {
        type: 'ADD_TASK_WORK',
        payload: {
            task,
        }
    }
}

export function checkUncheckWorkTask(task: ITask) {
    return {
        type: 'CHECK_UNCHECK_WORK_TASK',
        payload: {
            task
        }
    }
}

export function editTaskWork(task: ITask) {
    return {
        type: 'EDIT_TASK_WORK',
        payload: {
            task
        }
    }
} 

export function deleteTaskWork(task: ITask) {
    return {
        type: 'DELETE_TASK_WORK',
        payload: {
            task
        }
    }
}