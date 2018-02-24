import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable'

import { AppState } from './../../redux/app.reducer';
import { Worker } from './../../redux/worker/worker.model';
import * as WorkerActions from './../../redux/worker/worker.actions';



@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
  workers$: Observable<Worker[]>;
  worker: Worker;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.workers$ = this.store.select(state=> state.workers);
    
  }

}
