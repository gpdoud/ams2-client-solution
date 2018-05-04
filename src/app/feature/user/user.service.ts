import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '@feat/system/system.service';
import { User } from '@feat/user/user';

@Injectable()
export class UserService {

  url = this.syssvc.settings.baseurl + "api/Users/";

  login(username: string, password: string): Observable<User> {
    return this.http.get(this.url+`Login?username=${username}&password=${password}`) as Observable<User>;
  }
  list(): Observable<User[]> {
    return this.http.get(this.url+"List") as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(this.url+"Get/"+id) as Observable<User>;
  }
  create(user: User): Observable<boolean> {
    return this.http.post(this.url+"Create", user) as Observable<boolean>;
  }
  change(user: User): Observable<boolean> {
    return this.http.post(this.url+"Change", user) as Observable<boolean>;
  }
  remove(user: User): Observable<boolean> {
    return this.http.post(this.url+"Remove", user) as Observable<boolean>;
  }

  constructor(private http: HttpClient, private syssvc: SystemService) { }

}
