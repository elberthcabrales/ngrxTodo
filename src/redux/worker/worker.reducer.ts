import { Worker } from './worker.model';
import * as WorkerActions from './worker.actions';

const initialState: Worker[] = [];

export function WorkerReducer(state: Worker[] = initialState, action: WorkerActions.WorkerActionType): Worker[]{
 
  switch (action.type) {
    case WorkerActions.LOAD_WORKERS: {
      return [
        ...state
      ];
    }
    case WorkerActions.LOAD_WORKERS_SUCCESS: {
      return [...action.payload];
    }
    default:{
      return state;
    }
  }
}
