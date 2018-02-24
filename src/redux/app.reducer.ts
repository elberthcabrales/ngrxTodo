import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todo/todo.model';
import { TodoReducer } from './todo/todo.reducer';
import { FilterReducer } from './filter/filter.reducer';
import {Worker} from './worker/worker.model';
import {WorkerReducer} from './worker/worker.reducer';

export interface AppState{
  todos: Todo[],
  filtro: string,
  workers: Worker[]  
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: TodoReducer,
  filtro: FilterReducer,
  workers:WorkerReducer
};