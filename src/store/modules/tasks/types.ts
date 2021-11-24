export interface ITask {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface ITasksState {
  tasks: ITask[];
}