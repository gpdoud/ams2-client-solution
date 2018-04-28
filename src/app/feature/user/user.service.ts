import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '@feat/user/user';

const url = "http://localhost:44444/api/Users/";

@Injectable()
export class UserService {

  login(username: string, password: string): Observable<User> {
    return this.http.get(url+`Login?username=${username}&password=${password}`) as Observable<User>;
  }
  list(): Observable<User[]> {
    return this.http.get(url+"List") as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(url+"Get/"+id) as Observable<User>;
  }
  create(user: User): Observable<boolean> {
    return this.http.post(url+"Create", user) as Observable<boolean>;
  }
  change(user: User): Observable<boolean> {
    return this.http.post(url+"Change", user) as Observable<boolean>;
  }
  remove(user: User): Observable<boolean> {
    return this.http.post(url+"Remove", user) as Observable<boolean>;
  }

  constructor(private http: HttpClient) { }

}
