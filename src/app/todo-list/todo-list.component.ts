import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable'

import { AppState } from './../../redux/app.reducer';
import { Todo } from './../../redux/todo/todo.model';
import { getVisibleTodos } from './../../redux/todo/todo.selectors';
import * as FilterActions from './../../redux/filter/filter.actions';
import * as TodoActions from './../../redux/todo/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  
  todos$: Observable<Todo[]>;
 

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.route.params
    .subscribe(params => {
      this.setFilter(params.filter);
    }); 
  }

  ngOnInit() {
    this.todos$ = this.store.select(getVisibleTodos);
   
    /*this.todoService.loadBlogs().subscribe((todos)=>{
      console.log(todos)
    })*/
  }

  private setFilter(filter: string){
    switch (filter) {
      case 'active': {
        const action = new FilterActions.SetFilterAction('SHOW_ACTIVE');
        this.store.dispatch(action);
        break;
      }
      case 'completed': {
        const action = new FilterActions.SetFilterAction('SHOW_COMPLETED');
        this.store.dispatch(action);
        break;
      }
      case 'all': {
        const action = new FilterActions.SetFilterAction('SHOW_ALL');
        this.store.dispatch(action);
        break;
      }

    }
  }

}
