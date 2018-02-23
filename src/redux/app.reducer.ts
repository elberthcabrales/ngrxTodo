import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todo/todo.model';
import { TodoReducer } from './todo/todo.reducer';
import { FilterReducer } from './filter/filter.reducer';

export interface AppState{
  todos: Todo[],
  filtro: string
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: TodoReducer,
  filtro: FilterReducer
};