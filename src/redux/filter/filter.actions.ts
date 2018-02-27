import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] set';
export const FINDBYWORKER ='[FIND] by worker'

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(
    public filter: string
  ) {}
}

export class findByWorkerAction implements Action{
  readonly type = FINDBYWORKER;
    constructor(public id:string){}
}

export type FilterActionType = 
SetFilterAction| findByWorkerAction;