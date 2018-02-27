import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable'

import { AppState } from './../../redux/app.reducer';
import { Worker } from './../../redux/worker/worker.model';
import * as WorkerActions from './../../redux/worker/worker.actions';
import * as FilterActions from './../../redux/filter/filter.actions';
import {Router} from '@angular/router'


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit  {

  workers$: Observable<Worker[]>;
 // @Output() selectWorker: EventEmitter<number>= new EventEmitter();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.workers$ = this.store.select(state=> state.workers);
  }
  onChange($event) {

    const action =  new FilterActions.findByWorkerAction($event);
    this.store.dispatch(action);
  }

}
