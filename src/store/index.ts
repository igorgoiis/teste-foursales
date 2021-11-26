import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';import { ITasksState } from './modules/tasksPersonal/types';

export interface IState {
  tasksPersonal: ITasksState;
  tasksWork: ITasksState;
}

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;