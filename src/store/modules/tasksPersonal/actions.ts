import { ITask } from "./types";

export function addTaskPersonal(task: ITask) {
    return {
        type: 'ADD_TASK_PERSONAL',
        payload: {
            task,
        }
    }
}

export function checkUncheckPersonalTask(task: ITask) {
    return {
        type: 'CHECK_UNCHECK_PERSONAL_TASK',
        payload: {
            task
        }
    }
}

export function editTaskPersonal(task: ITask) {
    return {
        type: 'EDIT_TASK_PERSONAL',
        payload: {
            task
        }
    }
}

export function deleteTaskPersonal(task: ITask) {
    return {
        type: 'DELETE_TASK_PERSONAL',
        payload: {
            task
        }
    }
}