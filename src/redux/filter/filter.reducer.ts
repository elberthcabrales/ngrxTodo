
import * as FilterActionType from './filter.actions';

export function FilterReducer(state: string = 'SHOW_ALL', action: FilterActionType.FilterActionType): string{
  switch (action.type) {
    case FilterActionType.SET_FILTER: {
      return action.filter;
    }
    case FilterActionType.FINDBYWORKER:{
      return action.id;
    }
    default: {
      return state;
    }
  }
}