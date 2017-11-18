import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ClarityDesignDataServiceService {
  private servUrl = "https://jsonplaceholder.typicode.com/users";
  private servUrlTodo = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http: Http) { }

  getUsers(): Observable<Response> {
    return this.http.get(this.servUrl);
  }

  addusrloyee(usr: User): Observable<Response> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this.http.post(this.servUrlTodo, JSON.stringify(usr), options)
  }

  updateusrloyee(id: string, usr: User): Observable<Response> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this.http.put(this.servUrlTodo + `/` + id, JSON.stringify(usr), options)
  }

  deleteusrloyee(id: string): Observable<Response> {
    return this.http.delete(this.servUrlTodo + `/` + id)
  }

}
