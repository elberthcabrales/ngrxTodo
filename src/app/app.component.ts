import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import { AppState } from '../redux/app.reducer';
import * as TodoActions from './../redux/todo/todo.actions';
import * as WorkerActions from './../redux/worker/worker.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
    this.store.dispatch(new TodoActions.LoadTodosAction());
    this.store.dispatch(new WorkerActions.LoadWorkersAction());
  }
  title = 'app';
  constructor(private store: Store<AppState>){}
}
