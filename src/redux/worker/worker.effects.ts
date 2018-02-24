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

import * as WorkerActions from './worker.actions';
import { Worker } from './worker.model';
import {WorkerService} from './../../app/worker.service';

@Injectable()
export class WorkerEffects{
    constructor(
        private actions$: Actions,
        private workerService: WorkerService,
    ){}

    @Effect()
    loadWorkers: Observable<Action> = this.actions$
    .ofType<WorkerActions.LoadWorkersAction>(WorkerActions.LOAD_WORKERS)
    .mergeMap(action => 
        this.workerService.loadWorkers().map((workers:Worker[])=>{
            console.log(workers);
            return new WorkerActions.LoadWorkersSuccessAction(workers);
        }));
}