export interface ITask {
  id: number;
  title: string;
  description: string;
  category: string;
  done: boolean;
}

export interface ITasksState {
  tasks: ITask[];
}