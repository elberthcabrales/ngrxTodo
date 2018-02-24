import { Action } from '@ngrx/store';
import {Todo} from './todo.model';
export const ADD_TODO = '[Todo] add';
export const DELETE_TODO = '[Todo] delete';
export const TOGGLE_TODO = '[Todo] toggle';
export const UPDATE_TODO = '[Todo] update';
export const LOAD_TODOS  = '[Todo] get';
export const LOAD_TODOS_SUCCESS = '[Todo] get success';

export class LoadTodosAction implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosSuccessAction implements Action {
  readonly type = LOAD_TODOS_SUCCESS;

  constructor(public payload: Todo[]) {}
}

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  public id: string;

  constructor(
    public text: string
  ) {
    this.id = Math.random().toString();
  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(
    public id: string
  ) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(
    public id: string
  ) {}
}

export class UpdateTodoAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(
    public id: string,
    public newText: string
  ) {}
}


export type TodoActionType = 
LoadTodosAction| 
LoadTodosSuccessAction |
AddTodoAction | 
DeleteTodoAction |
ToggleTodoAction |
UpdateTodoAction;
