import { Action } from '@ngrx/store';
import {Worker} from './worker.model';

export const LOAD_WORKERS  = '[Worker] get';
export const LOAD_WORKERS_SUCCESS = '[Worker] get success';

export class LoadWorkersAction implements Action {
  readonly type = LOAD_WORKERS;
}

export class LoadWorkersSuccessAction implements Action {
  readonly type = LOAD_WORKERS_SUCCESS;

  constructor(public payload: Worker[]) {}
}


export type WorkerActionType = 
LoadWorkersAction| 
LoadWorkersSuccessAction;