import { Injectable } from '@angular/core';
import {Todo} from './../redux/todo/todo.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {

  private _baseUrl = 'http://localhost:3000/';
  constructor(private http: Http) { }

  loadTodos(): Observable<Todo[]> {
    return this.http.get(this._baseUrl + 'todos').map(res => res.json());
  }

 /* addBlog(blog: Todo): Observable<Object> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._baseUrl + 'blogs', blog, options)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteBlog(blog: Todo): Observable<Object> {
    return this.http.delete(this._baseUrl + 'blogs' + '/' + blog.id)
      .map((res) => blog)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }*/
  
}
