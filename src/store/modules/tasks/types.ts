export interface ITask {
  id: number;
  title: string;
  description: string;
  category: 'personal' | 'work';
}

export interface ITasksState {
  tasks: ITask[];
}