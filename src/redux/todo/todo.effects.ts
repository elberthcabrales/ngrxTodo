import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import * as TodoActions from './todo.actions';
import { Todo } from './todo.model';
import {TodoService} from './../../app/todo.service';

@Injectable()
export class TodoEffects{
    constructor(
        private actions$: Actions,
        private todoService: TodoService,
    ){}

    @Effect()
    loadAll: Observable<Action> = this.actions$
    .ofType<TodoActions.LoadTodosAction>(TodoActions.LOAD_TODOS)
    .mergeMap(action => 
        this.todoService.loadBlogs().map((todos:Todo[])=>{
            console.log(todos);
            return new TodoActions.LoadTodosSuccessAction(todos);
        }));
}