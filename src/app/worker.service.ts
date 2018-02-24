import { Injectable } from '@angular/core';
import {Worker} from './../redux/worker/worker.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WorkerService {

  private _baseUrl = 'http://localhost:3000/';
  constructor(private http: Http) { }

  loadWorkers(): Observable<Worker[]> {
    return this.http.get(this._baseUrl + 'workers').map(res => res.json());
  }
}
